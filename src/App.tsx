import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

function App() {
  const [markdown, setMarkdown] = useState("");

  const handleEditorTextChange = (text: string) => {
    const newText = text;
    setMarkdown(newText);
    console.log(`New markdown in app: ${newText}`);
  };

  return (
    <>
      <div className="container">
        <div className="editor">
          <Editor onTextChange={handleEditorTextChange}></Editor>
        </div>
        <div className="previewer">
          <Previewer markdown={markdown}></Previewer>
        </div>
      </div>
    </>
  );
}

export default App;
