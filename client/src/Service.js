import axios from "axios";

const url_room = "http://localhost:3000/api/rooms";
const url_user = "http://localhost:3000/api/user";
const url_host = "http://localhost:3000/api/host";
const url_oder = "http://localhost:3000/api/oder";

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

  static getOders() {
    return new Promise(async (resolve, rejects) => {
      try {
        const res = await axios.get(url_oder);
        const data = res.data;
        resolve(
          data.Oders.map(oder => ({
            ...oder
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

  static update_active_Room(room_id, propName, value) {
    return new Promise((resolve, reject) => {
      axios
        .patch(`${url_room}/${room_id}`, [
          {
            propName: propName,
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

  static update_status_oder(oder_id, value) {
    return new Promise((resolve, reject) => {
      axios
        .patch(`${url_oder}/${oder_id}`, [
          {
            propName: "status",
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
        const res = await axios.get(url_host);
        const data = res.data;
        resolve(
          data.Hosts.map(host => ({
            ...host
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
        .post(`${url_host}/${User_id}`, [
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

  static UpdateHost(User_id, host) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url_host}/${User_id}`, [
          {
            propName: "name",
            value: host.Host.name
          },
          {
            propName: "email",
            value: host.Host.email
          },
          {
            propName: "address",
            value: host.Host.address
          },
          {
            propName: "phone",
            value: host.Host.phone
          },
          {
            propName: "sex",
            value: host.Host.sex
          },
          {
            propName: "birthday",
            value: host.Host.birthday
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

  static UpdateApartment(room_id, room) {
    return new Promise((resolve, reject) => {
      axios
        .patch(`${url_room}/${room_id}`, [
          {
            propName: "name",
            value: room.Room.name
          },
          {
            propName: "category",
            value: room.Room.category
          },
          {
            propName: "price",
            value: room.Room.price
          },
          {
            propName: "address",
            value: room.Room.address
          },
          {
            propName: "discription",
            value: room.Room.discription
          },
          {
            propName: "area",
            value: room.Room.area
          },
          {
            propName: "bathroom",
            value: room.Room.bathroom
          },
          {
            propName: "bedroom",
            value: room.Room.bedroom
          },
          {
            propName: "kitchen",
            value: room.Room.kitchen
          },
          {
            propName: "garage",
            value: room.Room.garage
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

  static getDetailHost(_id) {
    return new Promise(async (resolve, rejects) => {
      try {
        const res = await axios.get(`${url_host}/${_id}`);
        const data = res.data;
        resolve(data);
      } catch (err) {
        rejects(err);
      }
    });
  }

  static SendOder(host, room, date) {
    return new Promise((resolve, reject) => {
      axios
        .post(url_oder, {
          host,
          room,
          date
        })
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
