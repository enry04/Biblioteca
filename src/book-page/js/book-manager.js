
class BookManager {
    constructor(parentElement, operaId) {
        this.rootElement = parentElement;
        this.elements = {};
        this.operaId = operaId;
    }

    init() {
        this.initElements();
        this.initEventListeners();
    }

    initElements() {
        this.elements = {
            title: this.rootElement.querySelector(".title"),
            authors: this.rootElement.querySelector(".authors"),
            date: this.rootElement.querySelector(".date"),
            isbn: this.rootElement.querySelector(".isbn"),
            home: this.rootElement.querySelector(".home"),
            typology: this.rootElement.querySelector(".typology"),
            state: this.rootElement.querySelector(".state"),
        }
    }

    initEventListeners() {

    }

    setTitle() {

    }

    setAuthors() {

    }

    setDate() {

    }

    setIsbn() {

    }

    setHome(){

    }

    setTypology() {

    }

    setState(){

    }
}

export default BookManager;