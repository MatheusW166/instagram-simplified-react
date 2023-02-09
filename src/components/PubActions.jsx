import IconLink from "./IconLink";
import LikeBtn from "./LikeBtn";

export default function PubActions(props) {
  return (
    <div className="actions">
      <LikeBtn />
      <IconLink name="chatbubble-outline" href="/" />
      <IconLink name="paper-plane-outline" href="/" />
      <IconLink name="bookmark-outline" href="/" />
    </div>
  );
}
