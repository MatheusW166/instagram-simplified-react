// Tags or user mentions
export default function Mention(props) {
  const { text } = props;
  return (
    <a className="mention" href="/">
      {text}
    </a>
  );
}
