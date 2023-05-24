import FetchUtil from "../../common/js/fetch-util.js";

class PapersManager {
    constructor(parentElement) {
        this.rootElement = parentElement;
        this.elements = {};
        this.currentFirst = 24;
        this.currentMax = 29;
        this.nBooks = 9;
    }

    init() {
        this.initElements();
        this.fetchBooks();
        this.initEventListeners();
    }

    initElements() {
        this.elements = {
            btnNext: this.rootElement.querySelector(".next"),
            btnPrev: this.rootElement.querySelector(".prev"),
        };
    }

    async fetchBooks() {
        await FetchUtil.postData("./php/read-papers.php", {}).then((response) => {
            if (response.status == "success") {
                let parseData = JSON.parse(response.data);
                parseData.forEach(bookData => {
                    let div = document.createElement("div");
                    div.classList.toggle("book-container", true);
                    div.style.background = `url('../common/${bookData['copertina']}')`;
                    div.style.backgroundSize = "cover";
                    div.style.backgroundPosition = "center";
                    div.style.backgroundRepeat = "no-repeat";
                    div.style.cursor = "pointer";
                    div.style.transition = "all 1s";
                    div.id = bookData['id'];
                    div.classList.toggle("hide", true);
                    this.rootElement.appendChild(div);
                });
                this.showBooks();
                this.addBookEventListeners();
            } else {
                console.log(response.status);
            }
        });
    }

    showBooks() {
        for (let i = this.currentFirst; i < this.currentMax; i++) {
            this.rootElement.querySelector(`[id="${i}"]`).classList.toggle("hide", false);
        }
        for (let i = 24; i < this.currentFirst; i++) {
            this.rootElement.querySelector(`[id="${i}"]`).classList.toggle("hide", true);
        }
        for (let i = this.currentMax; i < 34; i++) {
            this.rootElement.querySelector(`[id="${i}"]`).classList.toggle("hide", true);
        }
    }

    initEventListeners() {
        this.elements.btnPrev.addEventListener("click", (event) => {
            if (this.currentFirst > 24) {
                this.currentFirst--;
                this.currentMax--;
                this.showBooks();
            }
        });

        this.elements.btnNext.addEventListener("click", (event) => {
            if (this.currentMax < 34) {
                this.currentFirst++;
                this.currentMax++;
                this.showBooks();
            }
        });
    }

    addBookEventListeners() {
        this.rootElement.querySelectorAll(".book-container").forEach(book => {
            book.addEventListener("click", (event) => {
                location.href = "../book-page/book.php?operaId=" + event.target.id;
            });
        });
    }

}

export default PapersManager;