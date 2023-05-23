import FetchUtil from "../../common/js/fetch-util.js";

class PrenotationsManager {
    constructor(tableElement) {
        this.rootElement = tableElement;
        this.headerValues = ["Utente", "Opera", "Data di prenotazione", "Conferma", "Annulla"];
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
    setRowData(user, titolo, dataPrenotazione, id, rowIndex) {
        let data = [user, titolo, dataPrenotazione, this.getConfirmBtn(rowIndex, id), this.getRemoveBtn(rowIndex, id)];
        let row = this.tBody.insertRow();
        row.id = rowIndex;
        for (let i = 0; i < this.headerValues.length; i++) {
            let td = document.createElement("td");
            if (i < 3) {
                td.innerHTML = data[i];
            } else {
                td.appendChild(data[i]);
            }
            row.appendChild(td);
        }
        this.initEventListeners();
    }

    initEventListeners() {
        const confirmBtns = this.rootElement.querySelectorAll(".confirm-btn");
        confirmBtns.forEach(btn => {
            btn.addEventListener("click", (event) => {
                const data = {
                    prenotationId: event.target.id,
                    state: "in prestito",
                }
                FetchUtil.postData("./php/update-prenotation.php", data).then((response) => {
                    if (response.status == "success") {
                        FetchUtil.postData("./php/insert-loan.php",).then((response) => {
                            if (response.status == "success") {
                                let row = this.tBody.querySelector(`[id="${event.target.attributes.getNamedItem('rowIndex').value}"]`);
                                let td = row.querySelector(":nth-child(4)");
                                td.innerHTML = "Prenotazione confermata";
                            } else {
                                console.log(response.data);
                            }
                        });
                    } else {
                        console.log(response.data);
                    }
                });
            });
        });
        const removeBtns = this.rootElement.querySelectorAll(".remove-btn");
        removeBtns.forEach(btn => {
            btn.addEventListener("click", (event) => {
                const data = {
                    prenotationId: event.target.id,
                    state: "in prestito",
                }
                FetchUtil.postData("./php/update-prenotation.php", data).then((response) => {
                    if (response.status == "success") {
                        let row = this.tBody.querySelector(`[id="${event.target.attributes.getNamedItem('rowIndex').value}"]`);
                        let td = row.querySelector(":nth-child(5)");
                        td.innerHTML = "Prenotazione annullata";
                    } else {
                        console.log(response.data);
                    }
                });
            });
        });
    }

    checkTbody() {
        if (!this.tBody.hasChildNodes()) {
            this.rootElement.classList.toggle("hide", true);
            document.querySelector(".no-data-text").classList.toggle("hide", false);
        }
    }

    getConfirmBtn(rowIndex, id) {
        let input = document.createElement("input");
        input.setAttribute("type", "button");
        input.setAttribute("value", "Conferma");
        input.classList.toggle("confirm-btn", true);
        input.classList.toggle("table-btn", true);
        input.setAttribute("rowIndex", rowIndex);
        input.id = id;
        return input;
    }

    getRemoveBtn(rowIndex, id) {
        let input = document.createElement("input");
        input.setAttribute("type", "button");
        input.setAttribute("value", "Annulla");
        input.classList.toggle("remove-btn", true);
        input.classList.toggle("table-btn", true);
        input.setAttribute("rowIndex", rowIndex);
        input.id = id;
        return input;
    }
}
export default PrenotationsManager;