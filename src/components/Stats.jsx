

export default function Stats({ numberOfCharacters }) {
  return (
    <section className="stats">
      <Stat number={0} label="Words" />
      <Stat number={numberOfCharacters} label="Characters" />
      <Stat number={280 - numberOfCharacters} label="Instagram" />
      <Stat number={2200 - numberOfCharacters} label="Facebook" />
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <section className="stat">
      <span className="stat__number">{number >= 0 ? number : 0}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
