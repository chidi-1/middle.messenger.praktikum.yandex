import HTTPTransport, {BaseData} from "../../utils/HTTPTransport";
import {BaseAPI} from "../../utils/baseAPI";

export interface ChatDataCreate extends BaseData{
    title: string,
}

export interface UserDataAuth extends BaseData{
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

export interface GetChatTokenResponse {
    token: string
}

class ChatAPI extends BaseAPI{
    public async create(data:ChatDataCreate) {
        let sdf = HTTPTransport.post<ChatDataCreate, undefined>('https://ya-praktikum.tech/api/v2/chats',data,{headers: {'Content-Type': 'application/json;charset=UTF-8'}, notNeedJsonTransform:true});
        sdf.then(() => {
        })

        sdf.catch((smth) => {
        })

        return sdf;
    }

    public async getList(data: ChatDataGetList) {
        let sdf = HTTPTransport.get<ChatDataGetList, GetChatListResponse[]>('https://ya-praktikum.tech/api/v2/chats',data,{headers: {'Content-Type': 'application/json;charset=UTF-8'}});

        return sdf;
    }

    public async getToken(id:number){
        let token = HTTPTransport.post<BaseData, GetChatTokenResponse>(`https://ya-praktikum.tech/api/v2/chats/token/${id}`,{},{headers: {'Content-Type': 'application/json;charset=UTF-8'}})
        return token;
    }
}

export default new ChatAPI();
