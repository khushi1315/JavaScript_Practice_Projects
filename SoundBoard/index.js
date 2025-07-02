
let playing=false;
  const audio1=new Audio("we-dont-talk-anymore.mp3");
document.getElementById("sound1").addEventListener("click",function(){
  
    playing?audio1.pause():audio1.play();
    
    playing=!playing;
});

let playing2=false;
  const audio2=new Audio("Dusk_Till_Dawn.mp3");
document.getElementById("sound2").addEventListener("click",function(){
  
    playing2?audio2.pause():audio2.play();
    
    playing2=!playing2;
});

let playing3=false;
  const audio3=new Audio("charlie-chaplin-music.mp3");
document.getElementById("sound3").addEventListener("click",function(){
  
    playing3?audio3.pause():audio3.play();
    
    playing3=!playing3;
});
