import Block from "../../../utils/Block";
import {Input, inputType} from "../../../components/input";
import template from './pageFormReg.hbs';
import {Button} from "../../../components/button";


export class PageReg extends Block {
    constructor() {
        super('div', {});
    }

    protected init() {
        this.element?.classList.add('full-page')

        this.children.inputEmail = new Input({
            type: inputType.email,
            class: "",
            name: "email",
            label: "Почта"
        })

        this.children.inputLogin = new Input({
            type: inputType.text,
            class: "",
            name: "login",
            label: "Логин"
        })

        this.children.inputFirstName = new Input({
            type: inputType.text,
            class: "",
            name: "first_name",
            label: "Имя"
        })

        this.children.inputSecondName = new Input({
            type: inputType.text,
            class: "",
            name: "second_name",
            label: "Фамилия"
        })

        this.children.inputPhone = new Input({
            type: inputType.text,
            class: "",
            name: "phone",
            label: "Телефон",
            value: "+7 (909) 967 30 30"
        })

        this.children.inputOldPassword = new Input({
            type: inputType.password,
            name: "oldPassword",
            label: "Пароль",
            class: "c-red",
            value: "••••••••••••"
        })

        this.children.inputNewPassword = new Input({
            type: inputType.password,
            name: "newPassword",
            label: "Пароль (ещё раз)",
            class: "c-red",
            value: "••••••••••••",
            errorText: "Пароли не совпадают"
        })

        this.children.button = new Button({
            events: {
                click: function () {
                }
            },
            label: "Зарегистрироваться",
            class: "button mb-15",
            type: "submit",
        })
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}