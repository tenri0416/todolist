import React,{useState} from 'react'
import { Form,Button } from 'react-bootstrap'


const Inputtext = ({addOnClick}) => {
  const [value,setValue]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
     if (value.trim() === '') return alert('文字を入力してください');
    addOnClick(value);
    setValue("")
  }
  return (
    <>
<div className="row">
  <div style={{ margin: "0 auto" }}>
    <form onSubmit={handleSubmit}>
    <Form.Group >
      <Form.Label>todoリスト</Form.Label>
      <Form.Control size="sm"type="text"placeholder='やることを入力して'value= {value} onChange={(e)=>{
        setValue(e.target.value);
      }}/>
      <Button className="btn btn-primary"variant="primary"type="submit">追加</Button>{' '}
    </Form.Group>
    </form>
  </div>
</div>
 
    </>
  )
}

export default Inputtext
