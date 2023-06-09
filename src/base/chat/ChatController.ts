import {ChatDataCreate, ChatDataGetList} from "./ChatAPI";
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
}

export default new ChatController();
