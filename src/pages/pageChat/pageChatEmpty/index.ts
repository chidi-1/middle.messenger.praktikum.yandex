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
import {ChatDataCreate} from "../../../base/chat/ChatAPI";
import ChatController from "../../../base/chat/ChatController";
import manager from "../../../utils/WebSocketTransport";

interface PageChatProps extends IProperties {
    isChatSelected: boolean;
    test?: string;
}

export class PageChatEmpty extends Block<PageChatProps> {
    constructor() {
        super('div', {isChatSelected: false});
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
                    this.children.modalAddChat.show()
                }
            },
            class: "button mb-15",
            label: "Добавить чат"
        })

        this.children.modalAddChat = new ModalChat({
            inputType: FormBlockCreateChat,
            buttonValue: 'Добавить',
            title: 'Добавить чат',
            callback:  (data:string) => {
                let chatDataCreate:ChatDataCreate = {
                    title: data,
                }

                ChatController.create(chatDataCreate).then(() => {
                    ChatController.updateChatsList({offset: 0, limit: 50, title: ''})
                    this.children.modalAddChat.hide();
                });
            }
        })

        this.children.chatHeader = new ChatHeader({showMenu: false})
        this.children.chatContent = new ChatContent(messageList)
        this.children.chatFooter = new ChatFooter({
            showMenu: false
        })
    }

    consolka(chatID: number){
        ChatController.updateChatUsers(chatID);
        manager.getOld(chatID, 0);
        this.children.chatFooter.setProps({'chatID': chatID})
        this.children.chatContent.setProps({'chatID': chatID, messages: []})
        this.children.chatHeader.setProps({'chatID': chatID})
        this.setProps({isChatSelected: true, test: "ssdfd"})
    }

    render() {
        return this.compile(template, this.props);
    }
}
