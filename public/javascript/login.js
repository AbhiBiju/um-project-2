// Add async functions for logging in/signing up
<<<<<<< HEAD
var login = document.getElementById("login-display");
login.style.display = "none"; 
=======
var login = document.getElementById("loginDisplay");
login.style.display="none";
>>>>>>> a5aa6f69da61d140f72b2e8048deb61f27b2d786
async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      console.log("avd");
  
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  // Need event listeners for login or sign up
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
