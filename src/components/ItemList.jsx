import IconLink from "./IconLink";

export default function ItemList(props) {
  const { name, href, children } = props;
  return <li>{children || <IconLink name={name} href={href} />}</li>;
}
