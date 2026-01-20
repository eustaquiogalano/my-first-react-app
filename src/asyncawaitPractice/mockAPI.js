import mockDatabase from "./mockDB";

// simulate network delay
function mockDelay() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

export async function getAllUsers() {
  await mockDelay(); // network delay

  return mockDatabase;
}

export async function addUser(user) {
  await mockDelay();

  mockDatabase.push(user);
  return user;
}

export async function deleteUser(name) {
  await mockDelay();

  mockDatabase = mockDatabase.filter((user) => user.name !== name);

  return mockDatabase;
}

export async function updateUser(selectedUser, updatedUser) {
  await mockDelay();

  mockDatabase = mockDatabase.map((user) => {
    if (user.name === selectedUser.name) {
      return updatedUser;
    }
    return user;
  });

  return mockDatabase;
}
