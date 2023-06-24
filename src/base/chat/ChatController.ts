import {AddUsersToChat, ChatDataCreate, ChatDataGetList} from "./ChatAPI";
import ChatAPI from "./ChatAPI";
import store from "../../utils/store";
import manager from "../../utils/WebSocketTransport";

class ChatController {
    async create(data: ChatDataCreate) {
        return await ChatAPI.create(data).then(() => {
        })
    }

    async updateChatsList(data: ChatDataGetList) {
        return await ChatAPI.getList(data).then((response) => {
            for (const chat of response) {
                manager.open(chat.id)
            }
            store.update('badUglyCoyote', response);
        })
    }

    async getToken(id: number) {
       return ChatAPI.getToken(id)
    }

    async updateChatUsers(id: number) {
       return ChatAPI.getChatUsers(id).then((response) => {
           store.update('chatUsers', response);
       });
    }

    async addUserToChat(data: AddUsersToChat) {
        return await ChatAPI.addUserToChat(data)
    }
}

export default new ChatController();
