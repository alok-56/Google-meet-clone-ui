import io from 'socket.io-client';
// const sockets = io('http://localhost:3001', { autoConnect: true, forceNew: true });
const sockets = io('https://google-meet-clone-server-khns.onrender.com');
export default sockets;
