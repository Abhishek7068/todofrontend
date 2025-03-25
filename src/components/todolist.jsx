import React, { useState } from "react";
import "./todoList.css";

const TodoList = ({tasks, onEdit, onDelete, onToggle}) => {

    const[editingdId, setEditingId] = useState(null);
    const[editedTask, setEditedTask] = useState("");
    const[editError, SetEditError] = useState(null);

    const handleEdit = (task) =>{
        if (task.completed){
            SetEditError(task._id);
            setTimeout(() => SetEditError(null), 2000);
            return;
        }
        setEditingId(task._id);
        setEditedTask(task.task);
    }

    const handleSave = (taskId) => {
        if(!editedTask.trim()) return;
        const updateTask = {
            task: editedTask,
            date: new Date().toLocaleDateString(),
            completed: false,
        };
        onEdit(taskId , updateTask)
        setEditingId(null);
    }

    console.log("Rendering tasks:", tasks);
    return (
        <div className="table-container">
            <table className="todo-table">
                <tbody>
                    {tasks.map((task) => (
                        
                       <tr key={task._id}>
                            <td>
                                <input type="checkbox" checked={task.completed} onClick={() => onToggle(task._id)} />
                            </td>
                            <td>
                                {editingdId === task._id ? (
                                    <input 
                                        type="text" 
                                        value={editedTask}
                                        onChange={(e) => setEditedTask(e.target.value)}
                                         
                                    />
                                ):(
                                    
                                    <span 
                                        onClick={() => onToggle(task._id)} 
                                        className={task.completed ? "completed" : "" }>{task.task}
                                    </span>
                                                                        
                                    
                                )}
                                {editError === task._id && (
                                            <span className="msg">
                                                Cannot edit a completed task!
                                            </span>
                                        )}
                                
                            </td>
                            <td  onClick={() => onToggle(task._id)} className={task.completed ? "completed" : ""}>{task.date}</td>
                            <td>
                                {editingdId === task._id ? (
                                    <button onClick={() => handleSave(task._id)} className="btn">
                                        Save
                                    </button>
                                ):(
                                    <div className="edit">
                                        <button 
                                            onClick={() => handleEdit(task)} 
                                            className="btn" 
                                            // disabled={task.completed} // Disable Edit button if task is completed
                                        >
                                            Edit
                                        </button>
                                        
                                    </div>
                                )}
                                <button onClick={() => onDelete(task._id)} className="btn">
                                    Delete
                                </button>
                               
                            </td>
                        </tr>
                    
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}

export default TodoList;