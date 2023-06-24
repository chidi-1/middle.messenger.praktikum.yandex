import Block, {IProperties} from "../../../utils/Block";
import template from "./chatHeader.hbs";
import {Button} from "../../button/buttonSimple";
import {ModalChat} from "../../modal/modalChat/modalChat";
import {FormBlockCreateChat} from "../../formBlocks/formBlock";
import {ChatDataCreate, GetChatUsersResponse} from "../../../base/chat/ChatAPI";
import ChatController from "../../../base/chat/ChatController";
import UserController from "../../../base/user/UserController";
import store, {StoreEvents} from "../../../utils/store";
import {ButtonWithIcon} from "../../button/buttonWithIcon";

export interface ChatHeaderProps extends IProperties {
    showMenu: boolean;
    chatID?: number;
    first_name?: string;
}

export class ChatHeader extends Block<ChatHeaderProps> {
    constructor(props: ChatHeaderProps) {
        super('div', props);

        store.on(StoreEvents.Updated, () => {
            if (store.getState().chatUsers) {
                let chatUsers = store.getState().chatUsers as GetChatUsersResponse[];
                this.props.first_name = chatUsers[0].first_name;
            }
        })
    }

    protected init() {
        super.init();
        this.element?.classList.add('chat__header');

        this.children.buttonAddUser = new Button({
            events: {
                click: () => {
                    console.log(this)
                    this.children.modalAddUser.show();
                }
            },
            class: "button mb-15",
            label: "Добавить пользователя"
        })

        this.children.buttonToggleMenu = new ButtonWithIcon({
            events: {
                click:() => {
                    this.props.showMenu = true;
                }
            },
            class: "no-style",
            iconClass: "icon-ellipsis"
        })

        this.children.modalAddUser = new ModalChat({
            inputType: FormBlockCreateChat,
            buttonValue: 'Добавить',
            title: 'Добавить пользователя',
            callback: (data: string) => {
                UserController.searchUser({login: data}).then((response) => {
                    let user = response[0]
                    let id = user.id;

                    ChatController.addUserToChat({users: [id], chatId: this.props.chatID!}).then(() => {
                        console.log('Что-то куда-то добавилось')
                        this.children.modalAddUser.hide();
                    })
                })

                /*let chatDataCreate:ChatDataCreate = {
                    title: data,
                }

                ChatController.create(chatDataCreate).then(() => {
                    ChatController.updateChatsList({offset: 0, limit: 50, title: ''})
                    this.children.modalAddUser.hide();
                });*/
            }
        })
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

