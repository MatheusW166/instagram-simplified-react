import InstagramBanner from "./InstagramBanner";
import SearchField from "./SearchField";
import NavigationTop from "./NavigationTop";

export default function Header() {
  return (
    <header>
      <div>
        <InstagramBanner />
        <SearchField />
        <NavigationTop />
      </div>
    </header>
  );
}
