import PubLikes from "./PubLikes";
import PubUser from "./PubUser";
import PubActions from "./PubActions";
import PubCaption from "./PubCaption";
import PubComments from "./PubComments";
import PubPostedAt from "./PubPostedAt";
import PubPostComment from "./PubPostComment";

const CONTENT_TYPE = {
  video: "video",
  photo: "photo",
};

function PubContent(props) {
  const { content, type } = props;
  if (type === CONTENT_TYPE.video) {
    return (
      <video autoPlay loop muted>
        <source src={content} type="video/mp4" />
        Não suportado.
      </video>
    );
  }
  return <img alt="img" src={content} />;
}

export default function Pub(props) {
  const { user, likes, image, video, caption, pubComments, createdAt } =
    props.pubData;
  return (
    <article>
      <PubUser user={user} />
      <PubContent
        content={image || video}
        type={image ? CONTENT_TYPE.photo : CONTENT_TYPE.video}
      />
      <div className="bottom">
        <PubActions />
        <PubLikes
          firstUserLike={likes.firstUserLike}
          totalLikes={likes.totalLikes}
        />
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
