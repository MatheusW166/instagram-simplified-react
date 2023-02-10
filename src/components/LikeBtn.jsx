import Icon from "./Icon";

export default function LikeBtn(props) {
  const { isLiked, onLike } = props;
  return (
    <div className={`like-btn ${isLiked && "liked"}`}>
      <label onClick={onLike}>
        {!isLiked ? <Icon name="heart-outline" /> : <Icon name="heart" />}
      </label>
    </div>
  );
}
