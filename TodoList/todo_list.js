

const addTaskBtn = document.getElementById("addTaskBtn");
//a listener of the add task button
addTaskBtn.addEventListener("click", addTask);
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
//a listener of the clear completed tasks button
clearCompletedBtn.addEventListener("click", clearCompletedTasks); 
const clearAllBtn = document.getElementById("clearAllBtn");
//a listener of the clear All tasks button
clearAllBtn.addEventListener("click", clearAllTasks); 

// declare an empty array
let tasks = [];

//Pushing a new task to the list from the user's input
function addTask() {
    const taskInput = document.getElementById("taskInput"); 
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                tasks.push({ text: taskText});
                taskInput.value = "";
                displayTasks();
            }else{
                alert("Please insert text!")
            }
        }

//displaying the tasks
function displayTasks() {
    const taskList = document.getElementById("taskList");
            taskList.innerHTML = "";
            tasks.forEach((task, index) => {
                const li = document.createElement("li");
                li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
                    <label for="task-${index}">${task.text}</label>`;
                li.querySelector("input").addEventListener("change", () => toggleTask(index));
                taskList.appendChild(li);
            });
        }
    //toggles the done tasks
    function toggleTask(index) {
            tasks[index].completed = !tasks[index].completed;
            displayTasks();
            
        }
        //clears completed tasks
            function clearCompletedTasks() {
            tasks = tasks.filter(task => !task.completed);
            displayTasks();

        }
        //clears all tasks by emptying the array
        function clearAllTasks() {
        
            while(tasks.length > 0) {
             
                tasks= tasks.pop();
                
            }
            displayTasks();

        }

