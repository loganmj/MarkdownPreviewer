import { ChangeEvent, useState } from "react";
import "./Editor.css";

interface Props {
  onTextChange: (text: string) => void;
}

const Editor = ({ onTextChange }: Props) => {
  const [text, setText] = useState("");

  // Handle text changing
  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    console.log(`New text in editor: ${newText}`);
    setText(newText);

    // Bubble up the event by calling the parent
    // event handler.
    onTextChange(newText);
  };

  return (
    <>
      <div id="container">
        <textarea id="editor" onChange={handleTextChange}>
          {text}
        </textarea>
      </div>
    </>
  );
};

export default Editor;
