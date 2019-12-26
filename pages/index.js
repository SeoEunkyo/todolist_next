import React from 'react'
import Head from 'next/head'

import {Container} from '@material-ui/core';
import AddItem from '../components/TodoList/AddItem';
import ItemList from '../components/TodoList/ItemList';



const testItemList = [
  {writer:'freehunterc', title : "Issue..20191227", context : "please check Database server1 ... I'll be in your neighborhood doing errands this…"},
  {writer:'parkDex', title : "Issue..20191225", context : "please check Database server2 ... I'll be in your neighborhood doing errands this…"},
  {writer:'hyunsuck', title : "Issue..20191224", context : "please check Database server3 ... I'll be in your neighborhood doing errands this…"}

]



const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>


    <Container>
      <h1>TodoList</h1>
      <AddItem/>
      <ItemList itemList={testItemList}/>

    </Container>

      
  </div>
)

export default Home
