import { Editor } from './Editor/Editor'

export const App = () => {
  // const { data: file, isLoading, error } = useFile()

  // if (isLoading) return <div className="my-8">Loading...</div>
  // if (error) return <div className="my-8">{error?.message}</div>

  return <div className="my-8">
    <Editor markdown={localStorage.getItem('markdown') || 'type something'} />
    </div>
}
