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
  console.log(`New number of items ${cartQuantity}`);
}

function reset() {
  cartQuantity = 0;
  console.log("The Cart was reset");
  console.log(`New number of items ${cartQuantity}`);
}
function remove() {
  cartQuantity--;
  console.log(`New number of items ${cartQuantity}`);
}

showButton.addEventListener("click", showQuantity);
addToCartButton.addEventListener("click", function () {
  addToCart(1);
});
addtwiceButton.addEventListener("click", () => addToCart(2));
resetButton.addEventListener("click", reset);
removeButton.addEventListener("click", remove);
