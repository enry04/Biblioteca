import CookieManager from "../../common/js/cookie-manager.js";
import FetchUtil from "../../common/js/fetch-util.js";
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
            image: this.rootElement.querySelector(".book-container"),
            title: this.rootElement.querySelector(".title"),
            authors: this.rootElement.querySelector(".authors"),
            date: this.rootElement.querySelector(".date"),
            isbn: this.rootElement.querySelector(".isbn"),
            home: this.rootElement.querySelector(".home"),
            typology: this.rootElement.querySelector(".typology"),
            state: this.rootElement.querySelector(".state"),
            encyclopedia: this.rootElement.querySelector(".encyclopedia"),
            encyclopediaText: this.rootElement.querySelector(".encyclopedia-text"),
            volume: this.rootElement.querySelector(".volume"),
            volumeText: this.rootElement.querySelector(".number-text"),
            paperDate: this.rootElement.querySelector(".paper-date"),
            paperDateText: this.rootElement.querySelector(".date-text"),
            prenoteBtn: this.rootElement.querySelector(".prenote-btn"),
            infoText: this.rootElement.querySelector(".info-text"),
        }
    }

    initEventListeners() {
        this.elements.prenoteBtn.addEventListener("click", (event) => {
            if (CookieManager.getCookie("user_id") != null) {
                let prenotationData = {
                    operaId: this.operaId,
                    userId: CookieManager.getCookie("user_id"),
                }
                console.log(prenotationData);
                FetchUtil.postData("./php/check-prenotation.php", prenotationData).then((response) => {
                    if (response.status == "already present") {
                        this.elements.infoText.textContent = "Non puoi riprenotare lo stesso libro!";
                    } else {
                        FetchUtil.postData("./php/insert-prenotation.php", prenotationData).then((response) => {
                            if (response.status == "success") {
                                this.elements.infoText.textContent = "Libro prenotato! Attendi la conferma dell'addetto... ";
                            } else {
                                console.log(response.data);
                            }
                        })
                    }
                });
            } else {
                this.elements.infoText.textContent = 'Per prenotare un libro devi prima accedere!';
            }
            this.elements.infoText.classList.toggle("hide-info", false);
            this.elements.infoText.classList.toggle("show-info", true);
            setTimeout(() => {
                this.elements.infoText.classList.toggle("hide-info", true);
                this.elements.infoText.classList.toggle("show-info", false);
            }, 2500)
        });
    }

    setImg(img) {
        this.elements.image.style.backgroundImage = `url(${img})`;
    }

    setTitle(title) {
        this.elements.title.textContent = title;
    }

    setAuthors(authors) {
        this.elements.authors.textContent = authors;
    }

    setDate(date) {
        this.elements.date.textContent = date;
    }

    setIsbn(isbn) {
        this.elements.isbn.textContent = isbn;
    }

    setHome(home) {
        this.elements.home.textContent = home;
    }

    setTypology(typology) {
        this.elements.typology.textContent = typology;
    }

    setState(state) {
        this.elements.state.textContent = state;
        if (state == "Libero") {
            this.elements.prenoteBtn.value = "Prenota libro";
        }
    }

    setEncyclopedia(encyclopedia) {
        this.elements.encyclopedia.textContent = encyclopedia;
    }

    setVolume(volume) {
        this.elements.volume.textContent = volume;
    }

    setPaperDate(paperDate) {
        this.elements.paperDate.textContent = paperDate;
    }
}

export default BookManager;