import LikeBtn from "./LikeBtn";

export default function PubComment(props) {
  const { user, text } = props;
  return (
    <div className="comment">
      <p>
        <a href="/">{user.name}</a>
        <span>{text}</span>
      </p>
      <LikeBtn />
    </div>
  );
}
