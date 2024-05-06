const todoValue = document.getElementById("todoText"),
  listItems = document.getElementById("list-items"),
  addUpdateClick = document.getElementById("AddUpdateClick");

function CreateToDoData() {
  if (todoValue.value === "") {
    alert("Please enter your todo item!");
    todoValue.focus();
  }
  let li = document.createElement("li");
  const todoItems = `<div> Hello </div>`;

  li.innerHTML = todoItems;
  listItems.appendChild(li);
}
