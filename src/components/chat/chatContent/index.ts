import Block from "../../../utils/Block";
import template from "./chatContent.hbs";

interface messageProps {
    date: string;
    time: string;
    message: [];
    answer?: boolean;
    unread?: number;
    separator?: number;
}

interface chatContentProps {
    messages: messageProps[];
}

export class ChatContent extends Block {
    constructor(props:chatContentProps) {
        super('div', props);
    }

    protected init() {
        super.init();
        this.element?.classList.add('chat__content');
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

