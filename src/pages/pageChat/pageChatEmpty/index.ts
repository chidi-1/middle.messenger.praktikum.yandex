import Block, {IProperties} from '../../../utils/Block';
import template from './pageChatEmpty.hbs';
import {FormSearchChat} from "../../../components/formBlocks/search";
import {ChatList} from "../../../components/chat/chatList";
import {Button} from "../../../components/button/buttonSimple";
import {FormBlockCreateChat, FormBlockLogin} from "../../../components/formBlocks/formBlock";
import {ModalChat} from "../../../components/modal/modalChat/modalChat";

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

        this.children.chatList = new ChatList(chatlist)

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
    }

    render() {
        return this.compile(template, {});
    }
}
