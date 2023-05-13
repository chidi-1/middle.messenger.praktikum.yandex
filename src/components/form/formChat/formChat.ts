import {FormBlockLogin,} from "../../formBlocks/formBlock";
import {Button} from "../../button/buttonSimple";
import {validateForm} from "../../../utils/funcions";
import {Form, formProps} from "../form";
import template from "./formChat.hbs";

export class FormChat extends Form {
    constructor(props: formProps, title:string, buttonValue:string,) {
        const chatProps = {
            title: title,
            buttonValue: buttonValue
        }
        super({...props, ...chatProps});
    }

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
