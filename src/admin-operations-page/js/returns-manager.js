import CookieManager from "../../common/js/cookie-manager.js";
import FetchUtil from "../../common/js/fetch-util.js";

class ReturnsManager {
    constructor(tableElement) {
        this.rootElement = tableElement;
        this.headerValues = ["Utente", "Titolo opera", "Registra reso"];
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
    setRowData(user, titolo, id, rowIndex, loanId) {
        let data = [user, titolo, this.getRegisterBtn(rowIndex, id, loanId)];
        let row = this.tBody.insertRow();
        row.id = rowIndex;
        for (let i = 0; i < this.headerValues.length; i++) {
            let td = document.createElement("td");
            if (i < 2) {
                td.innerHTML = data[i];
            } else {
                td.appendChild(data[i]);
            }
            row.appendChild(td);
        }
        this.initEventListeners();
    }

    initEventListeners() {
        const returnBtns = this.rootElement.querySelectorAll(".register-btn");
        returnBtns.forEach(btn => {
            btn.addEventListener("click", (event) => {
                btn.disabled = true;
                const data = {
                    prenotationId: event.target.id,
                    state: "Conclusa",
                    adminId: CookieManager.getCookie("user_id"),
                    loanId: event.target.attributes.getNamedItem('loanId').value,
                }
                let row = this.tBody.querySelector(`tr[id="${event.target.attributes.getNamedItem('rowIndex').value}"]`);
                FetchUtil.postData("./php/update-prenotation.php", data).then((response) => {
                    if (response.status == "success") {
                        FetchUtil.postData("./php/insert-return.php", data).then((response) => {
                            if (response.status == "success") {
                                let td = row.querySelector(":nth-child(3)");
                                td.innerHTML = "Restituzione registrata";
                            } else {
                                console.log(response.status);
                            }
                        })
                    } else {
                        console.log(response.data);
                    }
                })
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

    getRegisterBtn(rowIndex, id, loanId) {
        let input = document.createElement("input");
        input.setAttribute("type", "button");
        input.setAttribute("value", "Registra reso");
        input.classList.toggle("confirm-btn", true);
        input.classList.toggle("register-btn", true);
        input.classList.toggle("table-btn", true);
        input.setAttribute("rowIndex", rowIndex);
        input.setAttribute("loanId", loanId);
        input.id = id;
        return input;
    }
}
export default ReturnsManager;