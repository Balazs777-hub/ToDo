import Todo from "./Todo.js";
import { TODOLIST } from "./todoList.js";
import Todos from "./Todos.js";
import TodoInput from "./TodoInput.js";

const pElem = document.querySelector(".todos")
const ipElem = document.querySelector(".todoinput")

new Todos(TODOLIST,pElem,ipElem)