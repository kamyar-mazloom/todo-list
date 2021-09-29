import{taskListAddSummon} from "/src/taskList.js"

function taskPageCreation() {
    let parent = document.getElementById("parent")

    let taskPage = document.createElement("div")
    taskPage.setAttribute("id","taskPage")
    parent.append(taskPage)

    let projectName = document.createElement("div")
    projectName.setAttribute("id","projectName")
    projectName.innerHTML = "Pick a project"
    taskPage.append(projectName)

    let taskList = document.createElement("div")
    taskList.setAttribute("id","taskList")
    taskPage.append(taskList)

    let addBtn = document.createElement("div")
    addBtn.setAttribute("id","addBtn")
    addBtn.innerHTML = "⊕"
    addBtn.addEventListener("click",taskListAddSummon)
    taskPage.append(addBtn)
}

export{taskPageCreation}
