function MainInfo({ title, options }) {
  return (
    <section>
      <h2>{title}</h2>
      <p>RUB</p>
      <ul>
        {options.map(({ period, sum }) => {
          return (
            <li>
              <span>{period}</span>
              <span>{sum}</span>
            </li>
          );
        })}
      </ul>
      <button>Add</button>
    </section>
  );
}

export default MainInfo;
