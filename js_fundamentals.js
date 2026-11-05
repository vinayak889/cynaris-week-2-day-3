

// 1. Arrow function with default parameter
const greet = (name = "Developer") => {
  return `Hello, ${name}! Welcome to JavaScript.`;
};

// 2. Arrow function with default parameter
const addNumbers = (a, b = 0) => a + b;

// 3. Rest operator
const multiplyAll = (...numbers) => {
  return numbers.reduce((product, number) => product * number, 1);
};

// 4. Rest operator
const calculateAverage = (...numbers) => {
  if (numbers.length === 0) return 0;

  const total = numbers.reduce((sum, number) => sum + number, 0);
  return total / numbers.length;
};

// 5. Spread operator
const getMaximum = (...numbers) => {
  if (numbers.length === 0) return null;
  return Math.max(...numbers);
};

// 6. filter() method
const getEvenNumbers = (numbers) => {
  return numbers.filter(number => number % 2 === 0);
};

// 7. map() method
const doubleNumbers = (numbers) => {
  return numbers.map(number => number * 2);
};

// 8. reduce() method
const calculateTotal = (numbers) => {
  return numbers.reduce((total, number) => total + number, 0);
};

// 9. Object spread operator
const mergeUser = (user, updates) => {
  return { ...user, ...updates };
};

// 10. Object destructuring
const getFullName = ({ firstName, lastName }) => {
  return `${firstName} ${lastName}`;
};


// ==========================================
// Test the 10 functions
// ==========================================

const sampleNumbers = [10, 20, 30, 40, 50];

console.log("1. Greeting:", greet("Vinayak"));
console.log("2. Addition:", addNumbers(10, 20));
console.log("3. Multiplication:", multiplyAll(2, 3, 4));
console.log("4. Average:", calculateAverage(10, 20, 30));
console.log("5. Maximum:", getMaximum(10, 50, 30));
console.log("6. Even Numbers:", getEvenNumbers(sampleNumbers));
console.log("7. Doubled Numbers:", doubleNumbers(sampleNumbers));
console.log("8. Total:", calculateTotal(sampleNumbers));

const user = { name: "Vinayak", role: "Student" };
console.log("9. Updated User:", mergeUser(user, { role: "Developer" }));

const person = { firstName: "Vinayak", lastName: "S" };
console.log("10. Full Name:", getFullName(person));


// ==========================================
// API: JSONPlaceholder
// ==========================================

const API_URL = "https://jsonplaceholder.typicode.com/users";

// Helper to display users on the webpage
const renderUsers = (users) => {
  const usersList = document.getElementById("users-list");

  usersList.innerHTML = "";

  users.slice(0, 5).forEach(({ name, email }) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${name} - ${email}`;
    usersList.appendChild(listItem);
  });
};


// Promise-based API call using .then() and .catch()
const fetchUsersWithPromise = () => {
  const status = document.getElementById("status");
  status.textContent = "Loading users...";

  fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then(users => {
      renderUsers(users);
      status.textContent = "Users loaded successfully using Promises!";
    })
    .catch(error => {
      status.textContent = `Error: ${error.message}`;
      console.error("Promise API error:", error);
    });
};


// Async/await API call using try/catch
const fetchUsersWithAsyncAwait = async () => {
  const status = document.getElementById("status");
  status.textContent = "Loading users...";

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const users = await response.json();

    renderUsers(users);
    status.textContent = "Users loaded successfully using async/await!";
  } catch (error) {
    status.textContent = `Error: ${error.message}`;
    console.error("Async/await API error:", error);
  }
};


// Connect buttons to API functions
document
  .getElementById("promise-btn")
  .addEventListener("click", fetchUsersWithPromise);

document
  .getElementById("async-btn")
  .addEventListener("click", fetchUsersWithAsyncAwait);
