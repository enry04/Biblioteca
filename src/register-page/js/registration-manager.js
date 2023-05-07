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

        this.elements.form.addEventListener("submit", (event) => {
            event.preventDefault();
            this.elements.telephoneNumbers = this.rootElement.querySelectorAll(".phone-number");
            let telephones = [];
            this.elements.telephoneNumbers.forEach(telephone => {
                if (telephone.value != "") {
                    telephones.push(telephone.value);
                }
            });
            console.log(telephones);
            const uniqueUserData = {
                email: this.elements.email.value,
                username: this.elements.username.value,
                taxCode: this.elements.taxCode.value,
            }
            FetchUtil.postData("./php/check-credentials.php", uniqueUserData).then((response) => {
                if (response.status == "already present") {
                    console.log("utente gia esistente");
                } else {
                    let telephoneData = {};
                    switch (this.elements.telephoneNumbers.lenght) {
                        case 0:
                            telephoneData = {
                                firstNumber: telephones[0],
                                counter: telephones.length,
                            }
                            break;
                        case 1:
                            telephoneData = {
                                firstNumber: telephones[0],
                                secondNumber: telephones[1],
                                counter: telephones.length,
                            }
                            break;
                        case 2:
                            telephoneData = {
                                firstNumber: telephones[0],
                                secondNumber: telephones[1],
                                thirdNumber: telephones[2],
                                counter: telephones.length,
                            }
                            break;
                    }
                    FetchUtil.postData("./php/check-telephone-numbers.php", telephoneData).then((response) => {
                        if(response.status == "already present"){
                            
                        }else {

                        }
                    });
                }
            });
        });
    }

}

export default RegistrationManager;