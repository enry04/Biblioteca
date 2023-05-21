import FetchUtil from "../../common/js/fetch-util.js";
import FilterManager from "./filter-manager.js";
import OperasManager from "./operas-manager.js";

let dataToReceive = new URLSearchParams(window.location.search);
let libraryId = dataToReceive.get("libraryId");
let currentCity = '';

let libraryData = {
    libraryId: libraryId,
}
await FetchUtil.postData("./php/read-city.php", libraryData).then((response) => {
    if (response.status == "success") {
        currentCity = response.data['citta'];
    } else {
        console.log(response.status);
    }
});

document.querySelector(".city-text").textContent = currentCity;
const operasElement = document.querySelector(".books-container");
const operasManager = new OperasManager(operasElement, libraryId);
operasManager.init();

const filterElement = document.querySelector("body");
const filterManager = new FilterManager(filterElement, libraryId, currentCity);
filterManager.init();
