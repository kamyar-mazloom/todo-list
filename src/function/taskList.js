import{taskAddMenuCreation} from "/src/structure/taskAddMenu.js"

// Task array 
let taskListArray = [
    {project:'work',task:'young nino',deadline:'',priority:'low'},
    {project:'work',task:'young nino',deadline:'',priority:'low'},
    {project:'work',task:'young nino',deadline:'',priority:'low'},
    {project:'work',task:'young nino',deadline:'',priority:'low'},
]

//task array to object
function taskListCreation() {
    for(let i=0; i<taskListArray.length; i++){
        if(document.getElementById("projectName").innerHTML==taskListArray[i].project){
        let taskList = document.getElementById("taskList")

        let task = document.createElement('div')
        task.setAttribute("class","task")
        task.setAttribute("id",taskListArray[i].project)
        task.innerHTML = taskListArray[i].task;
        taskList.append(task)
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

//present task in the related project 