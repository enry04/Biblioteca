import CookieManager from "./cookie-manager.js";

const parentElement = document.querySelector(".active-container");
const homeText = document.querySelector(".home");
const prenoteText = document.querySelector(".prenote");
const librariesText = document.querySelector(".libraries");
const loginText = document.querySelector(".login");

switch (CookieManager.getCookie("current_page")) {
    case 'home':
        parentElement.classList.toggle("active-home", true);
        parentElement.classList.toggle("active-prenote", false);
        parentElement.classList.toggle("active-libraries", false);
        parentElement.classList.toggle("active-login", false);
        homeText.classList.toggle("white", true);
        homeText.classList.toggle("brown", false);
        prenoteText.classList.toggle("brown", true);
        librariesText.classList.toggle("brown", true);
        loginText.classList.toggle("brown", true);
        break;
    case 'prenote':
        parentElement.classList.toggle("active-home", false);
        parentElement.classList.toggle("active-prenote", true);
        parentElement.classList.toggle("active-libraries", false);
        parentElement.classList.toggle("active-login", false);
        prenoteText.classList.toggle("white", true);
        prenoteText.classList.toggle("brown", false);
        homeText.classList.toggle("brown", true);
        librariesText.classList.toggle("brown", true);
        loginText.classList.toggle("brown", true);
        break;
    case 'libraries':
        parentElement.classList.toggle("active-home", false);
        parentElement.classList.toggle("active-prenote", false);
        parentElement.classList.toggle("active-libraries", true);
        parentElement.classList.toggle("active-login", false);
        librariesText.classList.toggle("white", true);
        librariesText.classList.toggle("brown", false);
        homeText.classList.toggle("brown", true);
        prenoteText.classList.toggle("brown", true);
        loginText.classList.toggle("brown", true);
        break;
    case 'login':
        parentElement.classList.toggle("active-home", false);
        parentElement.classList.toggle("active-prenote", false);
        parentElement.classList.toggle("active-libraries", false);
        parentElement.classList.toggle("active-login", true);
        loginText.classList.toggle("white", true);
        loginText.classList.toggle("brown", false);
        homeText.classList.toggle("brown", true);
        prenoteText.classList.toggle("brown", true);
        librariesText.classList.toggle("brown", true);
        break;
    default:
        parentElement.classList.toggle("hide", true);
        parentElement.classList.toggle("active-home", false);
        parentElement.classList.toggle("active-prenote", false);
        parentElement.classList.toggle("active-libraries", false);
        parentElement.classList.toggle("active-login", false);
        break;
}