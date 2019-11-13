import axios from "axios";

const url_room = "http://localhost:3000/api/rooms";
const url_user = "http://localhost:3000/api/user";

class Service {
  // Get Rooms
  static getSerchRooms(city, district, areamin, areamax) {
    return new Promise(async (resolve, rejects) => {
      try {
        const res = await axios.get(
          `${url_room}/search?city=${city}&district=${district}&areamin=${areamin}&areamax=${areamax}`
        );
        const data = res.data;
        resolve(
          data.Rooms.map(room => ({
            ...room
          }))
        );
      } catch (err) {
        rejects(err);
      }
    });
  }

  static getRooms() {
    return new Promise(async (resolve, rejects) => {
      try {
        const res = await axios.get(url_room);
        const data = res.data;
        resolve(
          data.Rooms.map(room => ({
            ...room
          }))
        );
      } catch (err) {
        rejects(err);
      }
    });
  }

  static getDetailRoom(_id) {
    return new Promise(async (resolve, rejects) => {
      try {
        const res = await axios.get(`${url_room}/${_id}`);
        const datas = res.data;
        resolve(datas);
        console.log(datas);
      } catch (err) {
        rejects(err);
      }
    });
  }

  static createRoom(formData, auth) {
    return new Promise((resolve, reject) => {
      axios
        .post(url_room, formData, auth)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  static SignUp(email, password) {
    return axios.post(`${url_user}/signup`, {
      email,
      password
    });
  }

  static Login(email, password) {
    return axios.post(`${url_user}/login`, {
      email,
      password
    });
  }
  // static register(data) {
  //   return new Promise((resolve, reject) => {
  //     axios
  //       .post(`${url_user}/register`, {
  //         email: data.email,
  //         password: data.password
  //       })
  //       .then(response => {
  //         resolve(response);
  //       })
  //       .catch(error => {
  //         reject(error);
  //       });
  //   });
  // }
}
export default Service;
