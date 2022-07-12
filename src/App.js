import {useState} from "react";
import Inputtext from "./components/Inputtext";
import uuid from "react-uuid";
import List from "./components/List";
import './App.css';


function App() {
  const [todos,setTodos]=useState([]);

  const addOnClick=(value)=>{
    setTodos([
      ...todos,
      {
        content:value,
        id:uuid()
      }
    ]);
    console.log(todos)
    
  }

  //削除ボタン
  const deleteOnClick=(id)=>{
    const newTodos=(todos.filter(todo => todo.id !== id))
    setTodos(newTodos);
    console.log(id);
  }
  
  return(
      
    <div className="col-md-3 center">
     <div className="App">
    <h1>Todoリスト</h1>
    <Inputtext addOnClick={addOnClick}deleteOnClick={deleteOnClick}/>
    <List todos={todos}deleteOnClick={deleteOnClick}/>
    </div>
  </div>

  ) 
}

export default App;
