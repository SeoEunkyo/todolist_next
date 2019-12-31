import React,{useEffect,useState, Component} from 'react'
import Head from 'next/head'
//import socketIOClient  from 'socket.io-client'

import {Container} from '@material-ui/core';
import AddItem from '../components/TodoList/AddItem';
import ItemList from '../components/TodoList/ItemList';
import storedTodoList from '../stores/todoList'

import io  from 'socket.io-client'



class PlayGround extends Component{
    constructor(props){
        super(props)

        this.state = {
            hello:''
        }
    }
    componentDidMount(){
        this.socket = io()
        this.socket.on('now', data => {
            console.log('data : ' + data.message);
            this.setState({
                hello : data.message
            })
        })
    }

    render(){
        return(
            <h1> {this.state.hello} </h1>
        )
    }
}



export default PlayGround

