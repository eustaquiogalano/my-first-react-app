import { Link } from "react-router";

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>User's details</p>
      <Link to="/profile">Back To Profile Page</Link>
      <Link to="/profile/friends">To friends</Link>
    </div>
  );
}

export default About;
