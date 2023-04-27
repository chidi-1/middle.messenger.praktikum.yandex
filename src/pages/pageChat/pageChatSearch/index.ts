import Block from '../../../utils/Block';
import template from './pageChatSearch.hbs';
import {FormSearchChat} from "../../../components/search";
import {ContactsList} from "../../../components/contact"
import {Input, inputType} from '../../../components/input/';
import {Messaging} from "../../../components/messaging";
import {FormMessage} from "../../../components/message";
import {MessagingHeader} from "../../../components/messagingHeader";

interface PageChatProps {
    title: string;
}

let chatlist = {
    contacts: [
        {name: "Киноклуб", message: "Изображение", class: "search-result"},
    ]
}

export class PageChatSearch extends Block {
    constructor(props: PageChatProps) {
        super('div', props);
    }

    protected init() {
        super.init();
        this.element?.classList.add('correspondence')

        this.children.formSearchChat = new FormSearchChat({
                type: inputType.text,
                name: 'search',
                class: 'search-input',
                label: 'Поиск',
                value: 'Кино',
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
