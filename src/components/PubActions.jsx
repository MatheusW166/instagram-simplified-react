import IconLink from "./IconLink";
import LikeBtn from "./LikeBtn";
import SaveBtn from "./SaveBtn";

export default function PubActions(props) {
  const { onLike, isLiked } = props;
  return (
    <div className="actions">
      <LikeBtn onLike={onLike} isLiked={isLiked} />
      <IconLink name="chatbubble-outline" href="/" />
      <IconLink name="paper-plane-outline" href="/" />
      <SaveBtn />
    </div>
  );
}
