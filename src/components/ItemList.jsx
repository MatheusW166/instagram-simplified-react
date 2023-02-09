import IconLink from "./IconLink";

export default function ItemList(props) {
  const { name, href, children } = props;
  const usingChildren = children && <a href={href}>{children}</a>;
  return <li>{usingChildren || <IconLink name={name} href={href} />}</li>;
}
