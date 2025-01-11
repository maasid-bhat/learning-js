function utilityFunction(){
const rand =Math.random();
console.log(`${rand}`)
let output ="";
if (rand>=0 && rand < 1/2){
 output = "heads";
}else{
   output = "tails";}
return output;
}
//head button
let result=''
const headButton = document.getElementById("heads");
headButton.addEventListener("click",function() {output=utilityFunction();
if (output =="heads") 
{result="You Win!"}

else if(output=="tails")
{result="You Loose!"}

alert(`You clicked Heads,the result was ${output},${result}`)
})
//tails button

const tailsButton = document.getElementById("tails");
tailsButton.addEventListener("click",function() {output=utilityFunction();
if (output =="heads") 
{result="You Loose!"}

else if(output=="tails")
{result="You Win!"}

alert(`You clicked Tails,the result was ${output},${result}`)
})