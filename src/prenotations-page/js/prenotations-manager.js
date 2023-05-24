import CookieManager from "../../common/js/cookie-manager.js";
import FetchUtil from "../../common/js/fetch-util.js";

class PrenotationsManager {
    constructor(tableElement) {
        this.rootElement = tableElement;
        this.headerValues = ["Titolo opera", "Data di prenotazione"];
        this.tHead = this.rootElement.createTHead();
        this.tBody = this.rootElement.createTBody();
    }

    init() {
        this.initElements();
    }

    initElements() {
        let row = this.tHead.insertRow();
        for (let i = 0; i < this.headerValues.length; i++) {
            let th = document.createElement("th");
            th.innerHTML = this.headerValues[i];
            row.appendChild(th);
        }
    }
    setRowData(titolo, dataPrenotazione) {
        let data = [titolo, dataPrenotazione];
        let row = this.tBody.insertRow();
        for (let i = 0; i < this.headerValues.length; i++) {
            let td = document.createElement("td");
                td.innerHTML = data[i];
            row.appendChild(td);
        }
    }

    checkTbody() {
        if (!this.tBody.hasChildNodes()) {
            this.rootElement.classList.toggle("hide", true);
            document.querySelector(".no-data-text").classList.toggle("hide", false);
        }
    }
}
export default PrenotationsManager;