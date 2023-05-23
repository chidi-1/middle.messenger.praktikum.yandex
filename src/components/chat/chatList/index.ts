import Block, {IProperties} from "../../../utils/Block";
import template from "./chatList.hbs";

interface contactProps extends IProperties {
    name: string;
    time: string;
    message: string;
    answer?: boolean;
    unread?: number
}

interface chatListProps extends IProperties {
    contacts: contactProps[];
}

export class ChatList extends Block<chatListProps> {
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
