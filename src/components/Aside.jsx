import AsideUser from "./AsideUser";
import AsideSuggestions from "./AsideSuggestions";
import AsideAbout from "./AsideAbout";

export default function Aside(props) {
  const { user, suggestions } = props;
  return (
    <aside>
      <AsideUser user={user} />
      <AsideSuggestions suggestions={suggestions} />
      <AsideAbout />
    </aside>
  );
}
