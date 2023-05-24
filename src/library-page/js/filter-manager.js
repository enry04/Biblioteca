import FetchUtil from "../../common/js/fetch-util.js";

class FilterManager {
    constructor(parentElement, libraryId, currentCity) {
        this.rootElement = parentElement;
        this.elements = {};
        this.currentFirst = 0;
        this.currentMax = 5;
        this.nOperas;
        this.libraryId = libraryId;
        this.currentCity = currentCity;
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
            titleText: this.rootElement.querySelector(".filter-title"),
            filterCity: this.rootElement.querySelector(".filter-city"),
            notFound: this.rootElement.querySelector(".not-found"),
            currentOperas: null,
        }
        this.elements.filterCity.textContent = this.currentCity;
    }

    initEventsListeners() {
        this.elements.form.addEventListener("submit", (event) => {
            event.preventDefault();
            this.removeChilds();
            this.elements.currentOperas = new Map();
            if (this.elements.filter.value == "") {
                this.elements.main.classList.toggle("hide", false);
                this.elements.filerSection.classList.toggle("hide", true);
                this.elements.notFound.classList.toggle("hide", true);
            } else {
                this.elements.main.classList.toggle("hide", true);
                this.elements.filerSection.classList.toggle("hide", false);
                const filterData = {
                    filter: this.elements.filter.value,
                    libraryId: this.libraryId,
                }
                FetchUtil.postData("./php/read-filter.php", filterData).then((response) => {
                    if (response.status == "success") {
                        this.elements.filerSection.classList.toggle("hide", false);
                        this.elements.titleText.classList.toggle("hide", false);
                        this.elements.notFound.classList.toggle("hide", true);
                        let parseData = JSON.parse(response.data);
                        for (let i = 0; i < parseData.length; i++) {
                            this.elements.currentOperas.set(parseData[i]['id'], parseData[i]['copertina']);
                        }
                        this.checkOperas();
                        this.createDivs();
                        this.showBooks();
                        this.addBookListeners();
                    } else {
                        this.elements.filerSection.classList.toggle("hide", true);
                        this.elements.titleText.classList.toggle("hide", true);
                        this.elements.notFound.classList.toggle("hide", false);
                    }
                });
            }
        });

        this.elements.prevBtn.addEventListener("click", (event) => {
            if (this.currentFirst > 0) {
                this.currentFirst--;
                this.currentMax--;
                this.showBooks();
            }
        });

        this.elements.nextBtn.addEventListener("click", (event) => {
            if (this.currentMax < this.nOperas) {
                this.currentFirst++;
                this.currentMax++;
                this.showBooks();
            }
        });
    }

    addBookListeners() {
        this.elements.operasContainer.querySelectorAll(".book-container").forEach(book => {
            book.addEventListener("click", (event) => {
                location.href = "../book-page/book.php?operaId=" + event.target.getAttribute("operaid");
            });
        });
    }

    removeChilds() {
        let divs = this.elements.operasContainer.getElementsByClassName("opera");
        while (divs.length > 0) {
            divs[0].parentNode.removeChild(divs[0]);
        }
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
        } else {
            this.elements.nextBtn.classList.toggle("hide", false);
            this.elements.prevBtn.classList.toggle("hide", false);
            for (let i = this.currentFirst; i < this.currentMax; i++) {
                this.elements.operasContainer.querySelector(`[id="${i}"]`).classList.toggle("hide", false);
            }
            for (let i = 0; i < this.currentFirst; i++) {
                this.elements.operasContainer.querySelector(`[id="${i}"]`).classList.toggle("hide", true);
            }
            for (let i = this.currentMax; i < this.nOperas; i++) {
                this.elements.operasContainer.querySelector(`[id="${i}"]`).classList.toggle("hide", true);
            }
        }

    }

}

export default FilterManager;