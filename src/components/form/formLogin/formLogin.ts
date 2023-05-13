import {
    FormBlockLogin,
    FormBlockPassword,
} from "../../formBlocks/formBlock";
import {Button} from "../../button/buttonSimple";
import {validateForm} from "../../../utils/funcions";
import {Form, formProps} from "../form";
import template from "./formLogin.hbs";

export class FormLogin extends Form {
    constructor(props: formProps) {
        super(props);
    }

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
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}
