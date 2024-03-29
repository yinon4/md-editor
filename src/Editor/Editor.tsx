import {
    BoldItalicUnderlineToggles,
    ChangeCodeMirrorLanguage,
    ConditionalContents,
    CreateLink,
    DiffSourceToggleWrapper,
    InsertCodeBlock,
    InsertImage,
    InsertSandpack,
    InsertTable,
    InsertThematicBreak,
    MDXEditor,
    MDXEditorMethods,
    ShowSandpackInfo,
    UndoRedo,
    codeBlockPlugin,
    codeMirrorPlugin,
    diffSourcePlugin,
    headingsPlugin,
    imagePlugin,
    linkDialogPlugin,
    linkPlugin,
    listsPlugin,
    markdownShortcutPlugin,
    quotePlugin,
    sandpackPlugin,
    tablePlugin,
    thematicBreakPlugin,
    toolbarPlugin,
} from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'
import { useRef } from 'react'
import './Editor.css'
import { simpleSandpackConfig } from './configs'

export const Editor = (props: { markdown: string }) => {
  const ref = useRef<MDXEditorMethods>(null)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault()
      if (ref.current) {
        localStorage.setItem('markdown', ref.current.getMarkdown())
      }
    }
  }

  return (
    <div onKeyDown={handleKeyDown}>
      <MDXEditor
        ref={ref}
        className="border-2 border-gray-800 mx-auto rounded-lg max-w-screen-lg"
        markdown={props.markdown}
        plugins={plugins(props.markdown)}
      />
    </div>
  )
}

const Toolbar = () => (
  <DiffSourceToggleWrapper>
    <ConditionalContents
      options={[
        {
          when: (editor) => editor?.editorType === 'codeblock',
          contents: () => <ChangeCodeMirrorLanguage />,
        },
        {
          when: (editor) => editor?.editorType === 'sandpack',
          contents: () => <ShowSandpackInfo />,
        },
        {
          fallback: () => (
            <>
              <UndoRedo />
              <BoldItalicUnderlineToggles />
              <InsertThematicBreak />
              <InsertImage />
              <CreateLink />
              <InsertTable />
              <InsertCodeBlock />
              <InsertSandpack />
            </>
          ),
        },
      ]}
    />
  </DiffSourceToggleWrapper>
)

const plugins = (markdown: string) => [
  imagePlugin(),
  thematicBreakPlugin(),
  headingsPlugin(),
  listsPlugin(),
  linkPlugin(),
  linkDialogPlugin(),
  tablePlugin(),
  quotePlugin(),
  markdownShortcutPlugin(),
  codeBlockPlugin({ defaultCodeBlockLanguage: 'ts' }),
  sandpackPlugin({ sandpackConfig: simpleSandpackConfig }),
  codeMirrorPlugin({ codeBlockLanguages: { ts: 'TypeScript', css: 'CSS' } }),
  diffSourcePlugin({ viewMode: 'rich-text', diffMarkdown: markdown }),
  toolbarPlugin({
    toolbarContents: Toolbar,
  }),
]
