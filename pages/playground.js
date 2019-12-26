import React from 'react'

import {Container} from '@material-ui/core';
import Itme from '../components/TodoList/Item'
import ItemList from '../components/TodoList/ItemList'




const itemList = [
    {writer:'freehunterc', title : "Issue..20191227", context : "please check Database server1 ... I'll be in your neighborhood doing errands this…"},
    {writer:'parkDex', title : "Issue..20191225", context : "please check Database server2 ... I'll be in your neighborhood doing errands this…"},
    {writer:'hyunsuck', title : "Issue..20191224", context : "please check Database server3 ... I'll be in your neighborhood doing errands this…"}

]


const PlayGround = () => (
    <Container>
        Play Ground
        
        <ItemList itemList={itemList}/>
    </Container>
)

export default PlayGround

