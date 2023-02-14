import PubLikes from "./PubLikes";
import PubUser from "./PubUser";
import PubActions from "./PubActions";
import PubCaption from "./PubCaption";
import PubComments from "./PubComments";
import PubPostedAt from "./PubPostedAt";
import PubPostComment from "./PubPostComment";
import Icon from "./Icon";
import PubContent, { CONTENT_TYPE } from "./PubContent";
import { useState } from "react";

const Desappear_Delay = 800;

export default function Pub(props) {
  const { user, likes, image, video, caption, pubComments, createdAt } =
    props.pubData;

  const [totalLikes, setTotalLikes] = useState(likes.totalLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [isLikeAnimation, setIsLikeAnimation] = useState(false);
  const [isFadeAnimation, setIsFadeAnimation] = useState(false);

  function handleLike() {
    setIsLiked(!isLiked);
    if (isLiked) {
      setTotalLikes(totalLikes - 1);
    } else {
      setTotalLikes(totalLikes + 1);
    }
  }

  function handleLikeInImage() {
    setIsLiked(true);
    if (!isLiked) {
      setTotalLikes(totalLikes + 1);
    }
  }

  function handleDoubleClickLike() {
    setIsLikeAnimation(true);
    handleLikeInImage();
    setTimeout(() => {
      setIsLikeAnimation(false);
      setIsFadeAnimation(true);
    }, Desappear_Delay);
  }

  function getAnimation() {
    if (isLikeAnimation) {
      return "like-animation";
    }
    if (isFadeAnimation) {
      return "fade-animation";
    }
  }

  return (
    <article data-test="post">
      <PubUser user={user} />
      <div className={`pub-content ${getAnimation()}`}>
        <PubContent
          content={image || video}
          type={image ? CONTENT_TYPE.photo : CONTENT_TYPE.video}
          onDoubleClick={handleDoubleClickLike}
        />
        <Icon name="heart" />
      </div>
      <div className="bottom">
        <PubActions onLike={handleLike} isLiked={isLiked} />
        <PubLikes firstUserLike={likes.firstUserLike} totalLikes={totalLikes} />
        <PubCaption user={user} caption={caption} />
        <PubComments
          totalComments={pubComments.totalComments}
          comments={pubComments.comments}
        />
        <PubPostedAt createdAt={createdAt} />
      </div>
      <PubPostComment />
    </article>
  );
}
