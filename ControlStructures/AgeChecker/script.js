const button=document.getElementById("btn");
button.addEventListener("click",function(){
    const Age=document.getElementById("age").value;
    if(Age<18){
        document.querySelectorAll("li").forEach(li=>li.style.display="block");
        document.querySelector("#vote").textContent="not";
        document.querySelector("#drive").textContent="not"
    }
    else{
           document.querySelectorAll("li").forEach(li=>li.style.display="block");
    }
   

})