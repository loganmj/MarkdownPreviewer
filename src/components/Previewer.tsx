interface Props {
  markdown: string;
}

const Previewer = ({ markdown }: Props) => {
  return (
    <>
      <textarea id="previewer" value={markdown}></textarea>
    </>
  );
};

export default Previewer;
