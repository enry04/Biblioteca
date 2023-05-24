import FetchUtil from "../../common/js/fetch-util.js";
import PrenotationsManager from "./prenotations-manager.js";
import CookieManager from "../../common/js/cookie-manager.js";
import LoansManager from "./loans-manager.js";

const table = document.querySelector(".prenotations-table");
const noPrenotationText = document.querySelector(".no-prenotation-text");

const data = {
    userId: CookieManager.getCookie("user_id"),
}

await FetchUtil.postData("./php/read-prenotations.php", data).then((response) => {
    if (response.status == "success") {
        noPrenotationText.classList.toggle("hide", true);
        table.classList.toggle("hide", false);
        const prenotationsManager = new PrenotationsManager(table);
        prenotationsManager.init();
        let parseData = JSON.parse(response.data)
        parseData.forEach(prenotation => {
            prenotationsManager.setRowData(prenotation['titolo'], new Date(prenotation['dataPrenotazione']).toLocaleDateString("en-GB") + " alle " + new Date(prenotation['dataPrenotazione']).toLocaleTimeString("en-gb"));
        });
    } else {
        noPrenotationText.classList.toggle("hide", false);
        table.classList.toggle("hide", true);
    }
});

const loansTable = document.querySelector(".loans-table");
const noLoansText = document.querySelector(".no-loan-text");

await FetchUtil.postData("./php/read-loans.php", data).then((response) => {
    if (response.status == "success") {
        loansTable.classList.toggle("hide", false);
        noLoansText.classList.toggle("hide", true);
        const loansManager = new LoansManager(loansTable);
        loansManager.init();
        let parseData = JSON.parse(response.data);
        let rowIndex = 0;
        parseData.forEach(loan => {
            loansManager.setRowData(loan['titolo'], new Date(loan['dataPrestito']).toLocaleDateString("en-GB"), loan['nomeAddetto'] + ', appartenente alla biblioteca di ' + loan['citta'], loan['idPrenotazione'], rowIndex, loan['idOpera']);
        });
    } else {
        noLoansText.classList.toggle("hide", false);
        loansTable.classList.toggle("hide", true);
    }
})