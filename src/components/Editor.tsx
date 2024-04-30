import { ChangeEvent, useState } from "react";

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
      <textarea id="editor" onChange={handleTextChange}>
        {text}
      </textarea>
    </>
  );
};

export default Editor;
