import UserName from "./UserName";
import UserImage from "./UserImage";

export default function AsideUser(props) {
  const { user } = props;
  return (
    <section className="my-user">
      <UserImage user={user} />
      <div>
        <UserName user={user} />
        <p>{user.displayName}</p>
      </div>
    </section>
  );
}
