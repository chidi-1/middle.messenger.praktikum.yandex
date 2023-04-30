import Block from "../../utils/Block";
import template from "./profileFormDisabled.hbs";
import {ProfileFormEl} from "../profileFormEl";
import {inputType} from "../input";
import {Button} from "../button";

export class ProfileFormDisabled extends Block {
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
            disabled: true
        })
        this.children.login = new ProfileFormEl({
            label: 'Логин',
            type: inputType.text,
            name: 'login',
            value: 'ivanivanov',
            disabled: true
        })
        this.children.name = new ProfileFormEl({
            label: 'Имя',
            type: inputType.text,
            name: 'first_name',
            value: 'Иван',
            disabled: true
        })
        this.children.surname = new ProfileFormEl({
            label: 'Фамилия',
            type: inputType.text,
            name: 'second_name',
            value: 'Иванов',
            disabled: true
        })
        this.children.chatname = new ProfileFormEl({
            label: 'Имя в чате',
            type: inputType.text,
            name: 'chat_name',
            value: 'Иван',
            disabled: true
        })
        this.children.phone = new ProfileFormEl({
            label: 'Телефон',
            type: inputType.text,
            name: 'phone',
            value: '+7&nbsp;(909)&nbsp;967&nbsp;30&nbsp;30',
            disabled: true
        })
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

