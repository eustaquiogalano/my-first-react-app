import { Link, Outlet } from "react-router";

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <Link to="/">Back to Main Page</Link>
        <Outlet />
      </nav>
    </div>
  );
}

export default Profile;
