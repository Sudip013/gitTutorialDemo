// Get the user details from the input fields
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;

// Create a user object
const user = { name, email };

// Get the existing users array from local storage
let users = JSON.parse(localStorage.getItem('users')) || [];

// Add the new user to the array
users.push(user);

// Save the updated users array back to local storage
localStorage.setItem('users', JSON.stringify(users));
