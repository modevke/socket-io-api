import socket from 'socket.io';

export default function(io: socket.Server, secure: boolean = false){

    io.use(function(socket, next){
        if (secure){
            // ENSURE TOKEN IS PASSED
            const token: any = socket.handshake.query;
            if(token && token.token) {
                tokenValidator(token).then((res) => {
                    return next();
                }).catch((err) => {
                    return next(new Error('Authentication error'));
                })
            } else{
                next(new Error('Authentication error'));
            }

        } else {
            next()
        }
    }).on('connection', function(client){

        clientConnection(client);
        client.on('disconnect', async () => {
            clientDisconnect(client)
           
        });
    })

}

function tokenValidator(token: string){
    return new Promise((resolve, reject) => {

    })
}

function clientConnection(client: any){
    console.log('Client connected...', client.id);
    client.emit('connection:sid', client.id);
}

function clientDisconnect(client: any){
    console.log('Client disconnected...', client.id);
}