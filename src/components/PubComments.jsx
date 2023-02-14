import thousandSeparator from "../helpers/thousandSeparator";
import PubComment from "./PubComment";

export default function PubComments(props) {
  const { totalComments, comments } = props;
  if (!totalComments) {
    return "";
  }
  return (
    <div className="comments">
      <p className="see-more">
        <a href="/">
          Ver todos os {thousandSeparator(totalComments)} comentários
        </a>
      </p>
      {comments.map((comment, index) => (
        <PubComment key={index} user={comment.user} text={comment.text} />
      ))}
    </div>
  );
}
