import './App.css';
import { RiTaskFill} from "react-icons/ri";
import {AiOutlinePlus,AiOutlineClose} from "react-icons/ai"
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(["Get some groceries", "Pick kids from school"])
  const [input, setInput] = useState("")

  const handleSubmit = (e)=>{
   e.preventDefault();
   
  }
  return (
    <div className="App">
      <div className='container'>
      <h1> 
        <RiTaskFill/> Task list </h1>
        <form onSubmit={handleSubmit}>
          <AiOutlinePlus/>
          <input type="text" value={input}  onChange={(e)=> setInput(e.target.value)} placeholder='Enter a task'/>
        </form>
        <div>{tasks.map(task=>{ 
          return(
            <ul>
            <li>{task}</li>
            </ul>)
       
       })}
        </div>
        {

        }
      </div>
      
    </div>
  );
}

export default App;
