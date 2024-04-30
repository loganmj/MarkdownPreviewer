import ReactMarkdown from "react-markdown";

interface Props {
  markdown: string;
}

const Previewer = ({ markdown }: Props) => {
  return (
    <>
      <div id="previewer">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </>
  );
};

export default Previewer;
