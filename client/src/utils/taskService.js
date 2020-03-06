import axios from "axios";

export default class TaskService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_URL}`,
      withCredentials: true
    });
  }

  fetchData = () => {
    return this.service.get(`/data`).then(response => response.data);
  };

  getTasks = () => {
    return this.service.get(`/tasks`).then(response => response.data);
  };

  getTask = id => {
    return this.service
      .get(`/task/${id}`)
      .then(response => response.data);
  };

  newTask = (title, user, date) => {
    return this.service
      .post(`/newTask`, { title, user, date })
      .then(response => response.data);
  };

  removeTask = (id) => {
    return this.service
      .delete(`/removeTask/${id}`)
      .then(response => response.data);
  };

  updateTask = (id, title, user, date) => {
    return this.service
      .patch(`/editTask/${id}`, {title, user, date})
      .then(response => response.data);
  };
}