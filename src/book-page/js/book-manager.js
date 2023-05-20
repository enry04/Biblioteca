
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
        }
    }

    initEventListeners() {

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