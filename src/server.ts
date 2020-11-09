import http from 'http';
import socketStarter from './SocketIO';


const server = http.createServer();
export const io = require('socket.io')(server, {
    path: '/test',
    serveClient: false,
    // below are engine.IO options
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false
});

server.listen(3000, () => console.log('Server is up'))

socketStarter(io);