import BooksManager from "./books-manager.js";
import PapersManager from "./papers-manager.js";
import VolumesManager from "./volumes-manager.js";

const booksElement = document.querySelector(".books-container");
const booksManager = new BooksManager(booksElement);
booksManager.init();

const volumesElement = document.querySelector(".volumes-container");
const volumesManager = new VolumesManager(volumesElement);
volumesManager.init();

const papersElement = document.querySelector(".papers-container");
const papersManager = new PapersManager(papersElement);
papersManager.init();