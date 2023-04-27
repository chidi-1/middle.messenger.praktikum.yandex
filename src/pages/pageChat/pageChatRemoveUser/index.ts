import Block from '../../../utils/Block';
import template from './pageChatRemoveUser.hbs';
import {FormSearchChat} from "../../../components/search";
import {ContactsList} from "../../../components/contact"
import {Input, inputType} from '../../../components/input/';
import {Messaging} from "../../../components/messaging";
import {FormMessage} from "../../../components/message";
import {MessagingHeader} from "../../../components/messagingHeader";
import {MessagingModal} from "../../../components/messagingModal";

interface PageChatProps {
    title: string;
}

let chatlist = {
    contacts: [
        {name: "Андрей", message: "Изображение", time: "10:49", unread: 2},
        {name: "Киноклуб", message: "стикер", answer: true, time: "12:00"},
        {name: "Илья", message: "Друзья, у меня для вас особенный выпуск новостей! И еще какой-то текст", time: "15:12", unread: 4},
        {name: "Вадим", message: "Круто", answer: true, time: "Пт"},
        {name: "тет-а-теты", message: "И Human Interface Guidelines и Material Design рекомендуют вы", time: "Ср"},
        {name: "1, 2, 3", message: "Миллионы россиян ежедневно проводят десятки часов своего сна", time: "Пн"},
        {name: "Design Destroyer", message: "В 2008 году художник Jon Rafman  начал собирать", time: "Пн"},
        {name: "Day", message: "Так увлёкся работой по курсу, что совсем забыл его анонсировать", time: "1 Мая 2020"},
        {name: "Стас Рогозин",  message: "Можно или сегодня или завтра вечером", time: "12 Апр 2020"},
    ]
}

export class PageChatRemoveUser extends Block {
    constructor(props: PageChatProps) {
        super('div', props);
    }

    protected init() {
        super.init();
        this.element?.classList.add('correspondence')

        this.children.modal = new MessagingModal({
            title: 'Удалить пользователя',
            type: inputType.text,
            name: 'login',
            inputValue: 'ivanivanov',
            label: 'Логин',
            required: true,
            buttonValue: 'Удалить',
            }
        )

        this.children.contactsList = new ContactsList(chatlist)
        this.children.messagingHeader = new MessagingHeader({showMenu: false})
        this.children.messaging = new Messaging()
        this.children.formMessage = new FormMessage({showMenu: false})
    }

    render() {
        return this.compile(template, this.props);
    }
}
