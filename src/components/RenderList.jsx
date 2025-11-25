// const people = [
//   "Creola Katherine Johnson: mathematician",
//   "Mario José Molina-Pasquel Henríquez: chemist",
//   "Mohammad Abdus Salam: physicist",
//   "Percy Lavon Julian: chemist",
//   "Subrahmanyan Chandrasekhar: astrophysicist",
// ];

const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];

export function ListOfProfessionals() {
  const list = people.filter((person) => {
    // return <li>{person.profession === "chemist" && person.name}</li>;
    return person.profession === "chemist";
  });

  const chemist = list.map((person) => {
    return (
      <li>
        {person.id} : <b>{person.name}</b> : {person.profession}
      </li>
    );
  });

  return (
    <section>
      <h1>List of Professionals</h1>
      <ul>{chemist}</ul>
    </section>
  );
}

const chemists = people.filter((person) => {
  return person.profession === "chemist";
});

const everyoneElse = people.filter((person) => {
  return person.profession !== "chemist";
});

function ListSection({ title, people }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {people.map((person) => {
          return (
            <li key={person.id}>
              <p>
                <b>{person.name}:</b>
                {" " + person.profession + " "}
                known for {person.accomplishment}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export function ScientistList() {
  return (
    <article>
      <h1>Scientists</h1>
      <ListSection title="Chemists" people={chemists} />
      <ListSection title="Everyone Else" people={everyoneElse} />
    </article>
  );
}
