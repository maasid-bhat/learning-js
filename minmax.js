let array = [];

function inputValue() {
  inputElement = document.querySelector(".input-js");

  let input = inputElement.value;
  /*this step is essential as we have to first store the values(of inputelement) inside a variable or else... */

  array.push(input);

  console.log(array);
 

  inputElement.value = "";
  /*....we wont be able to do this(we have refreshed inputelemt.value, but the inputs have been already stored in input)*/
  return array;
}



let i = "";



function calculateMinMax() {
  let firstElement = array[0];
  let min = firstElement;
  let max = firstElement;

  for (i = 0; i < array.length; i++) {

    let index = array[i];

    if (index < min) {
      min = index;
    }
    if (index > max) {
      max = index;
    }
    
  }
  let output=`Min = ${min}  Max = ${max}`

  document.querySelector('.display-result')
  .innerHTML=`${output}`
};
function exceptionsHandled(){
  let min,max;
  /*if (array.length===0){
    document.querySelector('.display-result')
  .innerHTML=`Min = Null   Max = Null`;
    ;}*/
   if(array.length === 1){
    min = array[0];
    max = array[0];
  }
  else{
    calculateMinMax();
    return;
  }

  }

