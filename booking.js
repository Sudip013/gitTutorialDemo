// Listen for form submission
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  
  // Get the input field values
  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;
  const address = document.getElementById('addressInput').value;
  
  // Create an object with the user details
  const user = {
    name: name,
    email: email,
    address: address
  };
  
  // Store the user object in local storage
  localStorage.setItem('user', JSON.stringify(user));
  
  // Optionally, display a success message to the user
  alert('User details saved!');
});
