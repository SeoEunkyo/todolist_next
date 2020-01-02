import { observable, action } from "mobx";
import Socket from '../components/socket'


class TodoList {
    @observable userName = '#guest';
    @observable tmpCount = 3;
    @observable TodoList = [ ];
    @action updateTodoList = (itemList) =>{
        this.TodoList = itemList
    }

    @action setUserName = (name) =>{
        this.userName = name;
    }

    @action removeItem = (idx) =>{
        const foundidx = this.TodoList.findIndex(element => element.idx == idx)
        this.TodoList.splice(foundidx,1);
    }
    @action addItem = (item) =>{
        this.TodoList.unshift(item);
        const socket = Socket('/');
        socket.emit('add-todoitem', {
                message : item
            }
        )
    }
}

export default new TodoList();