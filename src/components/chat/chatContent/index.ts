import Block, {IProperties} from "../../../utils/Block";
import template from "./chatContent.hbs";
import store, {StoreEvents} from "../../../utils/store";
import {ChatMessage, MessageType} from "../../../base/chat/ChatAPI";
import {convertToChatMessagesTemplateData} from "../../../utils/funcions";

interface MessageProps extends IProperties {
    date: string;
    time: string;
    message: [];
    answer?: boolean;
    unread?: number;
    separator?: number;
}

interface ChatContentProps extends IProperties {
    chatID?: number;
    messages: ChatMessageTemplateData[];
}

export interface ChatMessageTemplateData {
    separator: boolean;
    own?: boolean;
    readed?: boolean;
    date?: string;
    time?: string;
    content?: string[];
    img?: string;
}

export enum MessageRender {
    DefaultMessage,
    DateSeparator,
    Sticker
}
export interface IMessageData{

}

export interface DefaultMessageData extends IMessageData{
    text: string
}

export interface DateSeparatorData extends IMessageData{
    date: Date
}

export interface Message {
    type: MessageRender,
    data: IMessageData
}

export class ChatContent extends Block<ChatContentProps> {
    constructor(props: ChatContentProps) {
        super('div', props);

        store.on(StoreEvents.Updated, () => {
            let chatMessages:ChatMessage[] = (store.getState()[`${this.props.chatID}messages`] as ChatMessage[]);

            if (this.props.chatID && chatMessages) {
                this.setProps({
                    messages: convertToChatMessagesTemplateData(chatMessages)
                })
            }
        })
    }

    protected init() {
        super.init();
        this.element?.classList.add('chat__content');
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

