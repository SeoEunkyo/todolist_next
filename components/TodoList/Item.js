import React from 'react'
import {Box,ListItem,ListItemAvatar,Avatar,ListItemText, Typography,makeStyles,Divider, IconButton , Checkbox} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import { green } from '@material-ui/core/colors';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

const useStyles = makeStyles(theme => ({
  
    inline: {
        display: 'inline',
    },
    iconMargin: {
        marginTop : 12,
    },
    checkBoxMargin: {
        marginTop : 15,
    },
    itemDone:{
        textDecoration:'line-through'
    }

}));


const Item = (props) => {
    const classes = useStyles();
    const item = props.item;
    return(
        <Box component="div">
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="http://placeimg.com/640/480/any" />
                </ListItemAvatar>
                <ListItemText
                    className={classes.itemDone}
                    primary={item.title}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                                
                            >
                                {item.writer}
                        </Typography>
                             {' — '+item.context}
                        </React.Fragment>
                    }
                />
                <Checkbox className={classes.checkBoxMargin} ></Checkbox>
                <IconButton aria-label="delete" className={classes.iconMargin}>
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </ListItem>
            
            <Divider variant="inset" component="li" />
        </Box>
    )
}

export default Item