import FetchUtil from "../../common/js/fetch-util.js";

class FilterManager {
    constructor(parentElement) {
        this.rootElement = parentElement;
        this.elements = {};
        this.currentFirst = 0;
        this.currentMax;
        this.nOperas;
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
            operasContainer: this.rootElement.querySelector(".filters-container"),
            nextBtn: this.rootElement.querySelector(".filter-next"),
            prevBtn: this.rootElement.querySelector(".filter-prev"),
            currentOperas: new Map(),
        }
    }

    initEventsListeners() {
        this.elements.form.addEventListener("submit", (event) => {
            this.removeChilds();
            event.preventDefault();
            if (this.elements.filter.value == "") {
                this.elements.main.classList.toggle("hide", false);
                this.elements.filerSection.classList.toggle("hide", true);
            } else {
                this.elements.main.classList.toggle("hide", true);
                this.elements.filerSection.classList.toggle("hide", false);
                const filterData = {
                    filter: this.elements.filter.value,
                }
                FetchUtil.postData("./php/read-filter.php", filterData).then((response) => {
                    let parseData = JSON.parse(response.data);
                    console.log(parseData);
                    if (response.status == "success") {
                        for (let i = 0; i < parseData.length; i++) {
                            this.elements.currentOperas.set(parseData[i]['id'], parseData[i]['copertina']);
                        }
                        this.checkOperas();
                        this.createDivs();
                        this.showBooks();
                    } else {
                        console.log(response.status);
                    }
                });
            }
        });
    }

    removeChilds() {
        let divs = this.rootElement.querySelectorAll(".opera");
        console.log(divs);
        divs.forEach(div => {
            div.remove();
        });
    }

    checkOperas() {
        let map = new Map();
        for (let chiave of this.elements.currentOperas.keys()) {
            let valore = this.elements.currentOperas.get(chiave);
            if (!map.has(valore)) {
                map.set(chiave, valore);
            }
        }
        this.elements.currentOperas = map;
        this.nOperas = map.size;
    }

    createDivs() {
        let counter = 0;
        for (let key of this.elements.currentOperas.keys()) {
            let value = this.elements.currentOperas.get(key);
            let div = document.createElement("div");
            div.classList.toggle("book-container", true);
            div.classList.toggle("opera", true);
            div.style.background = `url('../common/${value}')`;
            div.style.backgroundSize = "cover";
            div.style.backgroundPosition = "center";
            div.style.backgroundRepeat = "no-repeat";
            div.style.cursor = "pointer";
            div.style.transition = "all 1s";
            div.setAttribute('operaId', key);
            div.id = counter;
            div.classList.toggle("hide", true);
            this.elements.operasContainer.appendChild(div);
            counter++;
        }
    }

    showBooks() {
        if (this.nOperas < 6) {
            this.elements.nextBtn.classList.toggle("hide", true);
            this.elements.prevBtn.classList.toggle("hide", true);
            for (let i = 0; i < this.elements.currentOperas.size; i++) {
                this.elements.operasContainer.querySelector(`[id="${i}"]`).classList.toggle("hide", false);
            }
        }

    }

}

export default FilterManager;