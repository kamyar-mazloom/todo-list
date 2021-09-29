import{cancelAddProject} from "/src/projectList.js"
import{addProject} from "/src/projectList.js"

function projectAddMenuCreation() {
    let navBar = document.getElementById("navBar")

    let input = document.createElement("input")
    input.setAttribute("id","projectInput")
    navBar.append(input)

    let projectBtnBar = document.createElement("div")
    projectBtnBar.setAttribute("id","projectBtnBar")
    navBar.append(projectBtnBar)

    let projectAddBtn = document.createElement("div")
    projectAddBtn.setAttribute("id","addBtnProject")
    projectAddBtn.innerHTML= "Add"
    projectAddBtn.addEventListener("click",addProject)
    projectBtnBar.append (projectAddBtn)

    let projectCancelBtn = document.createElement("div")
    projectCancelBtn.setAttribute("id","cancelBtnProject")
    projectCancelBtn.innerHTML = "Cancel"
    projectCancelBtn.addEventListener("click",cancelAddProject)
    projectBtnBar.append (projectCancelBtn)
}
export{projectAddMenuCreation}