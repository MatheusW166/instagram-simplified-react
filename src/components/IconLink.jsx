import Icon from "./Icon";

export default function IconLink(props) {
  const { name, href } = props;
  return (
    <a href={href}>
      <Icon name={name} />
    </a>
  );
}
