import Block from "../../../utils/Block";
import {Input, inputType} from "../../../components/input";
import template from './pageFormLogin.hbs';
import {Button} from "../../../components/button";


export class PageLogin extends Block {
    constructor() {
        super('div', {});
    }

    protected init() {
        this.element?.classList.add('full-page')

        this.children.inputLogin = new Input({
            type: inputType.text,
            class: "",
            name: "login",
            label: "Логин",
            errorText: "Неверный логин",
            required: true
        })

        this.children.inputPassword = new Input({
            type: inputType.password,
            class: "",
            name: "password",
            label: "Пароль",
        })

        this.children.button = new Button({
            events: {
                click: function () {
                }
            },
            label: "Авторизоваться",
            class: "button mb-15",
            type: "submit",
        })
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}