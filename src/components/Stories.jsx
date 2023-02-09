import Arrow from "./Arrow";
import Story from "./Story";

export default function Stories(props) {
  const { stories } = props;
  return (
    <section className="stories">
      <Arrow />
      <Story key={0} text="Seu history" image="./images/piruleta.png" />
      {stories.map((s, index) => (
        <Story key={index + 1} text={s.text} image={s.image} />
      ))}
    </section>
  );
}
