import UserImage from "./UserImage";
import UserName from "./UserName";

export default function AsideSuggestion(props) {
  const { user, isFollowing } = props;
  return (
    <div className="suggestion">
      <UserImage user={user} />
      <div>
        <UserName user={user} />
        <p>{isFollowing ? "Segue você" : "Novo no Instagram"}</p>
      </div>
      <button>Seguir</button>
    </div>
  );
}
