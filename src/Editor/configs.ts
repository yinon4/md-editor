import { SandpackConfig } from "@mdxeditor/editor";

const defaultSnippetContent = `import './App.css'

const App = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

export default App;`;

const defaultCssContent = `* {
    background-color: #151515;
    color: #ffffff;
}`;

export const simpleSandpackConfig: SandpackConfig = {
  defaultPreset: "react-ts",
  presets: [
    {
      label: "React",
      name: "react-ts",
      meta: "live react",
      sandpackTemplate: "react-ts",
      sandpackTheme: "dark",
      snippetFileName: "/App.tsx",
      files: {
        "/App.css": defaultCssContent,
      },
      snippetLanguage: "tsx",
      initialSnippetContent: defaultSnippetContent,
    },
  ],
};
