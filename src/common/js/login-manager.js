import FetchUtil from "./fetch-util.js";

class LoginManager {

    constructor(parentElement) {
        this.rootElement = parentElement;
        this.elements = {};
    }

    init() {
        this.initElements();
        this.initEventListeners();
    }

    initElements() {
        this.elements = {
            username: this.rootElement.querySelector(".username"),
            password: this.rootElement.querySelector(".password"),
            error: this.rootElement.querySelector(".error-text"),
            form: this.rootElement.querySelector("form"),
        }
    }

    initEventListeners() {
        this.elements.form.addEventListener("submit", (event) => {
            event.preventDefault();
            this.elements.username.classList.toggle("error", false);
            this.elements.password.classList.toggle("error", false);
            this.elements.error.classList.toggle("hide", true);
            const userData = {
                username: this.elements.username.value,
                password: this.elements.password.value,
            }

            FetchUtil.postData("../common/php/check-user.php", userData).then((response) => {
                if (response.status == "already present") {
                    location.href = "../main-page/main.php";
                } else {
                    this.elements.username.classList.toggle("error", true);
                    this.elements.password.classList.toggle("error", true);
                    this.elements.error.classList.toggle("hide", false);
                }
            });


        });
    }

}

export default LoginManager;