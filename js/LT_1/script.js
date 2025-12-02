const form = document.getElementById("signupForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";
  document.getElementById("confirmError").innerText = "";
  document.getElementById("phoneError").innerText = "";
  document.getElementById("successMsg").innerText = "";

  let name = document.getElementById("fullname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirm = document.getElementById("confirmPassword").value;
  let phone = document.getElementById("phone").value;

  let valid = true;

  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required";
    valid = false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    document.getElementById("emailError").innerText = "Invalid email";
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById("passwordError").innerText = "Minimum 6 characters";
    valid = false;
  }

  if (password !== confirm) {
    document.getElementById("confirmError").innerText = "Passwords do not match";
    valid = false;
  }

  if (isNaN(phone) || phone === "") {
    document.getElementById("phoneError").innerText = "Digits only required";
    valid = false;
  }

  if (valid) {
    document.getElementById("successMsg").innerText = "Registration Successful!";
    form.reset();
  }
});
