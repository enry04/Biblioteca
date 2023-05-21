import FetchUtil from "../../common/js/fetch-util.js";

class OperasManager {
    constructor(parentElement, libraryId, currentCity) {
        this.rootElement = parentElement;
        this.elements = {};
        this.currentFirst = 0;
        this.currentMax = 5;
        this.nBooks;
        this.libraryId = libraryId;
        this.currentCity = currentCity;
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
        let operaData = {
            libraryId: this.libraryId,
        }
        await FetchUtil.postData("./php/read-books.php", operaData).then((response) => {
            if (response.status == "success") {
                let parseData = JSON.parse(response.data);
                this.nBooks = parseData.length;
                let counter = 0;
                console.log(parseData);
                parseData.forEach(bookData => {
                    let div = document.createElement("div");
                    div.classList.toggle("book-container", true);
                    div.style.background = `url('../common/${bookData['copertina']}')`;
                    div.style.backgroundSize = "cover";
                    div.style.backgroundPosition = "center";
                    div.style.backgroundRepeat = "no-repeat";
                    div.style.cursor = "pointer";
                    div.style.transition = "all 1s";
                    div.id = counter;
                    div.setAttribute("operaId", bookData['id']);
                    div.classList.toggle("hide", true);
                    this.rootElement.appendChild(div);
                    counter++;
                });
                this.showBooks();
                this.addBookEventListeners();
            } else {
                console.log(response.status);
            }
        });
    }

    showBooks() {
        // for (let i = this.currentFirst; i < this.currentMax; i++) {
        //     this.rootElement.querySelector(`[id="${i}"]`).classList.toggle("hide", false);
        // }
        // for (let i = 1; i < this.currentFirst; i++) {
        //     this.rootElement.querySelector(`[id="${i}"]`).classList.toggle("hide", true);
        // }
        // for (let i = this.currentMax; i < 11; i++) {
        //     this.rootElement.querySelector(`[id="${i}"]`).classList.toggle("hide", true);
        // }
        if (this.nBooks < 6) {
            this.elements.btnNext.classList.toggle("hide", true);
            this.elements.btnPrev.classList.toggle("hide", true);
            for (let i = 0; i < this.nBooks; i++) {
                this.rootElement.querySelector(`[id="${i}"]`).classList.toggle("hide", false);
            }
        } else {
            this.elements.btnNext.classList.toggle("hide", false);
            this.elements.btnPrev.classList.toggle("hide", false);
            for (let i = this.currentFirst; i < this.currentMax; i++) {
                this.rootElement.querySelector(`[id="${i}"]`).classList.toggle("hide", false);
            }
            for (let i = 0; i < this.currentFirst; i++) {
                this.rootElement.querySelector(`[id="${i}"]`).classList.toggle("hide", true);
            }
            for (let i = this.currentMax; i < this.nBooks; i++) {
                this.rootElement.querySelector(`[id="${i}"]`).classList.toggle("hide", true);
            }
        }

    }

    initEventListeners() {
        this.elements.btnPrev.addEventListener("click", (event) => {
            if (this.currentFirst > 1) {
                this.currentFirst--;
                this.currentMax--;
                this.showBooks();
            }
        });

        this.elements.btnNext.addEventListener("click", (event) => {
            if (this.currentMax < 11) {
                this.currentFirst++;
                this.currentMax++;
                this.showBooks();
            }
        });
    }

    addBookEventListeners() {
        this.rootElement.querySelectorAll(".book-container").forEach(book => {
            book.addEventListener("click", (event) => {
                location.href = "../book-page/book.php?operaId=" +  event.target.getAttribute("operaid");
            });
        });
    }

}

export default OperasManager;