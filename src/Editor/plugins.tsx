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
} from "@mdxeditor/editor";
import { simpleSandpackConfig } from "./configs";

export const plugins = (markdown: string) => [
  imagePlugin(),
  thematicBreakPlugin(),
  headingsPlugin(),
  listsPlugin(),
  linkPlugin(),
  linkDialogPlugin(),
  tablePlugin(),
  quotePlugin(),
  markdownShortcutPlugin(),
  codeBlockPlugin({ defaultCodeBlockLanguage: "ts" }),
  sandpackPlugin({ sandpackConfig: simpleSandpackConfig }),
  codeMirrorPlugin({ codeBlockLanguages: { ts: "TypeScript", css: "CSS" } }),
  diffSourcePlugin({ viewMode: "rich-text", diffMarkdown: markdown }),
  toolbarPlugin({
    toolbarContents: Toolbar,
  }),
];

const Toolbar = () => (
  <DiffSourceToggleWrapper>
    <ConditionalContents
      options={[
        {
          when: (editor) => editor?.editorType === "codeblock",
          contents: () => <ChangeCodeMirrorLanguage />,
        },
        {
          when: (editor) => editor?.editorType === "sandpack",
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
);
