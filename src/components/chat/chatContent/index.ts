import Block, {IProperties} from "../../../utils/Block";
import template from "./chatContent.hbs";
import store, {StoreEvents} from "../../../utils/store";
import {ChatMessage, MessageType} from "../../../base/chat/ChatAPI";

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
    messages: ChatMessageUsedFormat[];
}

export interface ChatMessageUsedFormat {
    separator: boolean;
    own?: boolean;
    readed?: boolean;
    date?: string;
    time?: string;
    content?: string[];
    img?: string;
}

export class ChatContent extends Block<ChatContentProps> {
    constructor(props:ChatContentProps) {
        super('div', props);

        store.on(StoreEvents.Updated, () => {
            let chatMessages = store.getState()[`${this.props.chatID}messages`];
            let ChatMessageUsedFormat:ChatMessageUsedFormat[] = [];
            if(this.props.chatID && chatMessages){
                let prevDate:Date = new Date(Date.parse(chatMessages[0].time))
                let messagesPerMinite:string[] = [];
                ChatMessageUsedFormat.push({separator: true, date:`${prevDate.toLocaleString('ru-Ru', { month: "long" })} ${prevDate.getDate()}`})

                for (let message of chatMessages){
                    let currentDate = new Date(Date.parse(message.time));
                    if(currentDate.toLocaleString('ru-Ru', { month: "long" }) != prevDate.toLocaleString('ru-Ru', { month: "long" }) && currentDate.getDate() !== prevDate.getDate()){
                        ChatMessageUsedFormat.push({separator: true, date:`${currentDate.toLocaleString('ru-Ru', { month: "long" })} ${currentDate.getDate()}`})
                    }
                    else{
                        if(prevDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) == currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})){
                            messagesPerMinite.push(message.content);
                        }
                        else{
                            if(!messagesPerMinite.length){
                                messagesPerMinite.push(message.content);
                            }

                            ChatMessageUsedFormat.push({
                                separator: false,
                                time: currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
                                content: messagesPerMinite,
                            })
                            messagesPerMinite = [];
                        }
                    }
                    prevDate = currentDate;
                }
                console.log(ChatMessageUsedFormat)

                this.setProps({
                    messages: (ChatMessageUsedFormat as ChatMessageUsedFormat[])
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

