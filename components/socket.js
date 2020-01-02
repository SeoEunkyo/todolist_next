import openSocket from 'socket.io-client'; // 소켓 클라이언트 호출
import storedTodoList from '../stores/todoList'

// socket url 정의
const socket = openSocket.connect('http://localhost:3000');

const Socket = (namespace) => {

    // 소켓 네임스페이스 설정
    socket.nsp = namespace;
    console.log('Socket namespace : ', socket.nsp);
    
    //데이터에 업데이트가 있을경우에 todolist를 업데이트 스켜준다.
    socket.on('update-todolist', data => {
        console.log(data.message);
        storedTodoList.updateTodoList(data.message);
    })
     //서버에 의해 연결이 끊어졌을때 연결 재시도
    socket.on('disconnect', (reason) => {
        if (reason === 'io server disconnect') {
            socket.connect();
        }
    })

    return socket;
}

export default Socket;