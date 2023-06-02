import template from "./modalChat.hbs";
import {FormChat} from "../../form/formChat/formChat";
import Block from "../../../utils/Block";
import {IModalMessenger} from "../modal";
import ChatController from "../../../base/chat/ChatController";


export class ModalChat extends Block<IModalMessenger> {
    constructor(props: IModalMessenger) {
        super('div', props);
    }

    protected init() {
        super.init();
        this.element?.classList.add('modal');
        this.children.form = new FormChat({
            inputType: this.props.inputType,
            title: this.props.title,
            buttonValue: this.props.buttonValue
        }, () => {
            ChatController.updateChatsList({offset: 0, limit: 50, title: ''})
            this.hide();
        })
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

