import { Sandpack } from "@codesandbox/sandpack-react";
import Markdown from 'react-markdown';
import { markdown } from './MD/intro.js'
import remarkGfm from 'remark-gfm'
import './App.css'
import files from "./Persist.js";
import setupStyles from "./styles.js";
import Header from "./Header.js";

export default function App() {
  return (
    <div className="container">

      <Header />

      <div className="app">
        <div className="markdown">
          <Markdown
            children={markdown}
            remarkPlugins={[remarkGfm]}
          />
        </div>

        <Sandpack
          template="react"
          files={{
            ...files,
            ...setupStyles
          }}

          options={{
            classes: {
              "sp-wrapper": "custom-wrapper",
              "sp-layout": "custom-layout",
              "sp-tab-button": "custom-tab",
            },
          }}
          customSetup={{
            dependencies: {
              "jotai": "^1.12.0",
            },
          }}
        />
      </div>
    </div>
  );
}
