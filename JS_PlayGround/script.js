
//* Dark mode toggle functionality
document.getElementById('toggleBtn').addEventListener('click',function(){
    const body=document.body;
    body.classList.toggle('dark-mode');
    
    const btnText=document.getElementById('toggleBtn');
    if(body.classList.contains('dark-mode')){
        btnText.innerHTML='Light Mode';
    }
    else{
        btnText.innerHTML='Dark Mode';
    }
})
//* Dark mode toggle functionality ends here


document.addEventListener('input',function(){
    const val=document.getElementById('intro').value;
    const output=document.getElementById('count');
    const len= val.length;
    output.innerHTML=len;


})

//* Random color generator functionality
document.getElementById('changeColorBtn').addEventListener('click',function(){
    const randomColor= '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
   
    document.body.style.backgroundColor=randomColor;
    document.getElementById('color-code').innerText='Current color: ' + randomColor;
    

})


//* KeyPress Tracker functionality

document.addEventListener("keydown", function (event) {
  const keyBox = document.getElementById("key-box");
  keyBox.innerText = "You pressed: " + event.key;
    keyBox.style.color = "red"; // Change text color to red
    document.body.style.backgroundColor= "lightblue"; // Change background color to light blue


});
document.addEventListener("keyup",function(event){
    const keyUP=document.getElementById("key-up");
    keyUP.innerText="You released:"+event.key;
     document.body.style.backgroundColor= "Yellow"; // Change background color to light blue
     keyUP.style.color='blue';
     

})

//* To-Do List functionality

document.getElementById('addTaskBtn').addEventListener('click',function(){
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() !== '') {
        const newTask = document.createElement('li');
        newTask.innerText = taskInput.value;
        taskList.appendChild(newTask);
        taskInput.value = ''; // Clear the input field
        const done=document.createElement('button');
        done.innerText='Done';
        done.addEventListener('click',function(){
            newTask.style.textDecoration='line-through';

        })
        const edit=document.createElement('button');
        edit.innerText='Edit';
        edit.addEventListener('click',function(){
            newTask.contentEditable=true;
            //ToDo ->newTask.focus(); brings the cursor to the end of the text
            newTask.focus();
        })
        const deleteBtn=document.createElement('button');
        deleteBtn.innerText='Delete';
        deleteBtn.addEventListener('click',function(){
            taskList.removeChild(newTask);
        })
        newTask.appendChild(done);
        newTask.appendChild(edit);
        newTask.appendChild(deleteBtn);
      
    } else {
        alert('Please enter a task!');
    }
})


// Search functionality
document.getElementById('searchInput').addEventListener('input', function() {
    const searchInput=this.value.toLowerCase().trim();
    const elements=document.querySelectorAll(' p,div, h1, h2, h3, li, span ')
    elements.forEach(ele=>{
        const originalText=ele.textContent.toLowerCase().trim();;

        if(searchInput!==' ' && ele.innerText.toLowerCase().includes(searchInput)){
            ele.style.display='block';
            ele.style.backgroundColor='lightblue';
        }
        else {
           
            ele.style.backgroundColor='';
        }
    })

})