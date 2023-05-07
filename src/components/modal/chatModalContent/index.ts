import template from "./chatModalContent.hbs";
import {Button} from "../../button";
import {StartFormEl, StartFormElProps} from "../../form/startFormEl";
import Block from "../../../utils/Block";

export interface chatModalContentProps {
    title: string,
    inputProps?: StartFormElProps,
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

        this.children.inputEl = new StartFormEl(this.props.inputProps);

        this.children.button = new Button({
            class: "button",
            events: {
                click: () => {
                    return true;
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


