import { useState } from "react";
import { getAllUsers, addUser } from "../mockAPI";

export default function UserDashboard() {
  const [userList, setUserList] = useState([{ name: "Jesus" }]);
  const [name, setName] = useState("");

  async function handleGetUsers() {
    try {
      const result = await getAllUsers();
      setUserList([...userList, ...result]);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleAddUser(user) {
    try {
      const result = await addUser(user);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section>
      <div>
        <button onClick={handleGetUsers}>Get all users</button>
        <ul>
          {userList.map((user) => {
            return <li>{user.name}</li>;
          })}
        </ul>
      </div>
      <div>
        <label htmlFor="name"></label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => handleAddUser({ name })}>Add user</button>
      </div>
    </section>
  );
}
