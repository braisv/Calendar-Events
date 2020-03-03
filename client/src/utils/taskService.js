import axios from "axios";

export default class TaskService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_URL}`,
      withCredentials: true
    });
  }


  getTasks = () => {
    return this.service.get(`/tasks`).then(response => response.data);
  };

  getTask = id => {
    return this.service
      .get(`/task/${id}`)
      .then(response => response.data);
  };

  newTask = title => {
    return this.service
      .post(`/newTask`, { title })
      .then(response => response.data);
  };

  removeTask = (id) => {
    return this.service
      .delete(`/remove/${id}`)
      .then(response => response.data);
  };

  updateTask = (id, title) => {
    return this.service
      .patch(`/edit/${id}`, {title})
      .then(response => response.data);
  };
}