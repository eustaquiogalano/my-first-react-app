function BookItem({ name, isGospel }) {
  return <li className="book">{isGospel ? name + " ✅" : name}</li>;
}

function AnotherBookItem({ player, isChamp }) {
  return (
    <li className="basketballPlayer">
      {player} {isChamp && " ✅"}
    </li>
  );
}

function BookItem2({ name, isRead }) {
  let bookName = name;

  if (isRead) {
    bookName = <del>{name + " ✅"}</del>;
  }

  return <li>{bookName}</li>;
}

export function BookList() {
  return (
    <>
      <section>
        <h1>Gospel Books has ✅ in its name.</h1>
        <ul>
          <BookItem name="Mark" isGospel={true} />
          <BookItem name="Solomon" isGospel={false} />
          <BookItem name="Corinthians" isGospel={false} />
          <BookItem name="Mathew" isGospel={true} />
        </ul>
      </section>
      <section>
        <h1>Champs has ✅ in its name.</h1>
        <ul>
          <AnotherBookItem player="Kobe" isChamp={true} />
          <AnotherBookItem player="KD" isChamp={true} />
          <AnotherBookItem player="Harden" isChamp={false} />
          <AnotherBookItem player="PG" isChamp={false} />
          <AnotherBookItem player="Curry" isChamp={true} />
        </ul>
      </section>
      <section>
        <h1>Read books marked ✅</h1>
        <ul>
          <BookItem2 name="Atomic Habits" isRead={true} />
          <BookItem2 name="Encyclopedia" isRead={false} />
          <BookItem2 name="Rich Dad Poor Dad" isRead={true} />
        </ul>
      </section>
    </>
  );
}
