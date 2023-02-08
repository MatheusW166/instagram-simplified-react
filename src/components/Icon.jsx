export default function Icon(props) {
  const { name, href } = props;

  return (
    <a href={href}>
      <ion-icon name={name}></ion-icon>
    </a>
  );
}
