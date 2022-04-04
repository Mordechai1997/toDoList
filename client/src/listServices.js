import axios from "axios";
const apiUrl = "http://localhost:3007/api/tasks";

const myAxios=  axios.create({
    baseURL: apiUrl,
    headers: {
      "Content-type": "application/json"
    }
});
export function getTasks() {
    return myAxios.get(apiUrl);
}

export function addTask(task) {
    return myAxios.post(apiUrl, task);
}

export function updateTask(id, task) {
    return myAxios.put(apiUrl + "/" + id, task);
}

export function deleteTask(id) {
    return myAxios.delete(apiUrl + "/" + id);
}