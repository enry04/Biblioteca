import BookManager from "./book-manager.js";
import FetchUtil from "../../common/js/fetch-util.js";

let dataToReceive = new URLSearchParams(window.location.search);
let operaId = dataToReceive.get("operaId");

const operaData = {
    operaId: operaId,
};

FetchUtil.postData("./php/read-book.php", operaData).then((response) => {
    if (response.status == "success") {
        
    } else {
        console.log(response.status);
    }
});

const parentElement = document.querySelector(".main-container");
const bookManager = new BookManager(parentElement, operaId);
bookManager.init();