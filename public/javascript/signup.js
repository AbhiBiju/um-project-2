async function signupFormHandler(event) {
  event.preventDefault();

  console.log("hello");

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const input = document.querySelector("#file").files;
  const zipCode = document.querySelector("#zipCode").value.trim();

  console.log(username + " " + email + " " + password + " " + zipCode);
  console.log(input);
  console.log(input[0]);

  if (username && email && password) {
    let formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    if (input[0]) {
      formData.append("avatar", input[0]);
    }
    if (zipCode) {
      formData.append("zip_code", zipCode);
    }

    const response = await fetch("/api/users", {
      method: "post",
      body: formData,
    });

    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  }
}

// Need event listeners for login or sign up
document.querySelector(".signup-form").addEventListener("submit", signupFormHandler);
