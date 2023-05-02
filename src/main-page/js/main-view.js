import MapManager from "./map-manager.js";

const mapElement = document.querySelector(".map-container");
const mapManager = new MapManager(mapElement);
mapManager.init();