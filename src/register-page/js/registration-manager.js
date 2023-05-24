import FetchUtil from "../../common/js/fetch-util.js";

class RegistrationManager {
    constructor(parentElement) {
        this.rootElement = parentElement;
        this.elements = {};
        this.counter = 1;
    }

    init() {
        this.initElements();
        this.initEventListeners();
    }

    initElements() {
        this.elements = {
            name: this.rootElement.querySelector(".name"),
            surname: this.rootElement.querySelector(".surname"),
            email: this.rootElement.querySelector(".email"),
            password: this.rootElement.querySelector(".password"),
            username: this.rootElement.querySelector(".username"),
            taxCode: this.rootElement.querySelector(".tax-code"),
            telephoneNumbersRow: this.rootElement.querySelector(".start-row"),
            telephoneNumbers: [],
            plusBtn: this.rootElement.querySelector(".plus-btn"),
            emailError: this.rootElement.querySelector(".email-error"),
            taxCodeError: this.rootElement.querySelector(".tax-code-error"),
            usernameError: this.rootElement.querySelector(".username-error"),
            form: this.rootElement.querySelector("form"),
        }
    }

    initEventListeners() {
        this.elements.plusBtn.addEventListener("click", () => {
            this.counter++;
            if (this.counter < 4) {
                let div = document.createElement("div");
                div.classList.toggle("input-container", true);
                let input = document.createElement("input");
                input.type = "number";
                input.classList.toggle("phone-number", true);
                input.placeholder = "Numero di telefono (opzionale)";
                let h4 = document.createElement("h4");
                h4.classList.toggle("hide", true);
                h4.textContent = "Numero di telefono già in uso";
                if (this.counter == 2) {
                    h4.classList.toggle("second-telephone-error");
                } else if (this.counter == 3) {
                    h4.classList.toggle("third-telephone-error");
                }
                div.appendChild(input);
                div.appendChild(h4);
                this.elements.telephoneNumbersRow.appendChild(div);
            }
        });

        this.elements.form.addEventListener("submit", async (event) => {
            event.preventDefault();
            this.elements.email.classList.toggle("error", false);
            this.elements.emailError.classList.toggle("hide", true);
            this.elements.username.classList.toggle("error", false);
            this.elements.usernameError.classList.toggle("hide", true);
            this.elements.taxCode.classList.toggle("error", false);
            this.elements.taxCodeError.classList.toggle("hide", true);
            this.elements.telephoneNumbers = this.rootElement.querySelectorAll(".phone-number");
            let telephones = [];
            this.elements.telephoneNumbers.forEach(telephone => {
                if (telephone.value != "") {
                    telephones.push(telephone.value);
                }
            });
            const uniqueUserData = {
                email: this.elements.email.value,
                username: this.elements.username.value,
                taxCode: this.elements.taxCode.value,
            }
            await FetchUtil.postData("./php/check-email.php", uniqueUserData).then(async (response) => {
                if (response.status == "already present") {
                    this.elements.email.classList.toggle("error", true);
                    this.elements.emailError.classList.toggle("hide", false);
                } else {
                    this.elements.email.classList.toggle("error", false);
                    this.elements.emailError.classList.toggle("hide", true);
                    await FetchUtil.postData("./php/check-username.php", uniqueUserData).then(async (response) => {
                        if (response.status == "already present") {
                            this.elements.username.classList.toggle("error", true);
                            this.elements.usernameError.classList.toggle("hide", false);
                        } else {
                            this.elements.username.classList.toggle("error", false);
                            this.elements.usernameError.classList.toggle("hide", true);
                            FetchUtil.postData("./php/check-tax-code.php", uniqueUserData).then(async (response) => {
                                if (response.status == "already present") {
                                    this.elements.taxCode.classList.toggle("error", true);
                                    this.elements.taxCodeError.classList.toggle("hide", false);
                                } else {
                                    this.elements.taxCode.classList.toggle("error", false);
                                    this.elements.taxCodeError.classList.toggle("hide", true);
                                    let telephoneData = {};
                                    if (telephones.length >= 1) {
                                        telephoneData = {
                                            number: telephones[0],
                                        }
                                        await FetchUtil.postData("./php/check-telephone-number.php", telephoneData).then(async (response) => {
                                            if (response.status == "already present") {
                                                this.rootElement.querySelectorAll(".phone-number")[0].classList.toggle("error", true);
                                                this.rootElement.querySelector(".first-telephone-error").classList.toggle("hide", false);
                                            } else {
                                                this.rootElement.querySelectorAll(".phone-number")[0].classList.toggle("error", false);
                                                this.rootElement.querySelector(".first-telephone-error").classList.toggle("hide", true);
                                                if (telephones.length >= 2) {
                                                    telephoneData = {
                                                        number: telephones[1],
                                                    }
                                                    await FetchUtil.postData("./php/check-telephone-number.php", telephoneData).then(async (response) => {
                                                        if (response.status == "already present") {
                                                            this.rootElement.querySelectorAll(".phone-number")[1].classList.toggle("error", true);
                                                            this.rootElement.querySelector(".second-telephone-error").classList.toggle("hide", false);
                                                        } else {
                                                            this.rootElement.querySelectorAll(".phone-number")[1].classList.toggle("error", false);
                                                            this.rootElement.querySelector(".second-telephone-error").classList.toggle("hide", true);
                                                            if (telephones.length >= 3) {
                                                                telephoneData = {
                                                                    number: telephones[2],
                                                                }
                                                                await FetchUtil.postData("./php/check-telephone-number.php", telephoneData).then(async (response) => {
                                                                    if (response.status == "already present") {
                                                                        this.rootElement.querySelectorAll(".phone-number")[2].classList.toggle("error", true);
                                                                        this.rootElement.querySelector(".third-telephone-error").classList.toggle("hide", false);
                                                                    } else {
                                                                        this.rootElement.querySelectorAll(".phone-number")[2].classList.toggle("error", false);
                                                                        this.rootElement.querySelector(".third-telephone-error").classList.toggle("hide", true);
                                                                    }
                                                                })
                                                            }
                                                        }
                                                    })
                                                }
                                            }
                                        });
                                        const userData = {
                                            name: this.elements.name.value,
                                            surname: this.elements.surname.value,
                                            email: uniqueUserData.email,
                                            taxCode: uniqueUserData.taxCode,
                                            username: uniqueUserData.username,
                                            password: this.elements.password.value,
                                        }

                                        await FetchUtil.postData("./php/insert-user.php", userData).then(async (response) => {
                                            if (response.status == "success") {
                                                const phoneData = {
                                                    userId: (JSON.parse(response.data))['LAST_INSERT_ID()'],
                                                    counter: telephones.length,
                                                    telephones: telephones,
                                                }
                                                await FetchUtil.postData("./php/insert-telephone-numbers.php", phoneData).then((response) => {
                                                    if (response.status == "success") {
                                                        location.href = "../login-page/login.php";
                                                    } else {
                                                        console.log(response.data);
                                                    }
                                                })
                                            } else {
                                                console.log(response.data);
                                            }
                                        });
                                    }
                                }
                            })
                        }
                    })
                }
            });
        });
    }

}

export default RegistrationManager;