import Block from '../../../utils/Block';
import template from './pageChatMessage.hbs';
import {FormSearchChat} from "../../../components/form/search";
import {ChatList} from "../../../components/chat/chatList"
import {ChatContent} from "../../../components/chat/chatContent";
import {ChatFooter} from "../../../components/chat/chatFooter";
import {ChatHeader} from "../../../components/chat/chatHeader";

export class PageChatMessages extends Block {
    constructor() {
        super('div', {});
    }

    protected init() {
        super.init();
        this.element?.classList.add('correspondence')

        this.children.formSearchChat = new FormSearchChat({})
        this.children.chatList = new ChatList(chatlist)

        this.children.chatHeader = new ChatHeader({showMenu: false})
        this.children.chatContent = new ChatContent(messageList)
        this.children.chatFooter = new ChatFooter({showMenu: false})
    }

    render() {
        return this.compile(template, this.props);
    }
}
