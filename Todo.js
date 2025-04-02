export default class Todo {

    #text
    #index

    constructor(text, pElem, index) {
        this.#text=text;
        this.#index=index;
        this.pElem=pElem;
        this.view();
        this.textElem= document.querySelector(".text:last-child");
        this.OKElem=this.textElem.querySelector(".ready");
        console.log(this.OKElem);
        this.deleteElem=this.textElem.querySelector(".delete:last:child");
        this.OKeventListeners();
        this.eventListeners();

    }

    view() {
        let html = `<p class="text">${this.$text}
                <button class="ready">✔</button>
                <button class="delete">❌</button>
                </p>`
        this.pElem.insertAdjacentHTML("beforeend", html);
    }
    OKeventListeners() {
        this.OKElem.addEventListener("click", ()=> {
            console.log("ok");
            this.textElem.style.colore="green"
        });
    }

    remEventListener() {

        this.deleteElem.addEventListener("click", ()=> {
            console.log("delete");
            const e = new CustomEvent("remove", { detail: this.#index });
            window.dispatchEvent(e);
        });
    }
}