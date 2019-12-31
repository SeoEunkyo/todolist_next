import { observable, action } from "mobx";

class TodoList {
    @observable userName = '#guest';
    @observable tmpCount = 3;
    @observable TodoList = [
        {
            idx : 1,
            writer: 'freehunterc',
            title: 'Issue..20191227',
            context: "please check Database server1 ... I'll be in your neighborhood doing errands this…",
            done: true
        },
        {
            idx : 2,
            writer: 'parkDex',
            title: 'Issue..20191225',
            context: "please check Database server2 ... I'll be in your neighborhood doing errands this…",
            done: false
        },
        {
            idx : 3,
            writer: 'hyunsuck',
            title: 'Issue..20191224',
            context: "please check Database server3 ... I'll be in your neighborhood doing errands this…",
            done: true
        }
    ];
    @action setUserName = (name) =>{
        this.userName = name;
    }

    @action removeItem = (idx) =>{
        const foundidx = this.TodoList.findIndex(element => element.idx == idx)
        this.TodoList.splice(foundidx,1);
    }
    @action addItem = (item) =>{
        this.TodoList.unshift(item);
    }
}

export default new TodoList();