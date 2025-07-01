const ele=document.getElementById("increase");
const Delete=document.getElementById("decrease");
const Reset=document.getElementById("reset");

const counter=document.getElementById("counter");
let count=0;
ele.addEventListener("click",function(){
    count++;
    counter.textContent=count;
})
Delete.addEventListener("click",function(){
    count--;
    counter.textContent=count;
})
Reset.addEventListener("click",function(){
    count=0
    counter.textContent=count;
})