import{projectAddMenuCreation} from "/src/structure/projectAddMenu.js";

//Project array
let projectList = [
    {title:'work'},
    {title:'home'},
    {title:'shopping'},
    {title: 'travel'}
]

//project array to object
function projectListCreation() {
    for (let i=0; i<projectList.length; i++){
        let projects = document.getElementById("projects")

        let project = document.createElement('div')
        project.setAttribute("class","project")
        project.setAttribute("id",projectList[i].title)
        project.addEventListener("click",openProject)
        project.innerHTML = projectList[i].title;
        projects.append(project)
    } }
    export{projectListCreation}

//Summon "add project" input
function projectAddSummon() {
    if(document.querySelectorAll("#projectInput").length == 0){
        projectAddMenuCreation()
    }
}
export{projectAddSummon}

//cancel button function for "add project"
function cancelAddProject(){
    let input = document.getElementById("projectInput")
    let projectBtnBar = document.getElementById("projectBtnBar")

    input.remove()
    projectBtnBar.remove()
}
export{cancelAddProject}

//Remove child nodes 
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//add button function for "add project"
function addProject(){
    let project = {
        title: document.getElementById("projectInput").value,
    }
    if (project.title!=="") {
        projectList.push(project);
        removeAllChildNodes(projects);
        projectListCreation();
        document.getElementById("projectInput").value=""
    }
}
export{addProject}

//opening the projects
function openProject(){
    document.getElementById("projectName").innerHTML=this.id
}
