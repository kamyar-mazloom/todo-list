import{projectAddSummon} from "/src/projectList.js";

function navbarCreation (){
    let parent = document.getElementById("parent")

    let navBar = document.createElement("div")
    navBar.setAttribute("id","navBar")
    parent.append(navBar)

    let appTitle = document.createElement("div")
    appTitle.setAttribute("id","appTitle")
    appTitle.innerHTML = "Todo It"
    navBar.append(appTitle)

    let projectsTitle = document.createElement("div")
    projectsTitle.setAttribute("id","projectsTitle")
    projectsTitle.innerHTML = "| Projects"
    navBar.append(projectsTitle)

    let projects = document.createElement("div")
    projects.setAttribute("id","projects")
    navBar.append(projects)

    let projectAddBtn = document.createElement("div")
    projectAddBtn.setAttribute("id","projectAddBtn")
    projectAddBtn.addEventListener("click",projectAddSummon)
    projectAddBtn.innerHTML = "Add Projects"
    navBar.append(projectAddBtn)
}

export{navbarCreation}