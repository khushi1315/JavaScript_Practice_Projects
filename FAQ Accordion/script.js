const questions=document.querySelectorAll('.question');

questions.forEach(ele=>{
    ele.addEventListener('click',()=>{
        const sym=ele.querySelector('.symbol');
        
        const answer=ele.nextElementSibling;
        answer.classList.toggle('show');
        if(answer.classList.contains('show')) {
            sym.textContent = '-';
        }else{
            sym.textContent= '+';   
        }
    })
})

let count=0;
document.getElementById('increment').addEventListener('click',()=>{
    count++;
   updateDisplay();
})
document.getElementById('decrement').addEventListener('click',()=>{ 
    
        count--;
    
    updateDisplay();
}
)
const countDisplay=document.getElementById('countDisplay');
function updateDisplay() {
    document.getElementById('count').textContent=count;
  
  if (count > 0) {
    countDisplay.style.color = 'green';
  } else if (count < 0) {
    countDisplay.style.color = 'red';
  } else {
    countDisplay.style.color = 'black';
  }
}
