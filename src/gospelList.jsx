function BookItem({ name, isGospel }) {
  return isGospel ? <li>{name} ✅</li> : <li>{name}</li>;
}

export function BookList() {
  return (
    <section>
      <h1>Gospel Books has ✅ in its name.</h1>
      <ul>
        <BookItem name="Mark" isGospel={true} />
        <BookItem name="Solomon" isGospel={false} />
        <BookItem name="Corinthians" isGospel={false} />
        <BookItem name="Mathew" isGospel={true} />
      </ul>
    </section>
  );
}
