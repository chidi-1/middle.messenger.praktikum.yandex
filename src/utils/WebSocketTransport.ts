import ChatController from "../base/chat/ChatController";
import ChatAPI, {ChatMessage, Message, MessageType} from "../base/chat/ChatAPI";
import store, {Indexed} from "./store";
import {UserDataResponseInfo} from "../base/user/UserAPI";

class WebSocketTransport {
    socket?: WebSocket;
    promise?: Promise<void>;
    chatId: number;
    private userId: number;
    private pingInterval: number = 0;

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

        this.promise.then(() => {
            this.socket!.addEventListener('close', () => {
                clearTimeout(this.pingInterval);
            })

            this.pingInterval = setInterval(() => {
                this.ping();
            }, 30000)
        })

        this.socket.addEventListener('message', event => {
            let response: {} | [] = JSON.parse(event.data);
            if (Object.prototype.toString.call(response) === '[object Array]') {
                let responseArray = response as [];
                if (responseArray.length) {
                    responseArray.reverse();
                    if (responseArray[responseArray.length-1]!['id'] == 1) {
                        store.setValue(`${this.chatId}messages`, responseArray)
                    } else {
                        store.prependArray(`${this.chatId}messages`, responseArray)
                    }
                    manager.getOld(this.chatId, responseArray[0]!['id']);
                }
            } else {
                let responseObject = response as Record<string, any>;
                if (responseObject.hasOwnProperty('type') && responseObject.type == MessageType.message) {
                    store.push(`${this.chatId}messages`, response)
                } else {
                    console.log('что-то другое')
                }
            }
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

    ping() {
        this.promise!.then(() => {
            this.socket!.send(JSON.stringify({
                type: 'ping',
            }));
        })
    }

    getOld(offset: number) {
        this.promise!.then(() => {
            this.socket!.send(JSON.stringify({
                content: offset.toString(),
                type: 'get old',
            }));
        })
    }
}

class ChatConnectionManager {
    chatList: Record<number, WebSocketTransport> = {};

    open(chatId: number) {
        let userId = (store.getState().userInfo as UserDataResponseInfo).id;
        if (!this.chatList[chatId]) {
            this.chatList[chatId] = new WebSocketTransport(userId, chatId);
        }
    }

    close(chatId: number) {
    }

    send(chatId: number, message: string) {
        if (!this.chatList[chatId]) {
            this.open(chatId);
        }
        this.chatList[chatId].send(message);
    }

    getOld(chatId: number, offset: number) {
        if (!this.chatList[chatId]) {
            this.open(chatId);
        }
        this.chatList[chatId].getOld(offset);
    }
}

const manager = new ChatConnectionManager()
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
