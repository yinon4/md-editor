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
import { RefObject } from 'react'
import './Editor.css'
import { simpleSandpackConfig } from './configs'

export const Editor = (props: {
  markdown: string
  editorRef: RefObject<MDXEditorMethods>
}) => {
  return (
    <MDXEditor
      ref={props.editorRef}
      className="mx-auto max-w-screen-lg rounded-lg border-2 border-gray-800"
      markdown={props.markdown}
      plugins={plugins(props.markdown)}
    />
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
