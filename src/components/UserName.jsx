export default function UserName(props) {
  const { user } = props;
  return (
    <p>
      <a href="/">{user.name}</a>
    </p>
  );
}
