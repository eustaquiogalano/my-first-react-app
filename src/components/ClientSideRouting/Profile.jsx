import { Link, Outlet, useParams } from "react-router";
import Friends from "./ProfileChildrenComponents/Friends";
import About from "./ProfileChildrenComponents/About";
import DefaultProfilePage from "./ProfileChildrenComponents/DefaultProfilePage";

function Profile() {
  const { name } = useParams();

  return (
    <div>
      <h1>Profile Page</h1>
      {name === "friends" ? (
        <Friends />
      ) : name === "about" ? (
        <About />
      ) : (
        <DefaultProfilePage />
      )}
    </div>
  );
}

export default Profile;
