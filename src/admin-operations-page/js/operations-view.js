import CookieManager from "../../common/js/cookie-manager.js";
import FetchUtil from "../../common/js/fetch-util.js";
import LoansManager from "./loans-manager.js";
import PrenotationsManager from "./prenotations-manager.js";
import ReturnsManager from "./returns-manager.js";

const table = document.querySelector(".prenotations-table");
const noPrenotationText = document.querySelector(".no-prenotation-text");

await FetchUtil.postData("./php/read-prenotations.php", {}).then((response) => {
    if (response.status == "success") {
        noPrenotationText.classList.toggle("hide", true);
        table.classList.toggle("hide", false);
        const prenotationsManager = new PrenotationsManager(table);
        prenotationsManager.init();
        let parseData = JSON.parse(response.data)
        let rowIndex = 0;
        parseData.forEach(prenotation => {
            prenotationsManager.setRowData(prenotation['nomeUtente'], prenotation['titolo'], new Date(prenotation['dataPrenotazione']).toLocaleDateString("en-GB") + " alle " + new Date(prenotation['dataPrenotazione']).toLocaleTimeString("en-gb"), prenotation['idPrenotazione'], rowIndex, prenotation['idOpera']);
            rowIndex++;
        });
    } else {
        noPrenotationText.classList.toggle("hide", false);
        table.classList.toggle("hide", true);
    }
});

const loansTable = document.querySelector(".loans-table");
const noLoansText = document.querySelector(".no-loan-text");

await FetchUtil.postData("./php/read-loans.php", {}).then((response) => {
    if (response.status == "success") {
        loansTable.classList.toggle("hide", false);
        noLoansText.classList.toggle("hide", true);
        const loansManager = new LoansManager(loansTable);
        loansManager.init();
        let parseData = JSON.parse(response.data);
        parseData.forEach(loan => {
            loansManager.setRowData(loan['nomeUtente'], loan['titolo'], new Date(loan['dataPrestito']).toLocaleDateString("en-GB"), loan['nomeAddetto'] + ', appartenente alla biblioteca di ' + loan['citta']);
        });
    } else {
        noLoansText.classList.toggle("hide", false);
        loansTable.classList.toggle("hide", true);
    }
});

const returnsTable = document.querySelector(".returns-table");
const noReturnsText = document.querySelector(".no-return-text");

const adminData = {
    adminId: CookieManager.getCookie("user_id"),
}

let libraryId;

await FetchUtil.postData("./php/read-library.php", adminData).then((response) => {
    if (response.status == "success") {
        libraryId = response.data['idBiblioteca'];
    } else {
        console.log(response.status);
    }
});

const returnData = {
    libraryId: libraryId,
}

await FetchUtil.postData("./php/read-returns.php", returnData).then((response) => {
    if (response.status == "success") {
        returnsTable.classList.toggle("hide", false);
        noReturnsText.classList.toggle("hide", true);
        const returnsManager = new ReturnsManager(returnsTable);
        returnsManager.init();
        let parseData = JSON.parse(response.data);
        let rowIndex = 0;
        parseData.forEach(ret => {
            returnsManager.setRowData(ret['nomeUtente'], ret['titolo'], ret['idPrenotazione'], rowIndex, ret['idPrestito']);
            rowIndex++;
        });
    } else {
        noReturnsText.classList.toggle("hide", false);
        returnsTable.classList.toggle("hide", true);
    }
});