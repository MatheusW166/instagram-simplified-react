export const CONTENT_TYPE = {
  video: "video",
  photo: "photo",
};

export default function PubContent(props) {
  const { content, type, onDoubleClick } = props;

  if (type === CONTENT_TYPE.video) {
    return (
      <video
        data-test="post-image"
        onDoubleClick={onDoubleClick}
        autoPlay
        loop
        muted
      >
        <source src={content} type="video/mp4" />
        Não suportado.
      </video>
    );
  }
  return (
    <img
      data-test="post-image"
      onDoubleClick={onDoubleClick}
      alt="img"
      src={content}
    />
  );
}
