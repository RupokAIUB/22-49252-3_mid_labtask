const textBlock = document.getElementById("textBlock");


const colors = ["lightyellow", "lightblue", "lightgreen", "lightpink"];
let colorIndex = 0;


let fontSize = 16;

function changeBackground() {
  textBlock.style.backgroundColor = colors[colorIndex];
  colorIndex++;
  if(colorIndex >= colors.length){
    colorIndex = 0;
  }
}

function increaseFont() {
  fontSize += 2; 
  textBlock.style.fontSize = fontSize + "px";
}

function centerText() {
  textBlock.style.textAlign = "center";
}

function resetStyle() {
  textBlock.style.backgroundColor = "";
  textBlock.style.fontSize = "16px";
  textBlock.style.textAlign = "left";

  fontSize = 16;
  colorIndex = 0;
}
