import {
    FormBlockEmail,
    FormBlockLogin,
    FormBlockName, FormBlockPassword, FormBlockPasswordDouble,
    FormBlockPhone,
    FormBlockSurname
} from "../../formBlocks/formBlock";
import {Button} from "../../button/buttonSimple";
import {validateForm} from "../../../utils/funcions";
import {Form, IFormProps} from "../form";
import template from "./formReg.hbs";
import {UserDataReg} from "../../../base/user/UserAPI";
import UserController from "../../../base/user/UserController";
import {Router} from "../../../utils/router";

export class FormReg extends Form<IFormProps> {
    protected init() {
        super.init();

        this.children.blockEmail1 = new FormBlockEmail({})
        this.children.blockLogin = new FormBlockLogin({})
        this.children.blockName = new FormBlockName({})
        this.children.blockSurname = new FormBlockSurname({})
        this.children.blockPhone = new FormBlockPhone({})
        this.children.blockPassword = new FormBlockPassword({})
        this.children.blockPasswordDouble = new FormBlockPasswordDouble({})

        this.children.button = new Button({
            events: {
                click: () => {
                    validateForm(this);
                }
            },
            label: "Зарегистрироваться",
            class: "button mb-15",
            type: "submit",
        })

        this.children.link = new Button({
            events: {
                click: () => {
                    new Router().go('/')
                }
            },
            label: "Войти",
            class: "no-style c-blue",
        })
    }

    submit() {
        let data:UserDataReg = {
            email: this.children.blockEmail1.getValue(),
            first_name: this.children.blockName.getValue(),
            second_name: this.children.blockSurname.getValue(),
            login: this.children.blockLogin.getValue(),
            password: this.children.blockPassword.getValue(),
            phone: this.children.blockPhone.getValue()
        }

        UserController.registration(data).then((dsf) => {console.log(dsf)});
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}
