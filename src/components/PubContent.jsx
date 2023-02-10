export const CONTENT_TYPE = {
  video: "video",
  photo: "photo",
};

export default function PubContent(props) {
  const { content, type, onDoubleClick } = props;

  if (type === CONTENT_TYPE.video) {
    return (
      <video onDoubleClick={onDoubleClick} autoPlay loop muted>
        <source src={content} type="video/mp4" />
        Não suportado.
      </video>
    );
  }
  return <img onDoubleClick={onDoubleClick} alt="img" src={content} />;
}
