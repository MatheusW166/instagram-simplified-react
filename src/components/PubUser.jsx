import UserImage from "./UserImage";
import UserName from "./UserName";
import IconLink from "./IconLink";

export default function PubUser(props) {
  const { user } = props;
  return (
    <div className="my-user">
      <UserImage user={user} />
      <UserName user={user} />
      <IconLink href="/" name="ellipsis-horizontal" />
    </div>
  );
}
