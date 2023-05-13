import Block from '../../../utils/Block';
import template from './pageChatEmpty.hbs';
import {FormSearchChat} from "../../../components/formBlocks/search";
import {ChatList} from "../../../components/chat/chatList";

export class PageChatEmpty extends Block {
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
        })

        this.children.chatList = new ChatList(chatlist)
    }

    render() {
        return this.compile(template, {});
    }
}
