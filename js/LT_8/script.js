
const userType = document.getElementById("userType");
const rollDiv = document.getElementById("rollDiv");
const deptDiv = document.getElementById("deptDiv");

userType.addEventListener("change", function() {
  const selected = userType.value;

  if(selected === "student") {
    rollDiv.style.display = "block";   
    deptDiv.style.display = "none";   
  } 
  else if(selected === "teacher") {
    rollDiv.style.display = "none";    
    deptDiv.style.display = "block";   
  } 
  else {
    
    rollDiv.style.display = "none";
    deptDiv.style.display = "none";
  }
});
