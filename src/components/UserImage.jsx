export default function UserImage(props) {
  const { user } = props;
  return (
    <a href="/">
      <img alt="img" className="avatar" src={user.image} />
    </a>
  );
}
