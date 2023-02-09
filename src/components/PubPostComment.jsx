import IconLink from "./IconLink";

export default function PubPostComment(props) {
  return (
    <div className="post-a-comment">
      <IconLink name="happy-outline" href="/" />
      <input type="text" placeholder="Digite algo"></input>
      <button>Publicar</button>
    </div>
  );
}
