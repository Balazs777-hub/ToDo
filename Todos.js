import Todo from "./Todo.js";
import TodoInput from "./TodoInput.js";

export default class Todos {

    #lista

    constructor(lista, pElem, ipElem) {

        this.#lista=lista
        this.pElem=pElem
        this.ipElem=ipElem
        this.viewTodos()
        this.viewInput()
        this.removeEvent()
        this.addEvent()

    }
    removeEvents() {
        for (let index = 0; index < this.#lista.length; index++) {
            const element = this.#lista[index];
            new Todo(element,this.pElem,index)           
        }
    }
    removeEvent() {
        window.addEventListener("remove", (event) => {
            console.log(event.detail);
            this.#lista.splice(event.detail)
        this.viewTodos();
        });
    }
    addEvent() {
        window.addEventListener("add", (event) => {
            console.log(event.detail);
            this.#lista.push(event.detail)
        this.viewTodos();
        });
    }
}   