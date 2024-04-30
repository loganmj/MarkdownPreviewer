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
      <Editor onTextChange={handleEditorTextChange}></Editor>
      <Previewer markdown={markdown}></Previewer>
    </>
  );
}

export default App;
