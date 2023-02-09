import Pub from "./Pub";

export default function Pubs(props) {
  const { pubs } = props;
  return (
    <section className="pubs">
      {pubs.map((pub, index) => (
        <Pub key={index} pubData={pub} />
      ))}
    </section>
  );
}
