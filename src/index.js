import {navbarCreation} from "./navbarCreation.js";
import{taskPageCreation} from "./taskPageCreation.js";
import{projectListCreation} from "./projectList.js";
import { taskListCreation } from "./taskList.js";

window.onload = (event) => {
    navbarCreation()
    taskPageCreation()
    projectListCreation()
    taskListCreation()
}