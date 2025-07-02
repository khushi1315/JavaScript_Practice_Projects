


const Add=()=>{
    const num1=parseInt(document.getElementById("num1").value);
const num2=parseInt(document.getElementById("num2").value);


if(!isNaN(num1) && !isNaN(num2)){
let Result=num1+num2;
    document.querySelector(".res").textContent=Result;
}
else{
     document.querySelector(".res").textContent="Please enter valid numbers";
}
    
}