import React from 'react'
import Item from '../TodoList/Item'
import {Box,makeStyles,List,Divider } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 1060,
      backgroundColor: theme.palette.background.paper,
    },
}));


const ItemList = (props) => {
    const classes = useStyles();
    const itemList = props.itemList;
    return(
    <Box component="div">
        <List className={classes.root}>
            {itemList.map((item)=> <Item key={item.title} item={item}/>)}
            
        </List>
    </Box>
)}

export default ItemList;