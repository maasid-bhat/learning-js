let cartQuantity = 0;

const showButton = document.getElementById("show");
const addToCartButton = document.getElementById("add-to-cart");
const addtwiceButton = document.getElementById("add-twice");
const resetButton = document.getElementById("reset");
const removeButton = document.getElementById("remove-button");

function showQuantity() {
  console.log(`The quantity is ${cartQuantity}`);
}
function addToCart(toAdd) {
  cartQuantity = cartQuantity + toAdd;
  if (cartQuantity > 10) {
    alert("cart is full");
  } else {
    console.log(`New number of items ${cartQuantity}`);
  }
}

function reset() {
  cartQuantity = 0;
  console.log("The Cart was reset");
  console.log(`New number of items ${cartQuantity}`);
}
function remove() {
  cartQuantity--;
  if (cartQuantity <= 0) {
    alert("cart is empty");
  } else {
    console.log(`New number of items ${cartQuantity}`);
  }
}

showButton.addEventListener("click", showQuantity);
addToCartButton.addEventListener("click", function () {
  addToCart(1);
});
addtwiceButton.addEventListener("click", () => addToCart(2));
resetButton.addEventListener("click", reset);
removeButton.addEventListener("click", remove);

const product2 = {
  name: 'shirt',
  ['delivery-time']: "1 day"
  'delivey-time': "1 day"
  /*when the key is just a string, square brackets are optional*/
  rating:{
    stars:4.5,
    count:87//nested object
  }
  fun: function function1(){
    console.log('function inside object');
    //a function inside an object is called a method
  }
};
console.log(product2);
console.l0g(product2.name);
console.log(product2['name']);
console.log(product2[delivery-time]);
/* [square brackets] are used instead of .dot when dot cannot be used (mathematical functions)*/
console.log(product2.rating.count);
product2.fun();

/*JSON is a syntax that is similar to object in javascript. however, its understandable by many other languages unlike object..it has less features i.e.,(functions inside objects not supported )&everything must be in double quotes(single quotes not supported).*/
console.log(JSON.stringify(product2));
//converts jsobj to json
const jsonString = JSON.stringify(product2);
console.log(JSON.parse(jsonString));
//converts json to jsobj

/*localStorage stores strings even if page is restored
can use stringify to store js objects in here*/
localStorage.setItem("message",'hello');
//string 'hello' stored in local storage
localStorage.getItem('message');

console.log(localStorage.getItem('message'));
