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
            form: this.rootElement.querySelector("form"),
        }
    }

    initEventListeners() {
        this.elements.plusBtn.addEventListener("click", () => {
            this.counter++;
            if (this.counter < 4) {
                let input = document.createElement("input");
                input.type = "number";
                input.classList.toggle("phone-number", true);
                input.placeholder = "Numero di telefono (opzionale)";
                this.elements.telephoneNumbersRow.appendChild(input);
            }
        });

        this.elements.form.addEventListener("submit", async (event) => {
            event.preventDefault();
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
            await FetchUtil.postData("./php/check-credentials.php", uniqueUserData).then(async (response) => {
                if (response.status == "already present") {
                    console.log("utente gia esistente");
                } else {
                    let telephoneData = {};
                    switch (telephones.length) {
                        case 1:
                            telephoneData = {
                                firstNumber: telephones[0],
                                counter: telephones.length,
                            }
                            break;
                        case 2:
                            telephoneData = {
                                firstNumber: telephones[0],
                                secondNumber: telephones[1],
                                counter: telephones.length,
                            }
                            break;
                        case 3:
                            telephoneData = {
                                firstNumber: telephones[0],
                                secondNumber: telephones[1],
                                thirdNumber: telephones[2],
                                counter: telephones.length,
                            }
                            break;
                    }
                    await FetchUtil.postData("./php/check-telephone-numbers.php", telephoneData).then(async (response) => {
                        if (response.status == "already present") {
                            //error
                        } else {
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
                                        telephoneData: telephoneData,
                                    }
                                    console.log(phoneData);
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
                    });
                }
            });
        });
    }

}

export default RegistrationManager;