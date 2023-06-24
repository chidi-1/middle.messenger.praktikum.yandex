import HTTPTransport, {BaseData} from "../../utils/HTTPTransport";
import {BaseAPI} from "../../utils/baseAPI";
import {BaseUserData} from "../user/UserAPI";

export interface ChatDataCreate extends BaseData {
    title: string,
}

export interface UserDataAuth extends BaseData {
    login: string,
    password: string,
}

export interface ChatDataGetList extends BaseData {
    offset: number,
    limit: number,
    title: string,
}

export interface GetChatListResponse {
    id: number,
    title: string,
    avatar: string,
    unread_count: number,
    last_message: {
        user: {
            first_name: string,
            second_name: string,
            avatar: string,
            email: string,
            login: string,
            phone: string
        },
        time: string,
        content: string
    }
}

export interface GetChatUsersResponse extends BaseUserData{
    role: string;
}

export interface GetChatTokenResponse {
    token: string
}

export interface AddUsersToChat extends BaseData {
    users: number[],
    chatId: number
}

export enum MessageType {
    message = 'message',
}

export interface ChatMessage {
    content: string,
    id: number,
    time: string,
    type: MessageType,
    user_id: number
}

export interface Message {
    type: MessageType,
}

class ChatAPI extends BaseAPI {
    public async create(data: ChatDataCreate) {
        let sdf = HTTPTransport.post<ChatDataCreate, undefined>('https://ya-praktikum.tech/api/v2/chats', data, {
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
            notNeedJsonTransform: true
        });
        sdf.then(() => {
        })

        sdf.catch((smth) => {
        })

        return sdf;
    }

    public async getList(data: ChatDataGetList) {
        let sdf = HTTPTransport.get<ChatDataGetList, GetChatListResponse[]>('https://ya-praktikum.tech/api/v2/chats', data, {headers: {'Content-Type': 'application/json;charset=UTF-8'}});

        return sdf;
    }

    public async getToken(id: number) {
        let token = HTTPTransport.post<BaseData, GetChatTokenResponse>(`https://ya-praktikum.tech/api/v2/chats/token/${id}`, {}, {headers: {'Content-Type': 'application/json;charset=UTF-8'}})
        return token;
    }

    public async getChatUsers(id: number) {
        let chatUsers = HTTPTransport.get<BaseData, GetChatUsersResponse[]>(`https://ya-praktikum.tech/api/v2/chats/${id}/users/`, {}, {headers: {'Content-Type': 'application/json;charset=UTF-8'}})
        return chatUsers;
    }

    public async addUserToChat(data: AddUsersToChat) {
        let response = HTTPTransport.put<AddUsersToChat, undefined>(`https://ya-praktikum.tech/api/v2/chats/users/`, data, {
            headers: {'Content-Type': 'application/json;charset=UTF-8'},
            notNeedJsonTransform: true
        })
        return response;
    }
}

export default new ChatAPI();
