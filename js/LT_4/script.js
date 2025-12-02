
const nameInput = document.getElementById("name");
const rollInput = document.getElementById("roll");
const deptInput = document.getElementById("dept");


const addBtn = document.getElementById("addBtn");
const table = document.getElementById("studentTable");


addBtn.addEventListener("click", function() {

  const name = nameInput.value;
  const roll = rollInput.value;
  const dept = deptInput.value;

 
  if (name === "" || roll === "" || dept === "") {
    alert("Please fill up all fields!");
    return;
  }

  const newRow = document.createElement("tr");


  const nameCell = document.createElement("td");
  nameCell.innerText = name;


  const rollCell = document.createElement("td");
  rollCell.innerText = roll;

  const deptCell = document.createElement("td");
  deptCell.innerText = dept;

  const actionCell = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";

  deleteBtn.addEventListener("click", function() {
    table.removeChild(newRow);
  });

  actionCell.appendChild(deleteBtn);

  newRow.appendChild(nameCell);
  newRow.appendChild(rollCell);
  newRow.appendChild(deptCell);
  newRow.appendChild(actionCell);

  table.appendChild(newRow);

  nameInput.value = "";
  rollInput.value = "";
  deptInput.value = "";

});
