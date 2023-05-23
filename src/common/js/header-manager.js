import CookieManager from "./cookie-manager.js";

const parentElement = document.querySelector(".active-container");
const homeText = document.querySelector(".home");
const prenoteText = document.querySelector(".prenote");
const librariesText = document.querySelector(".libraries");
const loginText = document.querySelector(".login");
const bookManagementText = document.querySelector(".books-management");
const operationsText = document.querySelector(".operations-management");

switch (CookieManager.getCookie("current_page")) {
    case 'home':
        parentElement.classList.toggle("active-home", true);
        homeText.classList.toggle("brown", false);
        homeText.classList.toggle("white", true);
        break;
    case 'prenote':
        parentElement.classList.toggle("active-prenote", true);
        prenoteText.classList.toggle("white", true);
        prenoteText.classList.toggle("brown", false);
        break;
    case 'libraries':
        parentElement.classList.toggle("active-libraries", true);
        librariesText.classList.toggle("white", true);
        librariesText.classList.toggle("brown", false);
        break;
    case 'login':
        parentElement.classList.toggle("active-login", true);
        loginText.classList.toggle("white", true);
        loginText.classList.toggle("brown", false);
        break;
    case 'admin-book':
        parentElement.classList.toggle("active-admin-book");
        bookManagementText.classList.toggle("brown", false);
        bookManagementText.classList.toggle("white", true);
        break;
    case 'admin-operations':
        parentElement.classList.toggle("active-admin-operations");
        operationsText.classList.toggle("brown", false);
        operationsText.classList.toggle("white", true);
        break;
    default:
        parentElement.classList.toggle("hide", true);
}