
let images = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
];

let index = 0;


let mainImage = document.getElementById("mainImage");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");


mainImage.src = images[index];


nextBtn.addEventListener("click", function() {
  index++; 
  if(index >= images.length){ 
    index = 0;
  }
  mainImage.src = images[index]; 
});


prevBtn.addEventListener("click", function() {
  index--; 
  if(index < 0){ 
    index = images.length - 1; 
  }
  mainImage.src = images[index]; 
});

setInterval(function() {
  index++;
  if(index >= images.length){
    index = 0; 
  }
  mainImage.src = images[index]; 
}, 3000); 
