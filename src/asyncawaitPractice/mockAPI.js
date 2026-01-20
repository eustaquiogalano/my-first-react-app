import mockDatabase from "./mockDB";

// simulate network delay
function mockDelay() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

export async function getAllUsers() {
  await mockDelay(); // network delay

  return mockDatabase;
}
