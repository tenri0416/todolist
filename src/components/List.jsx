import React from 'react'

import Item from "./Item";
import { ListGroup } from 'react-bootstrap'


const List = ({todos,deleteOnClick}) => {
 
  return (
    <ListGroup>
      {
        todos.map((todo)=>{
          //map関数は必ずkeyが必要 
          return(
           
          <Item key={todo.id} id={todo.id} content={todo.content}deleteOnClick={deleteOnClick}/>
          )
})
      }
    </ListGroup>
  )
}

export default List
