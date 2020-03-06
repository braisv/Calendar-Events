import axios from "axios";

export default class UserService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_URL}`,
      withCredentials: true
    });
  }


  getUsers = () => {
    return this.service.get(`/users`).then(response => response.data);
  };

  getUser = id => {
    return this.service
      .get(`/user/${id}`)
      .then(response => response.data);
  };

  newUser = name => {
    return this.service
      .post(`/newUser`, { name })
      .then(response => response.data);
  };

  removeUser = (id) => {
    return this.service
      .delete(`/removeUser/${id}`)
      .then(response => response.data);
  };

  updateUser = (id, name) => {
    return this.service
      .patch(`/editUser/${id}`, {name})
      .then(response => response.data);
  };
  
}