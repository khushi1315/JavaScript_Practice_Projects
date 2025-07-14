
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
    } else {
        alert('Please enter a task!');
    }
})