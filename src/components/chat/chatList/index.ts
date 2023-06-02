import Block, {IProperties} from "../../../utils/Block";
import template from "./chatList.hbs";
import {GetChatListResponse} from "../../../base/chat/ChatAPI";
import {storeFilter} from "../../../utils/HOCFilter";
import store, {StoreEvents} from "../../../utils/store";

interface ChatProps extends IProperties {
    name: string;
    time: string;
    message: string;
    answer?: boolean;
    unread?: number
}

interface ChatListProps extends IProperties {
    chats: GetChatListResponse[];
}

export class ChatList extends Block<ChatListProps> {
    constructor(props: ChatListProps) {
        super('ul', props);
        store.on(StoreEvents.Updated, () => {
            this.setProps({
                chats: store.getState().badUglyCoyote
            })
        })
    }

    protected init() {
        super.init();
        this.element?.classList.add('contacts');
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

//export default storeFilter<ChatListProps>(ChatList, (storeData) => {chats: storeData.badUglyCoyote})
