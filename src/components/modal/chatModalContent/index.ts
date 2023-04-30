import template from "./chatModalContent.hbs";
import {Button} from "../../button";
import {StartFormEl} from "../../form/startFormEl";
import {InputText} from "../../form/input";
import Block from "../../../utils/Block";

interface chatModalContentProps {
    title: string,
    hasError: boolean,
    label: string,
    inputValue: string,
    errortext?: string,
    buttonValue: string,
    formAction: string,
    formMethod: string,
}

export class ChatModalContent extends Block {
    constructor(props: chatModalContentProps) {
        super('form', props);
    }

    protected init() {
        super.init();

        this.element?.setAttribute('action', this.props.formAction)
        this.element?.setAttribute('method', this.props.formMethod)

        this.children.inputEl = new StartFormEl({
            hasError: this.props.hasError,
            inputType: new InputText({
                name: "name",
                placeholder: this.props.label,
                required: false,
                value: this.props.inputValue
            }),
            label: this.props.label
        });

        this.children.button = new Button({
            class: "button",
            events: {
                click: function () {
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


