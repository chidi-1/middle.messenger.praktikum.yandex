import Block from "../../../utils/Block";
import template from './pageFormLogin.hbs';
import {Button} from "../../../components/button";
import {StartFormEl, StartFormEl2} from "../../../components/form/startFormEl";
import {InputLogin, InputPassword, iValidable} from "../../../components/form/input";

export class PageLogin extends Block {
    constructor() {
        super('div', {});
    }

    protected init() {
        this.element?.classList.add('full-page')

        this.children.startFormElLogin = new StartFormEl2({
            input: new InputLogin({
                name: "login",
                placeholder: "Логин",
                required: true
            }),
            label: "Логин"

        })

        this.children.startFormElPassword = new StartFormEl({
            input: new InputPassword({
                name: "password",
                placeholder: "Пароль",
                required: true
            }),
            label: "Пароль"
        })

        this.children.button = new Button({
            events: {
                click: () => {
                    for (const children of Object.values(this.children)) {
                        const ivalidatble = (children as any as iValidable);
                        if(ivalidatble.isValid!==undefined) {
                            ivalidatble.validate();
                        }
                    }
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
