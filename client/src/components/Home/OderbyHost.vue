<template>
  <div class="col-lg-12">
    <div class="main-card mb-3 card">
      <div class="card-body">
        <h5 class="card-title">Đặt Phòng</h5>
        <table class="mb-0 table table-bordered">
          <thead>
            <tr>
              <th>Khách</th>
              <th>Đặt phòng và vị trí</th>
              <th>Ngày đặt</th>
              <th>Tình trạng</th>
              <th>Chi tiết</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(oder, index) in filter(this.oders, this.rooms)"
              v-bind:item="oder"
              v-bind:index="index"
              v-bind:key="oder._id"
            >
              <td>
                <div class="widget-content p-0">
                  <div class="widget-content-wrapper">
                    <div class="widget-content-left flex2">
                      <div class="widget-heading">
                        {{ oder.host.name }}
                      </div>
                      <div class="widget-subheading opacity-7">
                        +{{ oder.host.phone }}
                      </div>
                      <div class="widget-subheading opacity-7">
                        {{ oder.host.email }}
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div class="widget-content p-0">
                  <div class="widget-content-wrapper">
                    <div class="widget-content-left flex2">
                      <div class="widget-heading">
                        {{ oder.room.name }}
                      </div>
                      <div class="widget-subheading opacity-7">
                        Ngày : {{ oder.date }}
                      </div>
                      <div class="widget-subheading opacity-7">
                        {{ oder.room.address }}
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>Ngày : {{ oder.date }}</td>
              <td>
                <div v-if="oder.status == 0" class="badge badge-success">
                  Vừa thuê
                </div>
                <div v-if="oder.status == 1" class="badge badge-success">
                  Xử lý hợp đồng
                </div>
                <div v-if="oder.status == 2" class="badge badge-success">
                  Hoàn tất
                </div>
                <div v-if="oder.status == 3" class="badge badge-danger">
                  Đã hủy yêu cầu
                </div>
              </td>
              <td>
                <b
                  >{{
                    oder.room.price
                      .toFixed(1)
                      .replace(/\d(?=(\d{3})+\.)/g, "$&,")
                      .slice(0, -2)
                  }} </b
                ><u
                  ><i style="font-family: Arial, Helvetica, sans-serif;"
                    >đ</i
                  ></u
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Service from "../../Service.js";

export default {
  name: "OderbyHost",
  data() {
    return {
      oders: [],
      rooms: []
    };
  },
  mounted() {
    this.getAllOders();
  },
  methods: {
    filter(list_oders, list_rooms) {
      return list_oders.filter(oder => {
        for (let i = 0; i < list_rooms.length; i++) {
          return oder.room._id == this.rooms[i]._id;
        }
      });
    },
    async filter_rooms(list) {
      const emails = sessionStorage.getItem("email");
      return list.filter(room => {
        return room.host.email == emails;
      });
    },
    async getAllOders() {
      try {
        // this.oders = await Service.getOders();
        // console.log(this.oders);
        // var moment = require("moment");
        // this.oders.date = moment(this.oders.date).;

        await Service.getOders().then(oders => {
          this.oders = oders;
          this.oders.map(oder => {
            var moment = require("moment");
            oder.date = moment(oder.date).format("DD-MM-YYYY");
          });
          console.log(this.oders);
        });
        const emails = sessionStorage.getItem("email");
        const rooms = await Service.getRooms();
        this.rooms = rooms.filter(room => room.host.email == emails);
        console.log(this.rooms);
      } catch (err) {
        this.error = err.message;
      }
    },

    async Confirmed(oder, value) {
      try {
        await Service.update_status_oder(oder._id, value).then(() => {
          this.getAllOders();
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style></style>
