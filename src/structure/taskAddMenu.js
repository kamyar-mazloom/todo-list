import{cancelAddTask} from "/src/function/taskList.js"
import{addTask} from "/src/function/taskList.js"

function taskAddMenuCreation(){
    let taskPage = document.getElementById("taskPage")

    let taskAddMenu = document.createElement("div")
    taskAddMenu.setAttribute("id","taskAddMenu")
    taskPage.append(taskAddMenu)

    let taskNameBar = document.createElement("div")
    taskNameBar.setAttribute("id","taskNameBar")
    taskAddMenu.append(taskNameBar)
    
    let taskNameTag = document.createElement("div")
    taskNameTag.setAttribute("id","taskNameTag")
    taskNameTag.innerHTML = "Task:"
    taskNameBar.append(taskNameTag)

    let taskNameInput = document.createElement("input")
    taskNameInput.setAttribute("id","taskNameInput")
    taskNameBar.append(taskNameInput)

    let taskDateBar = document.createElement("div")
    taskDateBar.setAttribute("id","taskDateBar")
    taskAddMenu.append(taskDateBar)

    let taskDateTag = document.createElement("div")
    taskDateTag.setAttribute("id","taskDateTag")
    taskDateTag.innerHTML = "Deadline:"
    taskDateBar.append(taskDateTag)

    let taskDateInput = document.createElement("input")
    taskDateInput.setAttribute("id","taskDateInput")
    taskDateInput.setAttribute("type","date")
    taskDateBar.append(taskDateInput)

    let taskPriorityBar = document.createElement("div")
    taskPriorityBar.setAttribute("id","taskPriorityBar")
    taskAddMenu.append(taskPriorityBar)

    let taskPriorityTag = document.createElement("div")
    taskPriorityTag.setAttribute("id","taskPriorityTag")
    taskPriorityTag.innerHTML = "Priority:"
    taskPriorityBar.append(taskPriorityTag)

    let taskPriorityInputSelect = document.createElement("select")
    taskPriorityInputSelect.setAttribute("id","taskPriorityInputSelect")
    taskPriorityBar.append(taskPriorityInputSelect)

    let priorityArray = ["Low","Normal","High","Top"]

    for (let i=0; i <priorityArray.length; i++) {
        let option = document.createElement("option");
        option.value = priorityArray[i];
        option.text = priorityArray[i];
        taskPriorityInputSelect.append(option);
    }

    let taskBtnBar = document.createElement("div")
    taskBtnBar.setAttribute("id","taskBtnBar")
    taskAddMenu.append(taskBtnBar)

    let taskAddBtn = document.createElement("div")
    taskAddBtn.setAttribute("id","addBtnTask")
    taskAddBtn.innerHTML= "Add"
    taskAddBtn.addEventListener("click",addTask)
    taskBtnBar.append (taskAddBtn)

    let taskCancelBtn = document.createElement("div")
    taskCancelBtn.setAttribute("id","cancelBtnTask")
    taskCancelBtn.innerHTML = "Cancel"
    taskCancelBtn.addEventListener("click",cancelAddTask)
    taskBtnBar.append (taskCancelBtn)
}
export{taskAddMenuCreation}