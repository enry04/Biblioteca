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
            form: this.rootElement.querySelector("form"),
        }
    }

    initEventListeners() {
        this.elements.form.addEventListener("submit", (event) => {
            event.preventDefault();
            const userData = {
                username: this.elements.username.value,
                password: this.elements.password.value,
            }

            FetchUtil.postData("../common/php/check-user.php", userData).then((response) => {
                if (response.status == "already present") {
                    //error
                    this.elements.form.reset();
                } else {
                    location.href = "../main-page/main.php";
                }
            });


        });
    }

}

export default LoginManager;