import ChangeThemeBtn from "./ChangeThemeBtn";
import Icon from "./Icon";

export default function NavigationTop() {
  return (
    <nav className="top-nav">
      <ul>
        <li>
          <ChangeThemeBtn />
        </li>
        <li>
          <Icon name="paper-plane-outline" href="/" />
        </li>
        <li>
          <Icon name="compass-outline" href="/" />
        </li>
        <li>
          <Icon name="heart-outline" href="/" />
        </li>
        <li>
          <Icon name="person-outline" href="/" />
        </li>
      </ul>
    </nav>
  );
}
