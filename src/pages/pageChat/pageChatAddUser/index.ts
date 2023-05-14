import Block, {IProperties} from '../../../utils/Block';
import template from './pageChatAddUser.hbs';
import {FormSearchChat} from '../../../components/formBlocks/search';
import {ChatList} from '../../../components/chat/chatList';
import {ChatHeader} from '../../../components/chat/chatHeader';
import {ChatContent} from '../../../components/chat/chatContent';
import {ChatFooter} from '../../../components/chat/chatFooter';
import {ChatModal} from '../../../components/modal/modal';

export class PageChatAddUser extends Block<IProperties> {
    constructor() {
        super('div', {});
    }

    protected init() {
        super.init();
        this.element?.classList.add('correspondence')

        this.children.formSearchChat = new FormSearchChat({
            name: '',
            placeholder: 'Поиск',
            required: true
        });
        this.children.chatList = new ChatList(chatlist)

        this.children.chatHeader = new ChatHeader({showMenu: false})
        this.children.chatContent = new ChatContent(messageList)
        this.children.chatFooter = new ChatFooter({
            action: 'sdf',
            method: 'sdf',
            showMenu: false
        })

        this.children.chatModal = new ChatModal({
            buttonValue: 'Добавить',
            action: 'sdf',
            method: 'sdf',
            title: 'Добавить пользователя'
        })
    }

    render() {
        return this.compile(template, {});
    }
}
