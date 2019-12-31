import React,{useEffect,useState} from 'react'
import Head from 'next/head'

import {Container} from '@material-ui/core';
import AddItem from '../components/TodoList/AddItem';
import ItemList from '../components/TodoList/ItemList';
import storedTodoList from '../stores/todoList'

const Home = () => {
    useEffect(() => {
        const userName = prompt('Please enter your name');
        if (userName) {
            storedTodoList.setUserName(userName);
        }
    }, []);
    return (
        <Container>
            
            <h1>TodoList</h1>
            <AddItem />
            <ItemList />
        </Container>
    );
};

export default Home
