import template from "./chatModalContent.hbs";
import {chatModalContentProps} from "../modal";
import {FormChat} from "../../form/formChat/formChat";
import Block from "../../../utils/Block";

export class ChatModalContent extends Block<chatModalContentProps> {
    constructor(props: chatModalContentProps) {
        super('div', props);
    }

    protected init() {
        super.init();

        this.children.form = new FormChat(this.props.formProps, this.props.title, this.props.buttonValue)
    }


    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

