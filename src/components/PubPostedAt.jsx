export default function PubPostedAt(props) {
  const { createdAt } = props;
  return (
    <div className="posted-at">
      <p>{createdAt}</p>
      <p>
        <a href="/">Ver tradução</a>
      </p>
    </div>
  );
}
