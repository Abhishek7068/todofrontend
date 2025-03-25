import TodoForm from "./components/todoform";
import { addTask , fetchTasks, editTask , deleteTask, toggleCompletion} from "./api/api";
import TodoList from "./components/todolist";
import { useEffect, useState } from "react";
import "./app.css";

const App = () => {
    const[tasks, setTasks ] = useState([]);
    // checking task debug
    console.log(tasks)

    // This ensures the data wont disappear after refreshes
    useEffect(() => {
        async function loadTasks() {
            const tasksData = await fetchTasks();
            console.log("Setting tasks state:", tasksData);
            setTasks(tasksData);
        }
        loadTasks();
    },[]); 

    // handle adding task 
    async function handleAddTask(taskTask) {
        try {
            const newTask = await addTask(taskTask);
            console.log("New Task Added:", newTask);
            if (newTask && newTask._id) {
                setTasks((prevTasks) => [newTask, ...prevTasks]);
            }
        } catch (error) {
            console.error("Error adding task:", error);
        }
        
    }

    // handle editing task
    async function handleEditTask(id, updateTask) {
        try {
            const editedTask = await editTask(id, updateTask);
            console.log("Task Edited:", editedTask);
            setTasks(tasks.map(task => task._id === id ? { ...updateTask, _id: id } : task));
        } catch (error) {
            console.error("Error editing task:", error);
        }

    }

    // handles editing tsk
    async function handleDeleteTask(id) {
        const deletedTask = await deleteTask(id);
        console.log("task deleted", deletedTask);
        setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    
    }

    // handle completion toggle
    async function handleToggleComplete(id) { 
        try {
            const toggleComplete = await toggleCompletion(id);
            console.log("on toggle", toggleComplete);
            setTasks((prevTasks) =>
                prevTasks.map(task =>
                    task._id === toggleComplete._id ? { ...task, completed: toggleComplete.completed } : task
                )
            );
            
        } catch (error) {
            console.error("Error toggling task completion:", error);
        }
    }

    return (
        <div className="container">
            <div className="todo-container">
                <h1 className="header">To-Do List</h1>
                <div className="inside-container">
                    <TodoForm onAddTask={handleAddTask} />
                    <TodoList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} onToggle={handleToggleComplete} />
                </div>
            </div>
        </div>
  );
             
    
};

export default App;