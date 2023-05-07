import Block from "../../../utils/Block";
import template from './pageFormReg.hbs';
import {Button} from "../../../components/button";
import {StartFormEl} from "../../../components/form/startFormEl";
import {InputEmail, InputPassword, InputPhone, InputText} from "../../../components/form/input";


export class PageReg extends Block {
    constructor() {
        super('div', {});
    }

    protected init() {
        this.element?.classList.add('full-page')

        this.children.startFormElEmail = new StartFormEl({
            input: new InputEmail({
                name: "email",
                placeholder: "Почта",
                required: true

            }),
            label: "Почта"
        })

        this.children.startFormElLogin = new StartFormEl({
            input: new InputText({
                name: "login",
                placeholder: "Логин",
                required: true

            }),
            label: "Логин"
        })

        this.children.startFormElName = new StartFormEl({
            input: new InputText({
                name: "first_name",
                placeholder: "Имя",
                required: true

            }),
            label: "Имя"
        })

        this.children.startFormElSurname = new StartFormEl({
            input: new InputText({
                name: "second_name",
                placeholder: "Фамилия",
                required: true

            }),
            label: "Фамилия"
        })

        this.children.startFormPhone = new StartFormEl({
            input: new InputPhone({
                name: "phone",
                placeholder: "Телефон",
                required: true

            }),
            label: "Телефон"
        })

        this.children.startFormElPassword = new StartFormEl({
            input: new InputPassword({
                name: "password",
                placeholder: "Пароль",
                required: true

            }),
            label: "Пароль"
        })

        this.children.startFormElPasswordDouble = new StartFormEl({
            input: new InputPassword({
                name: "password_double",
                placeholder: "Пароль (ещё раз)",
                required: true

            }),
            label: "Пароль (ещё раз)"
        })

        this.children.button = new Button({
            events: {
                click: function () {
                    return true;
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
