import Block, {IProperties} from "../../../utils/Block";
import template from "./chatList.hbs";
import {GetChatListResponse} from "../../../base/chat/ChatAPI";
import {storeFilter} from "../../../utils/HOCFilter";
import store, {StoreEvents} from "../../../utils/store";
import ChatController from "../../../base/chat/ChatController";
import * as VM from "vm";

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
    callbackSwitchChat:(chatID:number) => void;
    constructor(callbackSwitchChat:(chatID:number) => void) {
        super('ul', {chats:[]});
        this.callbackSwitchChat = callbackSwitchChat;
        this.props.events = {'click': this.switchChat.bind(this)}

        store.on(StoreEvents.Updated, () => {
            this.setProps({
                chats: store.getState().badUglyCoyote
            })
        })
    }

    protected init() {
        super.init();
        this.element?.classList.add('contacts');
        ChatController.updateChatsList({offset: 0, limit: 50, title: ''})
    }

    switchChat(event:any) {
        this.callbackSwitchChat(event.target.closest('li').dataset.id);
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

//export default storeFilter<ChatListProps>(ChatList, (storeData) => {chats: storeData.badUglyCoyote})
