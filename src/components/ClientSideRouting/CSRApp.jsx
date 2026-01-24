import { Link } from "react-router";

function CSRApp() {
  return (
    <div>
      <h1>Main Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default CSRApp;
