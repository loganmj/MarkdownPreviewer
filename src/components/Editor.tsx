import { ChangeEvent, useEffect, useState } from "react";
import "./Editor.css";

interface Props {
  onTextChange: (text: string) => void;
}

const Editor = ({ onTextChange }: Props) => {
  const onLoadText =
    "#Heading1\n\n" +
    "##Heading2\n\n" +
    "[A link](www.google.com)\n\n" +
    "`\\\\in-line code`\n\n" +
    "```\\ a code block```\n\n" +
    "1. A list item\n\n" +
    "- An unordered list item\n\n" +
    "> A blockquote\n\n" +
    "![an image]()\n\n" +
    "**bold text**";

  const [text, setText] = useState(onLoadText);

  useEffect(() => {
    // Call the parent event handler
    onTextChange(onLoadText);
  }, []); // Empty dependency array ensures this effect runs only once

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
      <div className="labelContainer">
        <label id="editorLabel">Editor</label>
      </div>
      <textarea id="editor" onChange={handleTextChange}>
        {text}
      </textarea>
    </>
  );
};

export default Editor;
