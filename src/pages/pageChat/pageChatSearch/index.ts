import Block, {IProperties} from '../../../utils/Block';
import template from './pageChatSearch.hbs';
import {FormSearchChat} from "../../../components/formBlocks/search";
import {ChatHeader} from "../../../components/chat/chatHeader";
import {ChatContent} from "../../../components/chat/chatContent";
import {ChatFooter} from "../../../components/chat/chatFooter";
import {ChatListSearchResult} from "../../../components/chat/chatListSearch";


export class PageChatSearch extends Block<IProperties> {
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
        this.children.chatList = new ChatListSearchResult(chatlistSearchResult)

        this.children.chatHeader = new ChatHeader({showMenu: false})
        this.children.chatContent = new ChatContent(messageList)
        this.children.chatFooter = new ChatFooter({
            action: "sdf",
            method: "sdf",
            showMenu: false})
    }

    render() {
        return this.compile(template, {});
    }
}
