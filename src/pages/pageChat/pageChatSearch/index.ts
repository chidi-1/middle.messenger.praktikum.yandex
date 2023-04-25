import Block from '../../../utils/Block';
import template from './pageChatSearch.hbs';
import {FormSearchChat} from "../../../components/search";
import {ContactsList} from "../../../components/contact"
import {Input, inputType} from '../../../components/input/';

interface PageChatProps {
    title: string;
}

let chatlist = {
    contacts: [
        {name: "Киноклуб", message: "Изображение", time: "10:49", unread: 2},
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
            }
        )

        this.children.contactsList = new ContactsList(chatlist)
        console.log(this.children.contactsList)
    }

    render() {
        return this.compile(template, this.props);
    }
}
