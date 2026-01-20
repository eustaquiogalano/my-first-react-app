let mockDatabase = [
  {
    userType: "student",
    username: "joris.arancon",
    password: "jorispogi",
    email: "joris.arancon@gmail.com",
    name: "Jor",
    idNumber: "1X0COL-XXXXXX",
    yearLevel: 3,
    isLoggedIn: false,
    requestedDocuments: [
      {
        id: crypto.randomUUID(),
        document: "Diploma",
        purpose: "Job Application",
        date: "01/01/2026",
        status: "PENDING",
      },
      {
        id: crypto.randomUUID(),
        document: "TOR",
        purpose: "Scholarship",
        date: "01/01/2026",
        status: "PENDING",
      },
    ],
  },
  {
    userType: "student",
    username: "dexter.aras",
    password: "pagdextersweetlover",
    email: "dexter.aras@gmail.com",
    name: "Dex",
    idNumber: "2X0COL-XXXXXX",
    yearLevel: 3,
    isLoggedIn: false,
    requestedDocuments: [
      {
        id: crypto.randomUUID(),
        document: "CTC",
        purpose: "Scholarship",
        date: "01/01/2026",
        status: "PENDING",
      },
      {
        id: crypto.randomUUID(),
        document: "Form 138",
        purpose: "Scholarship",
        date: "01/01/2026",
        status: "PENDING",
      },
      {
        id: crypto.randomUUID(),
        document: "TOR",
        purpose: "Scholarship",
        date: "01/01/2026",
        status: "PENDING",
      },
    ],
  },
  {
    userType: "student",
    username: "jannel.gualva",
    password: "jannely",
    email: "jannel.gualva@gmail.com",
    name: "Ja",
    idNumber: "2X0COL-XXXXXX",
    yearLevel: 3,
    isLoggedIn: false,
    requestedDocuments: [
      {
        id: crypto.randomUUID(),
        document: "CTC",
        purpose: "Scholarship",
        date: "01/01/2026",
        status: "PENDING",
      },
      {
        id: crypto.randomUUID(),
        document: "Form 138",
        purpose: "Scholarship",
        date: "01/01/2026",
        status: "PENDING",
      },
      {
        id: crypto.randomUUID(),
        document: "TOR",
        purpose: "Scholarship",
        date: "01/01/2026",
        status: "PENDING",
      },
    ],
  },
];

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

// fix the bug list is not getting updated
