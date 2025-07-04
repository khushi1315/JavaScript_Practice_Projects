
 let timerIds = [];

document.getElementById("btn").addEventListener("click",function(){
    const num=parseInt(document.getElementById("time").value);
     timerIds.forEach(id => clearTimeout(id));
      timerIds = [];
    if(isNaN(num)|| num<=0){
        document.getElementById("res").textContent="Please enter a valid time";
        return;
    }
    for(let i=num;i>=0;i--){
          const timeoutId = setTimeout(()=>{
            if(i>0){
                  document.getElementById("res").textContent=`Time left ${i}`;
            }
            else{
                   document.getElementById("res").innerHTML="Time's Up!";
            }
        },(num-i)*1000);
         timerIds.push(timeoutId); 
      
    }
 
})