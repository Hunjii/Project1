import axios from "axios";

const url_room = "http://localhost:3000/api/rooms";
const url_user = "http://localhost:3000/api/user";
const url_host = "http://localhost:3000/api/host";

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

  static update_active_Room(room_id) {
    return new Promise((resolve, reject) => {
      axios
        .patch(`${url_room}/${room_id}`, [
          {
            propName: "active",
            value: "true"
          }
        ])
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static SignUp_admin(email, password) {
    return axios.post(`${url_user}/signup`, {
      email,
      password
    });
  }

  static SignUp_client(signup) {
    return axios.post(`${url_host}/signup`, {
      email: signup.email,
      password: signup.password,
      name: signup.name,
      sex: signup.sex,
      birthday: signup.birthday,
      phone: signup.phone,
      address: signup.address
    });
  }

  static Login_admin(email, password) {
    return axios.post(`${url_user}/login`, {
      email,
      password
    });
  }

  static Login_client(email, password) {
    return axios.post(`${url_host}/login`, {
      email,
      password
    });
  }

  static getUsers() {
    return new Promise(async (resolve, rejects) => {
      try {
        const res = await axios.get(url_user);
        const data = res.data;
        resolve(
          data.Users.map(user => ({
            ...user
          }))
        );
      } catch (err) {
        rejects(err);
      }
    });
  }

  static UpdateUser(User_id, value) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url_user}/${User_id}`, [
          {
            propName: "active",
            value: value
          }
        ])
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

export default Service;
