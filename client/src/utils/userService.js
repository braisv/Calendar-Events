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

  removeRestaurant = (id) => {
    return this.service
      .post(`/remove/${id}`)
      .then(response => response.data);
  };

  editRestaurant = (
    id,
    name,
    neighborhood,
    photograph,
    location,
    image,
    cuisine_type,
    timetable,
    reviews
  ) => {
    return this.service
      .post(`/edit/${id}`, {
        name,
        neighborhood,
        photograph,
        location,
        image,
        cuisine_type,
        timetable,
        reviews
      })
      .then(response => response.data);
  };
}