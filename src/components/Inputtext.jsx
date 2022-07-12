import React,{useState} from 'react'
import { Form,Button } from 'react-bootstrap'


const Inputtext = ({addOnClick}) => {
  const [value,setValue]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    //空白を消して文字数が０ならalert処理
     if (value.trim() === '') return alert('文字を入力してください');
    addOnClick(value);
    setValue("")
  }
  return (
    <>
    {/* react-bootstrapにonSubmitはないから<form>で囲んで代用 */}
    <form onSubmit={handleSubmit}>
    <Form.Group >
      <Form.Label>todoリスト</Form.Label>
  {/*フォームの長さを変える size="sm" */}
      <Form.Control size="sm"type="text"placeholder='やることを入力して'value= {value} onChange={(e)=>{
        setValue(e.target.value);
      }}/>

      <Button className="btn btn-primary"variant="primary"type="submit">追加</Button>{' '}
    </Form.Group>
    </form>
 
    </>
  )
}

export default Inputtext
