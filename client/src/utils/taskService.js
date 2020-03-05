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

  newTask = (title, description, user, date) => {
    return this.service
      .post(`/newTask`, { title, description, user, date })
      .then(response => response.data);
  };

  removeTask = (id) => {
    return this.service
      .delete(`/remove/${id}`)
      .then(response => response.data);
  };

  updateTask = (id, title, description, user, date) => {
    return this.service
      .patch(`/edit/${id}`, {title, description, user, date})
      .then(response => response.data);
  };
}