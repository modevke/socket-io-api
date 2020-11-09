
// TODO IMPORT YOUR IO SERVER
import { io } from './server';

export default function(socket_id: string, channel: string, message: string){
    const socket = io.sockets.sockets.get(socket_id);
    if(socket){
        socket.emit(channel, message)
        return { error: false }
    } else {
        return { error: true, message: 'Socket ID is invalid' }
    }
}