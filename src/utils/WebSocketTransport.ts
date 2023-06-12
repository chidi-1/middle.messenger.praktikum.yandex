import ChatController from "../base/chat/ChatController";
import ChatAPI from "../base/chat/ChatAPI";
import store from "./store";
import {UserDataResponseInfo} from "../base/user/UserAPI";

class WebSocketTransport {
    socket?: WebSocket;
    promise?: Promise<void>;
    chatId: number;
    private userId: number;

    constructor(userId: number, chatId: number) {
        this.chatId = chatId;
        this.userId = userId;
        ChatController.getToken(chatId).then((response) => {
            let token = response.token;
            this.connect(token);
        })
    }

    private connect(token: string) {
        this.socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${this.userId}/${this.chatId}/${token}`);
        this.promise = new Promise<void>((resolve) => {
            this.socket!.addEventListener('open', () => {
                resolve()
            })
        })
        this.socket.addEventListener('message', event => {
            console.log('Получены данные', event.data);
        });
    }

    send(msg: string) {
        this.promise!.then(() => {
            this.socket!.send(JSON.stringify({
                content: msg,
                type: 'message',
            }));
        })
    }
}

class ChatConnectionManager {
    chatList: Record<number, WebSocketTransport> = {};

    open(id: number) {
        let userId = (store.getState().userInfo as UserDataResponseInfo).id;
        if (!this.chatList[id]) {
            this.chatList[id] = new WebSocketTransport(userId, id);
        }
    }

    close(id: number) {
    }

    send(id: number, message: string) {
        if (!this.chatList[id]) {
            this.open(id);
        }
        this.chatList[id].send(message);
    }
}
const manager=new ChatConnectionManager()
export default manager;
// manager.open(99)
// manager.close(99)
// manager.send(99, "kjbhjkj")

// function send(socket, arg) {
//     socket.send(JSON.stringify({
//         content: arg,
//         type: 'message',
//     }));
//
// }
//
// const sdf = new Promise<WebSocket>((resolve, reject) => {
//     const socket = new WebSocket('wss://ya-praktikum.tech/ws/chats/<USER_ID>/<CHAT_ID>/<TOKEN_VALUE>');
//     socket.addEventListener('open', () => {
//         resolve(socket)
//     });
// })
//
// sdf.then((socket) => {
//     send(socket, 88888)
// })
// sdf.then((socket) => {
//     send(socket, 88888)
// })
// sdf.catch(() => {console.log('22')})

// const sdf = new Promise((resolve, reject) => {
//     let random = Math.random()
//     if(random < 0.5) {
//         resolve(0)
//     }
//     else{
//         reject()
//     }
// })
//
// sdf.then(() => {console.log('11')})
// sdf.catch(() => {console.log('22')})

// const fghf = new Promise((resolve, reject) => {})
//
// fghf.then(() => {console.log('33')})
// fghf.catch(() => {console.log('44')})
