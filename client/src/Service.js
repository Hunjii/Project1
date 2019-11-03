import axios from 'axios';

const url = 'http://localhost:3000/api/rooms';

class Service {
  // Get Rooms
  static getRooms() {
    return new Promise(async (resolve, rejects) => {
      try {
        const res = await axios.get(url);
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
        const res = await axios.get(`http://localhost:3000/api/rooms/${_id}`);
        const datas = res.data;
        resolve(datas);
        console.log(datas);
      } catch (err) {
        rejects(err);
      }
    });
  }
}

export default Service;
