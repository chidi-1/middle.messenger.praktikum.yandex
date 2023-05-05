import Block from '../../../utils/Block';
import template from './pageChatAddUser.hbs';
import {FormSearchChat} from "../../../components/form/search";
import {ChatList} from "../../../components/chat/chatList";
import {ChatHeader} from "../../../components/chat/chatHeader";
import {ChatContent} from "../../../components/chat/chatContent";
import {ChatFooter} from "../../../components/chat/chatFooter";
import {InputText} from "../../../components/form/input";
import {ChatModal} from "../../../components/modal/modal";

export class PageChatAddUser extends Block {
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
        this.children.chatFooter = new ChatFooter({showMenu: false})

        this.children.chatModal = new ChatModal({
            title: "Добавить пользователя",
            formAction: "",
            formMethod: "post",
            inputProps: {
                label: 'Логин',
                input: new InputText({
                    name: "login",
                    placeholder: "Логин",
                    required: true
                })
            },
            buttonValue: "Добавить",
        })
    }

    render() {
        return this.compile(template, this.props);
    }
}
