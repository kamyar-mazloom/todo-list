import{taskAddMenuCreation} from "/src/structure/taskAddMenu.js"

// Task array 
let taskListArray = [
    {project:'work',task:'find a job',deadline:'2021-08-21',priority:'Low'},
    {project:'work',task:'get fired',deadline:'',priority:'Normal'},
    {project:'work',task:'get unemployment',deadline:'',priority:'High'},
    {project:'work',task:'profit',deadline:'',priority:'Top'},
]

//task array to object
function taskListCreation() {
    for(let i=0; i<taskListArray.length; i++){
        if(document.getElementById("projectName").innerHTML==taskListArray[i].project){
        let taskList = document.getElementById("taskList")

        let taskBar = document.createElement('div')
        taskBar.setAttribute("class","taskBar")
        taskList.append(taskBar)

        let taskClsBtn = document.createElement('div')
        taskClsBtn.setAttribute("class","taskClnBtn")
        taskClsBtn.setAttribute("id",i)
        taskClsBtn.addEventListener("click",deleteTask)
        taskClsBtn.innerHTML = "🗑";
        taskBar.append(taskClsBtn)

        let taskPriority = document.createElement('div')
        taskPriority.setAttribute("class",taskListArray[i].priority)
        taskPriority.innerHTML = "| ";
        taskBar.append(taskPriority)


        let task = document.createElement('div')
        task.setAttribute("class","task")
        task.setAttribute("id",taskListArray[i].project)
        task.innerHTML = taskListArray[i].task;
        taskBar.append(task)

        let date = document.createElement('div')
        date.setAttribute("class","date")
        date.innerHTML = taskListArray[i].deadline;
        taskBar.append(date)
    }
}
}
export{taskListCreation}

//Summon "add task" input
function taskListAddSummon() {
    if(document.getElementById("projectName").innerHTML == "Pick a project") {
        alert("pick a project")
    }
    else if(document.querySelectorAll("#taskAddMenu").length == 0){
        taskAddMenuCreation()
    }
}
export{taskListAddSummon}

//cancel button function for "add task"
function cancelAddTask() {
    let taskAddMenu = document.getElementById("taskAddMenu")
    taskAddMenu.remove()
}
export{cancelAddTask}

//Remove child nodes 
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  }

//add button function for "add task"
function addTask(){
    let task = {
        project: document.getElementById("projectName").innerHTML,
        task: document.getElementById("taskNameInput").value,
        deadline: document.getElementById("taskDateInput").value,
        priority: document.getElementById("taskPriorityInputSelect").value,
    }
    if (task.task!=="") {
        taskListArray.push(task);
        removeAllChildNodes(taskList);
        taskListCreation();
        cancelAddTask();
    }
}
export{addTask}

//delete the task 
function deleteTask(){
    taskListArray.splice(this.id,1);
    removeAllChildNodes(taskList);
    taskListCreation();
}