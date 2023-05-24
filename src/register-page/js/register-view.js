import RegistrationManager from "./registration-manager.js";

const parentElement = document.querySelector(".main-container");
const registrationManager = new RegistrationManager(parentElement);
registrationManager.init();