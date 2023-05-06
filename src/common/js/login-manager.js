class LoginManager {

    constructor(parentElement){
        this.rootElement = parentElement;
        this.elements = {};
    }

    init(){
        this.initElements();
        this.initEventListeners();
    }

    initElements(){
        this.elements = {
            username: this.rootElement.querySelector(".username"),
            password: this.rootElement.querySelector(".password"),
            form: this.rootElement.querySelector("form"),
        }
    }

    initEventListeners(){

    }

}