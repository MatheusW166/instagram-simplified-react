import Icon from "./Icon";

export default function ItemList(props) {
  const { name, href, children } = props;
  return (
    <li>
      {children || (
        <a href={href}>
          <Icon name={name} />
        </a>
      )}
    </li>
  );
}
