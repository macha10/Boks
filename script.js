// Simple login validation logic
const loginForm = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');

// Dummy credentials
const validUsername = 'admin';
const validPassword = '12345';

loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from reloading the page

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        window.location.href = 'welcome.html'; // Redirect on success (optional)
    } else {
        errorMsg.textContent = 'Invalid username or password!';
    }
});
