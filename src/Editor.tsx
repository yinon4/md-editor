import {
  MDXEditor,
  headingsPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
} from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'

export const Editor = () => {
  return (
    <>
      {/* <KitchenSinkToolbar /> */}
      <MDXEditor
        markdown={'asdf'}
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          linkPlugin(),
          quotePlugin(),
          markdownShortcutPlugin(),
        ]}
      />
    </>
  )
}
