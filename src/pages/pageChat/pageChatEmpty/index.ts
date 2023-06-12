import Block, {IProperties} from '../../../utils/Block';
import template from './pageChatEmpty.hbs';
import {FormSearchChat} from "../../../components/formBlocks/search";
import {ChatList} from "../../../components/chat/chatList";
import {Button} from "../../../components/button/buttonSimple";
import {FormBlockCreateChat, FormBlockLogin} from "../../../components/formBlocks/formBlock";
import {ModalChat} from "../../../components/modal/modalChat/modalChat";
import {ChatHeader} from "../../../components/chat/chatHeader";
import {ChatContent} from "../../../components/chat/chatContent";
import {ChatFooter} from "../../../components/chat/chatFooter";

export class PageChatEmpty extends Block<IProperties> {
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

        this.children.chatList = new ChatList(this.consolka.bind(this))

        this.children.buttonAddChat = new Button({
            events: {
                click: () => {
                    this.children.chatModal.show()
                }
            },
            class: "button mb-15",
            label: "Добавить чат"
        })

        this.children.chatModal = new ModalChat({
            inputType: FormBlockCreateChat,
            buttonValue: 'Добавить',
            title: 'Добавить чат'
        })

        this.children.chatHeader = new ChatHeader({showMenu: false})
        this.children.chatContent = new ChatContent(messageList)
        this.children.chatFooter = new ChatFooter({
            action: "sdf",
            method: "sdf",
            showMenu: false
        })
    }

    consolka(chatID: number){
        this.children.chatFooter.setProps({'chatID': chatID})
        console.log('lklklklklk')
    }

    render() {
        return this.compile(template, {});
    }
}
