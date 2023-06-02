import {ChatDataCreate, ChatDataGetList} from "./ChatAPI";
import ChatAPI from "./ChatAPI";
import store from "../../utils/store";

class ChatController {
    async create(data: ChatDataCreate) {
        return await ChatAPI.create(data).then(() => {})
    }

    async updateChatsList(data: ChatDataGetList) {
        return await ChatAPI.getList(data).then((response) => {
            store.update('badUglyCoyote', response);
        })
    }
}

export default new ChatController();
