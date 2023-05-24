import BookManager from "./book-manager.js";
import FetchUtil from "../../common/js/fetch-util.js";
import CookieManager from "../../common/js/cookie-manager.js";

let dataToReceive = new URLSearchParams(window.location.search);
let operaId = dataToReceive.get("operaId");
const parentElement = document.querySelector(".main-container");
const bookManager = new BookManager(parentElement, operaId);
bookManager.init();

const operaData = {
    operaId: operaId,
};
let encyclopediaId;

await FetchUtil.postData("./php/read-book.php", operaData).then((response) => {
    if (response.status == "success") {
        bookManager.setTitle(response.data['titolo']);
        bookManager.setDate(new Date(response.data['dataPubblicazione']).toLocaleDateString("en-GB"));
        bookManager.setIsbn(response.data['isbn']);
        bookManager.setTypology(response.data['nomeTipologia']);
        bookManager.setHome(response.data['nomeCasaEditrice']);
        bookManager.setImg("../common/" + response.data['copertina']);
        if (CookieManager.getCookie("user_type") == "addetto") {
            bookManager.setLibrary("Biblioteca di " + response.data['citta']);
        }
        response.data['dataRiferimento'] == null ? bookManager.elements.paperDateText.classList.toggle("hide", true) : bookManager.setPaperDate(new Date(response.data['dataRiferimento']).toLocaleDateString("en-GB"));
        response.data['numeroVolume'] == null ? bookManager.elements.volumeText.classList.toggle("hide", true) : bookManager.setVolume(response.data['numeroVolume']);
        encyclopediaId = response.data['idEnciclopedia'];

    } else {
        console.log(response.status);
    }
});

if (CookieManager.getCookie("user_type") == "addetto") {
    await FetchUtil.postData("../common/php/check-book-state.php", operaData).then((response) => {
        bookManager.setState(response.data == null ? "Libero" : response.data['stato']);
    })
}

if (encyclopediaId != null) {
    let data = {
        encyclopediaId: encyclopediaId,
    }
    FetchUtil.postData("./php/read-encyclopedia.php", data).then((response) => {
        if (response.status == "success") {
            bookManager.setEncyclopedia(response.data['titolo']);
        } else {
            console.log(response.status);
        }
    })
} else {
    bookManager.elements.encyclopediaText.classList.toggle("hide", true);
}

await FetchUtil.postData("./php/read-authors.php", operaData).then((response) => {
    console.log(response.data);
    if (response.status == "success") {
        let parseData = JSON.parse(response.data);
        let authors = '';
        for (let i = 0; i < parseData.length; i++) {
            switch (i) {
                case parseData.length - 1:
                    authors += parseData[i]['nome'] + ' ' + parseData[i]['cognome'];
                    break
                default:
                    authors += parseData[i]['nome'] + ' ' + parseData[i]['cognome'] + ', ';
                    break;
            }
        }
        bookManager.setAuthors(authors);
    } else {
        console.log(response.status);
    }
});