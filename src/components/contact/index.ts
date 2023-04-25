import Block from "../../utils/Block";
import template from "./contact.hbs";


interface contactProps {
    class?: string;
    name: string;
    time: string;
    message: string;
    answer?: boolean;
    unread?: number
}

interface contactListProps {
    contacts: contactProps[];
}

export class ContactsList extends Block {
    constructor(props: contactListProps) {
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

