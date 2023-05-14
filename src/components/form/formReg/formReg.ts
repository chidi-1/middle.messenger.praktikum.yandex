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
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}
