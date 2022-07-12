import React,{useState} from 'react'
import { Form, ListGroup, Button } from 'react-bootstrap'


const Item = ({content,id,deleteOnClick}) => {
  const[isDone,setDone]=useState(false);
  
  return (
    <>
    <ListGroup>
    <ListGroup.Item style={
      {textDecoration:isDone?'line-through':'none'}
    }>{content}</ListGroup.Item>
    <Form.Check type="checkbox" label="終わったらチェック" onChange={()=>{
      setDone(!isDone);
    }}/>
    <Button className="btn
   btn-primary"variant="danger"onClick={()=>{deleteOnClick(id)}}>削除</Button>
    </ListGroup>
    </>
  )
}

export default Item
