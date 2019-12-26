import React from 'react'
import {Container,TextField,Button,Box} from '@material-ui/core';


const AddItem = () => (
    <Container>
        <Box component="span" >
            <TextField id="standard-full-width" 
            label="Type here"
            style={{ margin: 8,
                width: '50%' }}
            size = "medium"
            />
        </Box>
        <Box component="span" >
            <Button variant="contained"
             style={{ marginTop: 20}}>
                 Add
            </Button>
        </Box>
    </Container>
)
export default AddItem