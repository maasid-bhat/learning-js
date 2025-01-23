const todoList = [
  {
    name: "make dinner",
    dueDate: "2022-12-23",
  },
  {
    name: "wash dishes",
    dueDate: "2022-12-22",
  },
];

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach(function (todoObject) {
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    //destructuring is a property of objects

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  });

  // for (let index = 0; index < todoList.length; index++) {
  //   const element = todoList[index];
  //   const { name, dueDate } = element;

  //   todoListHTML += `
  //        <div>${name}</div>
  //        <div>${dueDate}</div>
  //        <button class="delete-todo-button js-delete-todo-button">Delete</button> 
  //      `;
  // }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
  
  document
    .querySelectorAll(".js-delete-todo-button")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

renderTodoList();

//we have to do this after the result is displayed coz otherwise its just a string
//we use queryselectorall as there are more than 1 delete buttons
function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate,
    //if the property and variable name are the same ,we can do the following
    name,
    dueDate,
  });

  inputElement.value = "";
  dateInputElement.value = "";

  renderTodoList();
}

document.querySelector(".js-add-todo-button").addEventListener("click", () => {
  addTodo();
});
