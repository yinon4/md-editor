import { MDXEditor, MDXEditorMethods } from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { useRef } from "react";
import "./Editor.css";
import { plugins } from "./plugins";

export const Editor = () => {
  const ref = useRef<MDXEditorMethods>(null);
  let markdown = localStorage.getItem("markdown") || "start typing here...";

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "s") {
      e.preventDefault();
      if (ref.current) {
        localStorage.setItem("markdown", ref.current.getMarkdown());
        markdown = ref.current.getMarkdown();
      }
    }
  };

  return (
    <div onKeyDown={handleKeyDown}>
      <MDXEditor
        ref={ref}
        className="mx-auto max-w-screen-lg rounded-lg border-2 border-gray-800"
        markdown={markdown}
        plugins={plugins(markdown)}
      />
    </div>
  );
};
