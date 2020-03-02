import axios from "axios";

export default class UserService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_URL}`,
      withCredentials: true
    });
  }


  getAll = () => {
    return this.service.get(`/users`).then(response => response.data);
  };

  getOne = id => {
    return this.service
      .get(`/restaurant/${id}`)
      .then(response => response.data);
  };

  newRestaurant = (
    name,
    neighborhood,
    photograph,
    location,
    image,
    cuisine_type,
    timetable,
    reviews
  ) => {
    console.log("SERVICE")
    return this.service
      .post(`/new`, {
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