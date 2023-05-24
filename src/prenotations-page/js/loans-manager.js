import CookieManager from "../../common/js/cookie-manager.js";
import FetchUtil from "../../common/js/fetch-util.js";

class LoansManager {
    constructor(tableElement) {
        this.rootElement = tableElement;
        this.headerValues = ["Titolo opera", "Data prestito", "Addetto che ha concesso il prestito", "Restituisci"];
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
    setRowData(user, titolo, dataPrenotazione, id, rowIndex, operaId) {
        let data = [user, titolo, dataPrenotazione, this.getReturnBtn(rowIndex, id, operaId)];
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
        const returnBtns = this.rootElement.querySelectorAll(".return-btn");
        returnBtns.forEach(btn => {
            btn.addEventListener("click", (event) => {
                btn.disabled = true;
                const data = {
                    prenotationId: event.target.id,
                    state: 'Restituito',
                };
                let row = this.tBody.querySelector(`[id="${event.target.attributes.getNamedItem('rowIndex').value}"]`);
                FetchUtil.postData("../admin-operations-page/php/update-prenotation.php", data).then((response) => {
                    if (response.status == "success") {
                        let td = row.querySelector(":nth-child(4)");
                        td.innerHTML = "Restituzione confermata";
                    } else {

                    }
                })
                // const data = {
                //     prenotationId: event.target.id,
                //     state: "in prestito",
                //     operaId: event.target.attributes.getNamedItem("operaId").value,
                //     adminId: CookieManager.getCookie("user_id"),
                // }
                // let row = this.tBody.querySelector(`[id="${event.target.attributes.getNamedItem('rowIndex').value}"]`);
                // FetchUtil.postData("./php/check-is-borrowed.php", data).then((response) => {
                //     if (response.status == "not borrowed") {
                //         FetchUtil.postData("./php/update-prenotation.php", data).then((response) => {
                //             if (response.status == "success") {
                //                 FetchUtil.postData("./php/insert-loan.php", data).then((response) => {
                //                     if (response.status == "success") {
                //                         let td = row.querySelector(":nth-child(4)");
                //                         let removeTd = row.querySelector(":nth-child(5)");
                //                         td.innerHTML = "Prenotazione confermata";
                //                         removeTd.innerHTML = "Annullamento non possibile";
                //                     } else {
                //                         console.log(response.data);
                //                     }
                //                 });
                //             } else {
                //                 console.log(response.data);
                //             }
                //         });
                //     } else {
                //         let td = row.querySelector(":nth-child(4)");
                //         td.innerHTML = "Conferma non possibile, libro già in prestito";
                //     }
                // });
                btn.disabled = false;
            });
        });
    }

    checkTbody() {
        if (!this.tBody.hasChildNodes()) {
            this.rootElement.classList.toggle("hide", true);
            document.querySelector(".no-data-text").classList.toggle("hide", false);
        }
    }

    getReturnBtn(rowIndex, id, operaId) {
        let input = document.createElement("input");
        input.setAttribute("type", "button");
        input.setAttribute("value", "Restituisci");
        input.classList.toggle("confirm-btn", true);
        input.classList.toggle("table-btn", true);
        input.classList.toggle("return-btn", true);
        input.setAttribute("rowIndex", rowIndex);
        input.setAttribute("operaId", operaId);
        input.id = id;
        return input;
    }
}
export default LoansManager;