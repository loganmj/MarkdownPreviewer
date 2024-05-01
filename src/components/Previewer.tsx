import Markdown from "react-markdown";
import "./Previewer.css";

interface Props {
  markdown: string;
}

const Previewer = ({ markdown }: Props) => {
  return (
    <>
      <div className="labelContainer">
        <label>Preview</label>
      </div>
      <Markdown className="markdownTextArea">{markdown}</Markdown>
    </>
  );
};

export default Previewer;
