const todoList = [];

function addTodo(){
  let inputElement = document.querySelector(".js-name-input");

  let name= inputElement.value;
  console.log(name);

  todoList.push(name);
  console.log(todoList)
//adds new element in our array
inputElement.value="";
//clears the input box
}
 let output=''
function addTodo2(){
  let inputElement = document.querySelector(".js-name-input2");
  

  let name= inputElement.value;
 // let output=''

  todoList.push(name);
  console.log(todoList)
//adds new element in our array

inputElement.value="";
//clears the input box
 let output= `<p>${todoList}</p>`
 for(i=-1;i<todoList.length;i++){
   document.querySelector(".js-todo-list")
   .innerHTML=`${output}`}
   
 }


