import PubLikes from "./PubLikes";
import PubUser from "./PubUser";
import PubActions from "./PubActions";
import PubCaption from "./PubCaption";
import PubComments from "./PubComments";
import PubPostedAt from "./PubPostedAt";
import PubPostComment from "./PubPostComment";
import { useState } from "react";

const CONTENT_TYPE = {
  video: "video",
  photo: "photo",
};

function PubContent(props) {
  const { content, type, onLike } = props;
  if (type === CONTENT_TYPE.video) {
    return (
      <video onClick={onLike} autoPlay loop muted>
        <source src={content} type="video/mp4" />
        Não suportado.
      </video>
    );
  }
  return <img onClick={onLike} alt="img" src={content} />;
}

export default function Pub(props) {
  const { user, likes, image, video, caption, pubComments, createdAt } =
    props.pubData;

  const [totalLikes, setTotalLikes] = useState(likes.totalLikes);
  const [isLiked, setIsLiked] = useState(false);

  function handleLike() {
    setIsLiked(!isLiked);
    if (isLiked) setTotalLikes(totalLikes - 1);
    else setTotalLikes(totalLikes + 1);
  }
  function handleLikeInImage() {
    setIsLiked(true);
    if (!isLiked) setTotalLikes(totalLikes + 1);
  }

  return (
    <article>
      <PubUser user={user} />
      <PubContent
        content={image || video}
        type={image ? CONTENT_TYPE.photo : CONTENT_TYPE.video}
        onLike={handleLikeInImage}
      />
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
