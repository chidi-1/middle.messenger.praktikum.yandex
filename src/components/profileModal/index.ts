import Block from "../../utils/Block";
import template from "./profileModal.hbs";
import {inputType} from "../input";
import {Button} from "../button";

interface ProfileModalProps {
    title: string,
    titleError: boolean,
    name: string,
    fileLoaded: boolean,
    text: string,
    hasError: boolean
    textError?: string
}

export class ProfileModal extends Block {
    constructor(props: ProfileModalProps) {
        super('div', props);
    }

    protected init() {
        super.init();
        this.element?.classList.add('modal');

        this.children.button = new Button({
            class: "button",
            events: {
                click: function () {
                }
            },
            label: "Поменять",
            type: "submit"
        })
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

