document.getElementById('btn').addEventListener("click",function(){
    const num=parseInt(document.getElementById("time").value);
    if(isNaN(num)|| num<=0){
        document.getElementById("res").textContent="Please enter a valid time";
        return;
    }
    for(let i=num;i>=0;i--){
        setTimeout(()=>{
            if(i>0){
                  document.getElementById("res").textContent=`Time left ${i}`;
            }
            else{
                   document.getElementById("res").innerHTML="Time's Up!";
            }
        },(num-i)*1000);
      
    }
 
})