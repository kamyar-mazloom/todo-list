import {navbarCreation} from "/src/structure/navbarCreation.js";
import{taskPageCreation} from "/src/structure/taskPageCreation.js";
import{projectListCreation} from "/src/function/projectList.js";
import { taskListCreation } from "../src/function/taskList.js";

window.onload = (event) => {
    navbarCreation()
    taskPageCreation()
    projectListCreation()
    taskListCreation()
}