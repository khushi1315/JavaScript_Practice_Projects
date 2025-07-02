
let isDefault=true;
function ChangeColor(){
    document.body.style.backgroundColor=isDefault?'lightblue':'white';
    isDefault=!isDefault;
}
IncreaseFont=()=>{
    document.body.style.fontSize='50px';
}
reset=()=>{
    document.body.style.backgroundColor='';
    document.body.style.fontSize='';
}


//!Select the elements
const btn4ele=document.querySelector(".btn4");
const btn5ele=document.querySelector(".btn5");
const btn6ele=document.querySelector(".btn6");
const bodyele=document.querySelector("body");
 //add event listeners
 btn4ele.addEventListener("click",function(){
    bodyele.style.backgroundColor="yellow";
 })
 btn5ele.addEventListener("click",function(){
    document.body.style.backgroundColor="Green";
 })
 //this one is no that efficient so use variable one

 btn6ele.addEventListener("click",function(){
    bodyele.style.backgroundColor="red";
 })

 console.log(window.innerHeight);