import axios from 'axios';

const url_room = 'http://localhost:3000/api/rooms';
const url_user = 'http://localhost:3000/api/user';

class Service {
  // Get Rooms
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
