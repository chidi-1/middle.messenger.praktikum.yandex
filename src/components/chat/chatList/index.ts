import Block from "../../../utils/Block";
import template from "./chatList.hbs";


interface contactProps {
    name: string;
    time: string;
    message: string;
    answer?: boolean;
    unread?: number
}

interface chatListProps {
    contacts: contactProps[];
}

export class ChatList extends Block {
    constructor(props: chatListProps) {
        super('ul', props);
    }

    protected init() {
        super.init();
        this.element?.classList.add('contacts');
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

