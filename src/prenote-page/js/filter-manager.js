class FilterManager {
    constructor(parentElement) {
        this.rootElement = parentElement;
        this.elements = {};
    }

    init() {
        this.initElements();
        this.initEventsListeners();
    }

    initElements() {
        this.elements = {
            filter: this.rootElement.querySelector(".filter"),
            form: this.rootElement.querySelector("form"),
            main: this.rootElement.querySelector("main"),
            filerSection: this.rootElement.querySelector(".filter-section"),
        }
    }

    initEventsListeners() {
        this.elements.form.addEventListener("submit", (event) => {
            event.preventDefault();
            if (this.elements.filter.value == "") {
                this.elements.main.classList.toggle("hide", false);
                this.elements.filerSection.classList.toggle("hide", true);
            } else {
                this.elements.main.classList.toggle("hide", true);
                this.elements.filerSection.classList.toggle("hide", false);
            }
        });
    }
}

export default FilterManager;