import { useState } from "react";
import { getAllUsers, addUser, deleteUser, updateUser } from "../mockAPI";

export default function UserDashboard() {
  const [userList, setUserList] = useState([]);
  const [name, setName] = useState("");

  async function handleGetUsers() {
    try {
      const result = await getAllUsers();
      setUserList([...result]);
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

    handleGetUsers();
  }

  async function handleDeleteUser(name) {
    try {
      const result = await deleteUser(name);
      console.log(result);
    } catch (error) {
      console.error(error);
    }

    handleGetUsers();
  }

  async function handleUpdateUser(selectedUser, updatedUser) {
    try {
      const result = await updateUser(selectedUser, updatedUser);
      console.log(result);
    } catch (error) {
      console.error(error);
    }

    handleGetUsers();
  }

  return (
    <section>
      <div>
        <button onClick={handleGetUsers}>Get all users</button>
        <ul>
          {userList.length > 0 ? (
            userList.map((user) => {
              return (
                <li>
                  {user.name}{" "}
                  <button onClick={() => handleDeleteUser(user.name)}>
                    Delete
                  </button>
                  <button
                    onClick={() => handleUpdateUser(user, { name: "Jesus" })}
                  >
                    Update user
                  </button>
                </li>
              );
            })
          ) : (
            <p>loading...</p>
          )}
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
