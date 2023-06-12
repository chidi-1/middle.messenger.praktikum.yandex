import Block, {IProperties} from '../../../utils/Block';
import template from './pageChat.hbs';
import {FormSearchChat} from "../../../components/formBlocks/search";
import ChatList from "../../../components/chat/chatList";
import {ChatHeader} from "../../../components/chat/chatHeader";
import {ChatFooter} from "../../../components/chat/chatFooter";
import {ChatContent} from "../../../components/chat/chatContent";

export class PageChat extends Block<IProperties> {
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

        this.children.chatList = new ChatList({events: {click: this.switchChat.bind(this)}, chats: []})

        this.children.chatHeader = new ChatHeader({showMenu: false})
        this.children.chatContent = new ChatContent(messageList)
        this.children.chatFooter = new ChatFooter({
            action: "sdf",
            method: "sdf",
            showMenu: false
        })
    }

    switchChat(event:any) {
        console.log(event.target)
        console.log(event.target.dataset.id)
    }

    render() {
        return this.compile(template, {});
    }
}

