import React,{useState} from 'react'
import {Container,TextField,Button,Box,Select, MenuItem} from '@material-ui/core';
import storedTodoList from '../../stores/todoList'
import Socket from '../socket';
import { observable} from 'mobx'



const AddItem = () => {
     
    const [inputData, setInputData] = useState({
        title : '',
        context : ''
    });
    const [category, setCategory] = React.useState('');

    const handleChangeTextField = e => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    };
    const handleChangeSelect = (event) =>{
        const selectedValue = event.target.value;
        setCategory(selectedValue);        
    }

    const handleClickAdd = () => {
        
        const titleValue = (category ? category : inputData.title) + '/' + new Date();

        if (inputData.context) {
            const inputItem = {
                idx: ++storedTodoList.tmpCount,// DB idx 사용할거라 .. 사실상 필요 없음 
                writer: storedTodoList.userName,
                title: titleValue,
                context: inputData.context,
                done: false
            };
            storedTodoList.addItem(inputItem);
            setInputData({ ...inputData, title:'', context: '' });
            //setMenualTitle( '' );
        } else {
            alert('plz input the context... ');
        }
    };
    

    return (
        <Container>
            <Box component="span">
                <Select value={category} onChange={handleChangeSelect} displayEmpty style={{ marginTop: 24 , marginRight : 10}}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'Work'}>Work</MenuItem>
                    <MenuItem value={'Study'}>Study</MenuItem>
                    <MenuItem value={'Sport'}>Sport</MenuItem>
                </Select>
            </Box>
            {!category&&<Box component="span">
                <TextField
                    onChange={handleChangeTextField}
                    value={inputData.title}
                    name="title"
                    id="standard-full-width"
                    label="Title"
                    style={{ margin: 8, width: '15%' }}
                    size="medium"
                />
            </Box>}
            <Box component="span">
                <TextField
                    onChange={handleChangeTextField}
                    value={inputData.context}
                    name = "context"
                    id="standard-full-width"
                    label="Contexte ...."
                    style={{ margin: 8, width: '50%' }}
                    size="medium"
                />
            </Box>
            <Box component="span">
                <Button onClick={handleClickAdd} variant="contained" style={{ marginTop: 0 }}>
                    Add
                </Button>
            </Box>
        </Container>
    );
};
export default AddItem