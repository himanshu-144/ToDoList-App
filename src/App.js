import React, { useState } from 'react';
import "./App.css";
const App = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
     const [editId, setEditId] =useState(0);
     const handleDelete =(id) =>{
          // filter function to delete//
          const delTodo = todos.filter((x)=>x.id !== id)
           // if id does not matches with todos id , only that todos will be array todos
          setTodos([...delTodo]);
     };
     const handleEdit = (id) =>{
      
      const editTodo = todos.find((y)=>y.id === id);
      setTodo(editTodo.todo);
      setEditId(id);  // to edit particular id
     };

     
     /* This part is for to add inotlist*/ 
     const handleSubmit = (e) =>{
      e.preventDefault();
      if(editId){
        const editTodo = todos.find((z)=>z.id===editId) // By selecting particularrly Id we can change or edit the text
        const updatedTodos = todos.map((p)=>p.id===editTodo.id 
        ? p = {id: p.id,todo} :
        {
          id:p.id, todo:p.todo
        }
        );
      setTodos([...updatedTodos]);
      setEditId(0); // no longer to edit
      setTodo(" "); // empty the input part
      return;
      }
    if (todo !== "") {
        setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
        setTodo("");
      }
    };


   return (
    <div className='App'>
       <div className='container'>
       <h1>
         ToDo List App
       </h1>
       <form className='main' onSubmit={handleSubmit}>
        
        <input type="text" value= {todo} onChange={(e)=> setTodo(e.target.value)}/>
        <button type="submit" >{editId ?"Edit": "Go"}</button>
       </form>
       <ul className='main_2'>
        {
          todos.map((k) => {
          return (
          <li className='main_3'>
          <span className='todoText' key={k.id}>{k.todo}</span>
          <button onClick={()=> handleEdit(k.id)}>Edit</button>
          <button onClick={() => handleDelete(k.id)}>Delete</button>
          </li>
          )
          })
        }
      
       
       </ul>
       </div>
    </div>
  )
}

export default App
