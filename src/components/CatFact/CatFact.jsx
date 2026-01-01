import { useEffect, useState } from "react";

function CatFact() {
  const [catFact, setCatFact] = useState("");
  const [nextButtonClicked, setNextButtonClicked] = useState(false);

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCatFact(data.fact);
      });
  }, [nextButtonClicked]);

  return (
    <div>
      <button onClick={() => setNextButtonClicked((prev) => !prev)}>
        Next Fact
      </button>
      <p>{catFact}</p>
    </div>
  );
}

export default CatFact;
