import template from "./chatModalContent.hbs";
import {IChatModalContentProps} from "../modal";
import {FormChat} from "../../form/formChat/formChat";
import Block from "../../../utils/Block";

export class ChatModalContent extends Block<IChatModalContentProps> {
    constructor(props: IChatModalContentProps) {
        super('div', props);
    }

    protected init() {
        super.init();
        this.children.form = new FormChat(this.props)
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

