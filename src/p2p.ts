import { WebSocket } from 'ws';
import { Blockchain } from './Blockchain';
export class P2P {
    public sockets: WebSocket[];
    public blockchain: Blockchain;
    constructor(blockchain: Blockchain) {
        this.sockets = [];
        this.blockchain = blockchain;
    }
    listen(port: number) {
        const server = new WebSocket.Server({ port });
        server.on('connection', socket => this.connectSocket(socket));
    }
    connectSocket(socket: WebSocket) {
        this.sockets.push(socket);
        socket.on('message', message => {
            const data = JSON.parse(message.toString());
            // Handle sync logic here
        });
    }
}