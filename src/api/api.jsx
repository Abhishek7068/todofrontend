import axios from "axios";

const API_URL = "https://todolist-api-vu3j.onrender.com/todos";

export async function fetchTasks() {
    const response = await axios.get(API_URL);
    console.log("Fetched Tasks:", response.data);
    return response.data.sort((a, b) => new Date(b.date) - new Date(a.date));

}


export async function addTask(task) {
    const response = await axios.post(API_URL, {task, date: new Date().toLocaleDateString(), completed: false})
    console.log("API Response from addTask:", response.data);
    return response.data
}

export async function editTask(id, updateTask) {
    const update = await axios.put(`${API_URL}/${id}`, updateTask)
    console.log("API Response from editedTask:", update.data);
    return update.data

    
}

export async function deleteTask(id) {

    if (!id) {
        console.error("Invalid ID provided for deletion");
        return;
    }
    const deleting = await axios.delete(`${API_URL}/${id}`);
    console.log("API Response from deleteTask:", deleting.data);
    return deleting.data;
    
}

export async function toggleCompletion(id) {
     const toggle = await axios.put(`${API_URL}/${id}/toggle`);
     console.log("API Response from toggle:", toggle.data);
    return toggle.data

  }
  