const textInput = document.getElementById("textInput");
const analyzeBtn = document.getElementById("analyzeBtn");
const resultDiv = document.getElementById("result");

analyzeBtn.addEventListener("click", function () {

  const text = textInput.value;

  if (text.trim() === "") {
    resultDiv.innerText = "Please enter some text first.";
    return;
  }
  const charCount = text.length;

const words = text.trim().split(" ");
  const wordCount = words.length;
  const reversedText = text.split("").reverse().join("");
  resultDiv.innerHTML =
    "Character Count: " + charCount + "<br>" +
    "Word Count: " + wordCount + "<br><br>" +
    "Reversed Text:<br>" + reversedText;
});
