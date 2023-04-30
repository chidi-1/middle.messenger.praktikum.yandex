import Block from "../../../utils/Block";
import template from "./chatFooter.hbs";
import {dropdownMenuProps} from "../chatHeader";
import {InputText} from "../../form/input";
import {Button} from "../../button";

export class ChatFooter extends Block {
    constructor(props: dropdownMenuProps) {
        super('form', props);
    }

    protected init() {
        super.init();
        this.element?.classList.add('chat__footer');

        this.children.input = new InputText({
            name: "message",
            placeholder: "Сообщение",
        })
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

