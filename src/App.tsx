import { MDXEditorMethods } from '@mdxeditor/editor'
import { useRef, useState } from 'react'
import { Editor } from './Editor/Editor'

export const App = () => {
  const [markdown, setMarkdown] = useState('')
  const editorRef = useRef<MDXEditorMethods>(null)

  console.log(markdown)

  const save = () => {
    if (editorRef.current) {
      setMarkdown(editorRef.current.getMarkdown())
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault()
      save()
    }
  }

  return (
    <div className="my-8" onKeyDown={handleKeyDown}>
      <Editor markdown={markdown} editorRef={editorRef} />
    </div>
  )
}
