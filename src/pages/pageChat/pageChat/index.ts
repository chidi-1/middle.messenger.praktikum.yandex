import Block from '../../../utils/Block';
import template from './pageChat.hbs';
import {FormSearchChat} from "../../../components/formBlocks/search";
import {ChatList} from "../../../components/chat/chatList";
import {ChatHeader} from "../../../components/chat/chatHeader";
import {ChatFooter} from "../../../components/chat/chatFooter";
import {ChatContent} from "../../../components/chat/chatContent";

export class PageChat extends Block {
    constructor() {
        super('div', {});
    }

    protected init() {
        super.init();
        this.element?.classList.add('correspondence')

        this.children.formSearchChat = new FormSearchChat({
            name: "",
            placeholder: "Поиск",
            required: true
        });
        this.children.chatList = new ChatList(chatlist)

        this.children.chatHeader = new ChatHeader({showMenu: false})
        this.children.chatContent = new ChatContent(messageList)
        this.children.chatFooter = new ChatFooter({
            action: "sdf",
            method: "sdf"
        },{showMenu: false})
    }

    render() {
        return this.compile(template, {});
    }
}
