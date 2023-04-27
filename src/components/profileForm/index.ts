import Block from "../../utils/Block";
import template from "./profileForm.hbs";
import {ProfileFormEl} from "../profileFormEl";
import {inputType} from "../input";
import {Button} from "../button";

export class ProfileForm extends Block {
    constructor() {
        super('form', {});
    }

    protected init() {
        super.init();
        this.element?.classList.add('edit-settings');

        this.children.email = new ProfileFormEl({
            label: 'Почта',
            type: inputType.text,
            name: 'phone',
            value: 'pochta@yandex.ru',
            disabled: false
        })
        this.children.login = new ProfileFormEl({
            label: 'Логин',
            type: inputType.text,
            name: 'login',
            value: 'ivanivanov',
            disabled: false
        })
        this.children.name = new ProfileFormEl({
            label: 'Имя',
            type: inputType.text,
            name: 'first_name',
            value: 'Иван',
            disabled: false
        })
        this.children.surname = new ProfileFormEl({
            label: 'Фамилия',
            type: inputType.text,
            name: 'second_name',
            value: 'Иванов',
            disabled: false
        })
        this.children.chatname = new ProfileFormEl({
            label: 'Имя в чате',
            type: inputType.text,
            name: 'chat_name',
            value: 'Иван',
            disabled: false
        })
        this.children.phone = new ProfileFormEl({
            label: 'Телефон',
            type: inputType.text,
            name: 'phone',
            value: '+7&nbsp;(909)&nbsp;967&nbsp;30&nbsp;30',
            disabled: false
        })

        this.children.button = new Button({
            label: "Сохранить",
            class: "button m-auto",
            type: "submit",
            events: {click: function () {}},
        })
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

