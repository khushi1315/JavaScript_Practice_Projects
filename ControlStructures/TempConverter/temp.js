document.getElementById("btn").addEventListener("click",function(){
    const mode=document.getElementById("conversionType").value;
    const Temperature=document.getElementById("Temperature").value;
    if(isNaN(Temperature)){
        document.getElementById("ans").textContent="Please enter valid temperature";
    }
    if(mode=="toCelsius"){
        const val=(Temperature-32)*(5/9);
        document.getElementById("ans").textContent=`${Temperature}
°F is equal to ${val}
°C`;
    }
    else{
        const val=(9/5)*(Temperature)+32;
        document.getElementById("ans").textContent=`${Temperature}
°C is equal to ${val}° F`
    }
    ans.style.display="list-item";
})