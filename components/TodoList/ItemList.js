import React from 'react'
import Item from '../TodoList/Item'
import {Box,List,Divider ,withStyles } from '@material-ui/core';
import storedTodoList from '../../stores/todoList'
import { observer } from 'mobx-react';


import io  from 'socket.io-client'
const socket = io('localhost:3000');

// const useStyles = makeStyles(theme => ({
//     root: {
//       width: '100%',
//       maxWidth: 1060,
//       backgroundColor: theme.palette.background.paper,
//     },
// }));

const styles = theme =>({
    root: {
      width: '100%',
      maxWidth: 1060,
      backgroundColor: theme.palette.background.paper,
    },
});


@observer
class ItemList extends React.Component {
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
    render() {
        const {classes} = this.props
        const itemList = storedTodoList.TodoList;
        
        return (
            <Box component="div">
                <List className={classes.root}>
                    {itemList.map(item => (
                        <Item key={item.idx} item={item} />
                    ))}
                </List>
            </Box>
        );
    }
}


export default withStyles(styles)(ItemList);