class WebSocketTransport {
    socket: WebSocket;
    promise: Promise<void>;

    constructor(userId: number, chatId: number, token: string) {
        this.socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`);
        this.promise = new Promise<void>((resolve) => {
            this.socket.addEventListener('open', () => {
                resolve()
            })
        })
        this.socket.addEventListener('message', event => {
            console.log('Получены данные', event.data);
        });
    }

    send(msg: string) {
        this.promise.then(() => {
            this.socket.send(JSON.stringify({
                content: msg,
                type: 'message',
            }));
        })
    }
}

const manager = new ChatConnectionManager();
manager.open(99)
manager.close(99)
manager.send(99,"kjbhjkj")

const webSocketTransport = new WebSocketTransport(1, 1, '2')
webSocketTransport.send("kjkjk");

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
