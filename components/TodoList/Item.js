import React from 'react';
import {
    Box,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Typography,
    makeStyles,
    Divider,
    IconButton,
    Checkbox,
    ListItemSecondaryAction
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import storedTodoList from '../../stores/todoList';

const useStyles = makeStyles(theme => ({
  
    inline: {
        display: 'inline',
    },
    iconMargin: {
        marginTop : 15,
    },
    itemDone:{
        textDecoration:'line-through'
    },
    itemNotDone:{
        
    }
}));





const Item = (props) => {
    const classes = useStyles();
    const item = props.item;
    const [checked, setchecked] = React.useState(item.done);
    const toggleChecked = (idx) =>{
        //console.log('idx : ' + idx);
        setchecked(!checked);
    }
    const handleDeleteClick = (idx) => {
        //console.log('idx : ' + idx);
        storedTodoList.removeItem(idx);
    };
    


    return (
        <Box component="div">
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="http://placeimg.com/640/480/any" />
                </ListItemAvatar>
                <ListItemText
                    className={checked ? classes.itemDone : classes.itemNotDone}
                    primary={item.title}
                    secondary={
                        <React.Fragment>
                            <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                                {item.writer}
                            </Typography>
                            {' — ' + item.context}
                        </React.Fragment>
                    }
                />
                <ListItemSecondaryAction>
                    <Checkbox
                        checked={checked}
                        className={classes.iconMargin}
                        onChange={()=>toggleChecked(item.idx)}
                        value="primary"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    <IconButton edge="end" className={classes.iconMargin}  aria-label="delete" onClick={() => handleDeleteClick(item.idx)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>

            <Divider variant="inset" component="li" />
        </Box>
    );
}

export default Item