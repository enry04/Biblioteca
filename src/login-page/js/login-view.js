import LoginManager from "../../common/js/login-manager.js";

const parentElement = document.querySelector(".main-container");
const loginManager = new LoginManager(parentElement);
loginManager.init();