import ChangeThemeBtn from "./ChangeThemeBtn";
import ItemList from "./ItemList";

const defaultItems = [
  { name: "paper-plane-outline", href: "/" },
  { name: "compass-outline", href: "/" },
  { name: "heart-outline", href: "/" },
  { name: "person-outline", href: "/" },
];

export default function NavigationTop(props) {
  const { children } = props;
  const itemsList =
    children ||
    defaultItems.map((item, index) => (
      <ItemList key={index} name={item.name} href={item.href} />
    ));
  return (
    <nav className="top-nav">
      <ul>
        <ItemList>
          <ChangeThemeBtn />
        </ItemList>
        {itemsList}
      </ul>
    </nav>
  );
}
