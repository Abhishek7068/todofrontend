import { useState } from "react";
import "./todoForm.css";

const TodoForm = ({onAddTask}) =>{

    const[newTask, setNewTask] = useState("");


    function handleSubmit(e){
        e.preventDefault();
        if(!newTask) return;
        onAddTask(newTask);
        console.log("Submitted")
        setNewTask("");
        
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <input type="text" className="inputText" placeholder="Add Task" onChange={(e) => setNewTask(e.target.value)} value={newTask}/>
                <button type="submit" className="SubmitBTN">Add</button>
            </div>
        </form>
    );
};

export default TodoForm;