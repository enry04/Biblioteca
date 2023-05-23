import FetchUtil from "../../common/js/fetch-util.js";
import PrenotationsManager from "./prenotations-manager.js";

const table = document.querySelector(".prenotations-table");
const noText = document.querySelector(".no-data-text");

await FetchUtil.postData("./php/read-prenotations.php", {}).then((response) => {
    if (response.status == "success") {
        noText.classList.toggle("hide", true);
        table.classList.toggle("hide", false);
        const prenotationsManager = new PrenotationsManager(table);
        prenotationsManager.init();
        let parseData = JSON.parse(response.data)
        let rowIndex = 0;
        parseData.forEach(prenotation => {
            prenotationsManager.setRowData(prenotation['nomeUtente'], prenotation['titolo'], new Date(prenotation['dataPrenotazione']).toLocaleDateString("en-GB") + " alle " +  new Date(prenotation['dataPrenotazione']).toLocaleTimeString("en-gb"), prenotation['idPrenotazione'], rowIndex);
            rowIndex++;
        });
    } else {
        noText.classList.toggle("hide", false);
        table.classList.toggle("hide", true);
    }
})