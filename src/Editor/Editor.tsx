import {
  BoldItalicUnderlineToggles,
  InsertThematicBreak,
  MDXEditor,
  UndoRedo,
  headingsPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
} from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'
import './Editor.css'

export const Editor = () => {
  return (
    <MDXEditor
      className="mx-auto max-w-screen-lg rounded-lg border-2 border-gray-800"
      markdown={`asdf

      ---
      
      asdf`}
      plugins={[
        thematicBreakPlugin(),
        headingsPlugin(),
        listsPlugin(),
        linkPlugin(),
        quotePlugin(),
        markdownShortcutPlugin(),
        toolbarPlugin({
          toolbarContents: () => (
            <>
              <UndoRedo />
              <BoldItalicUnderlineToggles />
              <InsertThematicBreak />
            </>
          ),
        }),
      ]}
    />
  )
}
