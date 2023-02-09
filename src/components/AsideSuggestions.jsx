import AsideSuggestion from "./AsideSuggestion";

function AsideSuggestionsTitle(props) {
  return (
    <div>
      <h6>Sugestões para você</h6>
      <button>Ver tudo</button>
    </div>
  );
}

export default function AsideSuggestions(props) {
  const { suggestions } = props;
  return (
    <section className="suggestions">
      <AsideSuggestionsTitle />
      {suggestions.map((s, index) => (
        <AsideSuggestion
          key={index}
          user={s.user}
          isFollowing={s.isFollowing}
        />
      ))}
    </section>
  );
}
