import { WebSocket } from 'ws';
export class P2P {
    public sockets: WebSocket[];
    constructor() {
        this.sockets = [];
    }
    listen(port: number) {
        const server = new WebSocket.Server({ port });
        server.on('connection', socket => this.connectSocket(socket));
    }
    connectSocket(socket: WebSocket) {
        this.sockets.push(socket);
        console.log('Socket connected');
    }
}