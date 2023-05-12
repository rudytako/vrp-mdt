import udp from 'dgram';

class UdpService{

    private socket: udp.Socket;

    constructor(){
        this.socket = udp.createSocket('udp4');

        this.onConnection((message, remote) => {
            this.socket.send('Hello MDT! (From server)', 0, message.length, remote.port, remote.address, (err, bytes) => {
                if (err) throw err;
                console.log('UDP message sent to ' + remote.address +':'+ remote.port);
            });
        });
    }

    public start(){
        this.socket.bind(4000);
        this.socket.on('listening', () => {
            console.log('UDP Server listening on port 4000');
        });
        this.socket.on('message', (message, remote) => {
            console.log(remote.address + ':' + remote.port +' - ' + message);
        });
    }

    public onConnection(callback: (message: Buffer, remote: udp.RemoteInfo) => void){
        this.socket.on('message', callback);
    }
}

export default UdpService;