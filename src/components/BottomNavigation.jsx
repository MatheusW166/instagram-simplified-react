import ItemList from "./ItemList";

const defaultItems = [
  { href: "/", name: "home-outline" },
  { href: "/", name: "search-outline" },
  { href: "/", name: "add-circle-outline" },
  { href: "/", name: "heart-outline" },
  { href: "/", name: "person-outline" },
];

export default function BottomNavigation(props) {
  const { children } = props;
  const itemsList =
    children ||
    defaultItems.map((item, index) => (
      <ItemList key={index} name={item.name} href={item.href} />
    ));
  return (
    <nav className="bottom-nav">
      <ul>{itemsList}</ul>
    </nav>
  );
}
