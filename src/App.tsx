import { MDXEditorMethods } from '@mdxeditor/editor'
import { useRef, useState } from 'react'
import { Editor } from './Editor/Editor'
import { githubMarkdown, writeFile } from './Github/gihub'

export const App = () => {
  const [markdown, setMarkdown] = useState(githubMarkdown)
  const editorRef = useRef<MDXEditorMethods>(null)

  const save = () => {
    if (editorRef.current) {
      writeFile(editorRef.current.getMarkdown())
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
