import InstagramLogo from "./InstagramLogo";
import Icon from "./Icon";

export default function InstagramBanner() {
  return (
    <div className="logo">
      <Icon name="logo-instagram" href="/"></Icon>
      <hr />
      <div className="instagram-img">
        <InstagramLogo href="/" />
      </div>
    </div>
  );
}
