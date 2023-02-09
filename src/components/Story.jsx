export default function Story(props) {
  const { image, text } = props;
  return (
    <div className="story">
      <a href="/">
        <div className="story-ring">
          <img alt="img" className="avatar" src={image} />
          <img alt="img" src="./images/stories_background.png" />
        </div>
      </a>
      <p>
        <a href="/">{text}</a>
      </p>
    </div>
  );
}
