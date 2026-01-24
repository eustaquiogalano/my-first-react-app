import { Link } from "react-router";

function Friends() {
  return (
    <div>
      <h2>Friends List</h2>
      <p>Here are your friends</p>
      <Link to="/profile">Back To Profile Page</Link>
      <Link to="/profile/about">To about</Link>
    </div>
  );
}

export default Friends;
