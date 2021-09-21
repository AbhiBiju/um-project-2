// Need async function for logout
async function logout() {
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
    
// Need eventListener for logout button
document.querySelector('#logout').addEventListener('click', logout);


function loginPage(){
  document.querySelector('#login-button').removeAttribute(StyleSheet);
}
document.querySelector('#login-button').addEventListener('click', loginPage);
