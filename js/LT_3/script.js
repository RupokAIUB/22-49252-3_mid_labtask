
const lightTheme = {
  bodyBg: "white",
  text: "black",
  headerBg: "lightgray",
  contentBg: "white",
  footerBg: "lightgray",
  buttonText: "Switch to Dark Mode"
};


const darkTheme = {
  bodyBg: "black",
  text: "white",
  headerBg: "dimgray",
  contentBg: "gray",
  footerBg: "dimgray",
  buttonText: "Switch to Light Mode"
};


const header = document.getElementById("header");
const content = document.getElementById("content");
const footer = document.getElementById("footer");
const toggleBtn = document.getElementById("toggleBtn");


let isDark = false;


function applyTheme(theme) {
  document.body.style.backgroundColor = theme.bodyBg;
  document.body.style.color = theme.text;

  header.style.backgroundColor = theme.headerBg;
  content.style.backgroundColor = theme.contentBg;
  footer.style.backgroundColor = theme.footerBg;

  toggleBtn.textContent = theme.buttonText;
}

applyTheme(lightTheme);


toggleBtn.addEventListener("click", function () {
  isDark = !isDark;

  if (isDark) {
    applyTheme(darkTheme);
  } else {
    applyTheme(lightTheme);
  }
});
