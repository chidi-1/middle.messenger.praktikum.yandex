import {
    FormBlockLogin,
    FormBlockPassword,
} from "../../formBlocks/formBlock";
import {Button} from "../../button/buttonSimple";
import {validateForm} from "../../../utils/funcions";
import {Form, IFormProps} from "../form";
import template from "./formLogin.hbs";
import {UserDataAuth, UserDataReg} from "../../../base/user/UserAPI";
import UserController from "../../../base/user/UserController";
import {Router} from "../../../utils/router";

export class FormLogin extends Form<IFormProps> {
    protected init() {
        super.init();

        this.children.blockLogin = new FormBlockLogin({})
        this.children.blockPassword = new FormBlockPassword({})

        this.children.button = new Button({
            events: {
                click: () => {
                    validateForm(this);
                }
            },
            label: "Авторизоваться",
            class: "button mb-15",
            type: "submit",
        })

        this.children.link = new Button({
            events: {
                click: () => {
                    new Router().go('/sign-up')
                }
            },
            label: "Нет аккаунта",
            class: "no-style c-blue",
        })
    }

    submit() {
        let data:UserDataAuth = {
            login: this.children.blockLogin.getValue(),
            password: this.children.blockPassword.getValue(),
        }

        UserController.login(data)
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}
