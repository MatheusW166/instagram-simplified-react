import thousandSeparator from "../helpers/thousandSeparator";

function PubLikesNumber(props) {
  const { nOfLikes } = props;
  if (!nOfLikes) return "";

  return (
    <>
      e{" "}
      <a href="/">
        outras{" "}
        <span data-test="likes-number">{thousandSeparator(nOfLikes)}</span>{" "}
        pessoas
      </a>
    </>
  );
}

function PubLikedBy(props) {
  const { firstUser, nOfLikes } = props;
  return (
    <p>
      Curtido por <a href="/">{firstUser}</a>{" "}
      <PubLikesNumber nOfLikes={nOfLikes} />
    </p>
  );
}

export default function PubLikes(props) {
  const { firstUserLike, totalLikes } = props;
  if (!firstUserLike) return "";

  return (
    <div className="likes">
      <a href="/">
        <img alt="img" className="avatar" src={firstUserLike.image} />
      </a>
      <PubLikedBy firstUser={firstUserLike.name} nOfLikes={totalLikes - 1} />
    </div>
  );
}
