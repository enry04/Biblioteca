import LoginManager from "../../common/js/login-manager.js";
import MapManager from "./map-manager.js";

const mapElement = document.querySelector(".map-container");
const mapManager = new MapManager(mapElement);
mapManager.init();

const parentElement = document.querySelector(".account-container");
const loginManager = new LoginManager(parentElement);
loginManager.init();