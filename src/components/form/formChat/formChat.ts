import {FormBlockLogin,} from "../../formBlocks/formBlock";
import {Button} from "../../button/buttonSimple";
import {validateForm} from "../../../utils/funcions";
import {Form, IFormProps} from "../form";
import template from "./formChat.hbs";

export interface IFormChatProps extends IFormProps{
    title: string,
    buttonValue: string
}

export class FormChat extends Form<IFormChatProps> {

    protected init() {
        super.init();

        this.children.formBlock = new FormBlockLogin({});

        this.children.button = new Button({
            class: "button",
            events: {
                click: () => {
                    validateForm(this);
                }
            },
            label: this.props.buttonValue,
            type: "submit"
        })
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}
