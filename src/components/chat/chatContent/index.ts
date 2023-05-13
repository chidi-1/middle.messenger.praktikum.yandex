import Block, {IProperties} from "../../../utils/Block";
import template from "./chatContent.hbs";

interface MessageProps extends IProperties {
    date: string;
    time: string;
    message: [];
    answer?: boolean;
    unread?: number;
    separator?: number;
}

interface chatContentProps extends IProperties {
    messages: MessageProps[];
}

export class ChatContent extends Block<chatContentProps> {
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

