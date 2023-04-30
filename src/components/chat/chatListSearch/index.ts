import Block from "../../../utils/Block";
import template from "./chatListSearch.hbs";

interface contactProps {
    name: string;
}

interface chatListProps {
    contacts: contactProps[];
}

export class ChatListSearch extends Block {
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

