
const themeBtn = document.getElementById("themeBtn");
let isDark = false;

themeBtn.addEventListener("click", function() {
  isDark = !isDark;

  if(isDark){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    themeBtn.textContent = "Switch to Light Mode";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    themeBtn.textContent = "Switch to Dark Mode";
  }
});

const clock = document.getElementById("clock");
const greeting = document.getElementById("greeting");

function updateClockAndGreeting(){
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let amPm = "AM";
  if(hours >= 12){
    amPm = "PM";
  }
  if(hours > 12){
    hours -= 12;
  }
  if(hours === 0){
    hours = 12;
  }

  if(hours < 10) hours = "0" + hours;
  if(minutes < 10) minutes = "0" + minutes;
  if(seconds < 10) seconds = "0" + seconds;

  clock.textContent = hours + ":" + minutes + ":" + seconds + " " + amPm;

  const hourNow = now.getHours();
  if(hourNow < 12){
    greeting.textContent = "Good Morning!";
  } else if(hourNow < 18){
    greeting.textContent = "Good Afternoon!";
  } else {
    greeting.textContent = "Good Evening!";
  }
}

setInterval(updateClockAndGreeting, 1000);
updateClockAndGreeting();


function showSection(sectionId){
  const sections = ["about","projects","contact"];
  sections.forEach(id => {
    document.getElementById(id).style.display = (id === sectionId) ? "block" : "none";
  });
}

const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const formSuccess = document.getElementById("formSuccess");

contactForm.addEventListener("submit", function(e){
  e.preventDefault();

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  formSuccess.textContent = "";

  let valid = true;

  if(nameInput.value.trim() === ""){
    nameError.textContent = "Name cannot be empty";
    valid = false;
  }

  if(!emailInput.value.includes("@") || !emailInput.value.includes(".")){
    emailError.textContent = "Enter a valid email";
    valid = false;
  }

  if(messageInput.value.trim().length < 10){
    messageError.textContent = "Message must be at least 10 characters";
    valid = false;
  }

  if(valid){
    formSuccess.textContent = "Message sent successfully!";
    contactForm.reset();
  }
});
