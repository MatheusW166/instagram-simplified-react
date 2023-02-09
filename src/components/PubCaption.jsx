import Mention from "./Mention";
import addMentions from "../helpers/addMentions";

export default function PubCaption(props) {
  const { user, caption } = props;
  const { text, tags } = caption;

  return (
    <div className="caption">
      <p>
        <a href="/">{user.name}</a>
        <span>
          {addMentions(text)}
          {tags && <br />}
          {tags.map((tag, index) => (
            <Mention key={index} text={tag} />
          ))}
        </span>
      </p>
    </div>
  );
}
