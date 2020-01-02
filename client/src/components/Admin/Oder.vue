<template>
  <div class="app-main__outer">
    <div class="app-main__inner">
      <div class="app-page-title">
        <div class="page-title-wrapper">
          <div class="page-title-heading">
            <div class="page-title-icon">
              <i class="pe-7s-drawer icon-gradient bg-happy-itmeo"> </i>
            </div>
            <div>
              Tabs
              <div class="page-title-subheading">
                Tabs are used to split content between multiple sections. Wide
                variety available.
              </div>
            </div>
          </div>
          <div class="page-title-actions">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text"
                  ><i class="fas fa-search"></i
                ></span>
              </div>
              <input
                placeholder="Tìm kiếm"
                type="text"
                class="form-control"
                style="width: 300px"
                v-model="filterInput"
              />
            </div>
          </div>
        </div>
      </div>
      <ul
        class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav"
      >
        <li class="nav-item">
          <a
            role="tab"
            class="nav-link active"
            id="tab-0"
            data-toggle="tab"
            href="#tab-content-0"
          >
            <span>Đơn Thuê Mới</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            role="tab"
            class="nav-link"
            id="tab-1"
            data-toggle="tab"
            href="#tab-content-1"
          >
            <span>Đang Xử Lý</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            role="tab"
            class="nav-link"
            id="tab-2"
            data-toggle="tab"
            href="#tab-content-2"
          >
            <span>Hoàn Thành</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            role="tab"
            class="nav-link"
            id="tab-3"
            data-toggle="tab"
            href="#tab-content-3"
          >
            <span>Đơn Hủy</span>
          </a>
        </li>
      </ul>
      <div class="tab-content">
        <div
          class="tab-pane tabs-animation fade show active"
          id="tab-content-0"
          role="tabpanel"
        >
          <div class="row">
            <div class="col-lg-12">
              <div class="main-card mb-3 card">
                <div class="card-body">
                  <h5 class="card-title">Danh sách yêu cầu</h5>
                  <table class="mb-0 table table-bordered">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Căn hộ</th>
                        <th>Khách hàng</th>
                        <th>Số ĐT</th>
                        <th>Email</th>
                        <th>P/m</th>
                        <th>Trạng thái</th>
                        <th>Ngày</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(oder, index) in filterBy(
                          filter_stt_0(oders),
                          filterInput
                        )"
                        v-bind:item="oder"
                        v-bind:index="index"
                        v-bind:key="oder._id"
                      >
                        <th scope="row">{{ index + 1 }}</th>
                        <td>
                          <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                              <div class="widget-content-left mr-3">
                                <div class="widget-content-left">
                                  <img
                                    width="120"
                                    class="rounded-0"
                                    :src="`/${oder.room.roomImage[0].pathImg}`"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div class="widget-content-left flex2">
                                <div class="widget-heading">
                                  {{ oder.room.name }}
                                </div>
                                <div class="widget-subheading opacity-7">
                                  {{ oder.room.category }}
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>{{ oder.host.name }}</td>
                        <td>{{ oder.host.phone }}</td>
                        <td>{{ oder.host.email }}</td>
                        <td>{{ oder.room.price }}</td>
                        <td>
                          <div class="badge badge-warning">Chờ xử lý</div>
                        </td>
                        <td>{{ oder.date }}</td>
                        <td class="text-center">
                          <button
                            class="mb-2 mr-2 btn-transition btn btn-outline-focus"
                            @click="Confirmed(oder, 1)"
                          >
                            SKIP
                          </button>
                          <button
                            class="mb-2 mr-2 btn-danger btn btn-outline-focus"
                            @click="Confirmed(oder, 3)"
                            style="color: #fff"
                          >
                            Hủy
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane tabs-animation fade"
          id="tab-content-1"
          role="tabpanel"
        >
          <div class="row">
            <div class="col-lg-12">
              <div class="main-card mb-3 card">
                <div class="card-body">
                  <h5 class="card-title">Table bordered</h5>
                  <table class="mb-0 table table-bordered">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Căn hộ</th>
                        <th>Khách hàng</th>
                        <th>Số ĐT</th>
                        <th>Email</th>
                        <th>P/m</th>
                        <th>Trạng thái</th>
                        <th>Ngày</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(oder, index) in filter_stt_1(oders)"
                        v-bind:item="oder"
                        v-bind:index="index"
                        v-bind:key="oder._id"
                      >
                        <th scope="row">{{ index + 1 }}</th>
                        <td>
                          <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                              <div class="widget-content-left mr-3">
                                <div class="widget-content-left">
                                  <img
                                    width="80"
                                    class="rounded-circle"
                                    :src="`/${oder.room.roomImage[0].pathImg}`"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div class="widget-content-left flex2">
                                <div class="widget-heading">
                                  {{ oder.room.name }}
                                </div>
                                <div class="widget-subheading opacity-7">
                                  {{ oder.room.category }}
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>{{ oder.host.name }}</td>
                        <td>{{ oder.host.phone }}</td>
                        <td>{{ oder.host.email }}</td>
                        <td>{{ oder.room.price }}</td>
                        <td>
                          <div class="badge badge-info">Xử lý hợp đồng</div>
                        </td>
                        <td>
                          {{ oder.date }}
                        </td>
                        <td class="text-center">
                          <button
                            class="mb-2 mr-2 btn-transition btn btn-outline-focus"
                            @click="Confirmed(oder, 2)"
                          >
                            SKIP
                          </button>
                          <button
                            class="mb-2 mr-2 btn-transition btn btn-outline-focus"
                            @click="Confirmed(oder, 3)"
                          >
                            CANCEL
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane tabs-animation fade"
          id="tab-content-2"
          role="tabpanel"
        >
          <div class="row">
            <div class="col-lg-12">
              <div class="main-card mb-3 card">
                <div class="card-body">
                  <h5 class="card-title">Table bordered</h5>
                  <table class="mb-0 table table-bordered">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Căn hộ</th>
                        <th>Khách hàng</th>
                        <th>Số ĐT</th>
                        <th>Email</th>
                        <th>P/m</th>
                        <th>Trạng thái</th>
                        <th>Ngày</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(oder, index) in filterBy(
                          filter_stt_2(oders),
                          filterInput
                        )"
                        v-bind:item="oder"
                        v-bind:index="index"
                        v-bind:key="oder._id"
                      >
                        <th scope="row">{{ index + 1 }}</th>
                        <td>
                          <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                              <div class="widget-content-left mr-3">
                                <div class="widget-content-left">
                                  <img
                                    width="80"
                                    class="rounded-circle"
                                    :src="`/${oder.room.roomImage[0].pathImg}`"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div class="widget-content-left flex2">
                                <div class="widget-heading">
                                  {{ oder.room.name }}
                                </div>
                                <div class="widget-subheading opacity-7">
                                  {{ oder.room.category }}
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>{{ oder.host.name }}</td>
                        <td>{{ oder.host.phone }}</td>
                        <td>{{ oder.host.email }}</td>
                        <td>{{ oder.room.price }}</td>
                        <td>
                          <div class="badge badge-success">Hoàn Thành</div>
                        </td>
                        <td>
                          {{ oder.date }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane tabs-animation fade show"
          id="tab-content-3"
          role="tabpanel"
        >
          <div class="row">
            <div class="col-lg-12">
              <div class="main-card mb-3 card">
                <div class="card-body">
                  <h5 class="card-title">Table bordered</h5>
                  <table class="mb-0 table table-bordered">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Căn hộ</th>
                        <th>Khách hàng</th>
                        <th>Số ĐT</th>
                        <th>Email</th>
                        <th>P/m</th>
                        <th>Trạng thái</th>
                        <th>Ngày</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(oder, index) in filter_stt_3(oders)"
                        v-bind:item="oder"
                        v-bind:index="index"
                        v-bind:key="oder._id"
                      >
                        <th scope="row">{{ index + 1 }}</th>
                        <td>
                          <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                              <div class="widget-content-left mr-3">
                                <div class="widget-content-left">
                                  <img
                                    width="80"
                                    class="rounded-circle"
                                    :src="`/${oder.room.roomImage[0].pathImg}`"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div class="widget-content-left flex2">
                                <div class="widget-heading">
                                  {{ oder.room.name }}
                                </div>
                                <div class="widget-subheading opacity-7">
                                  {{ oder.room.category }}
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>{{ oder.host.name }}</td>
                        <td>{{ oder.host.phone }}</td>
                        <td>{{ oder.host.email }}</td>
                        <td>{{ oder.room.price }}</td>
                        <td>
                          <div class="badge badge-danger">ĐƠN HỦY</div>
                        </td>
                        <td>{{ oder.date }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Service from '../../Service.js';

export default {
  name: 'Oder',
  data() {
    return {
      oders: [],
      filterInput: ''
    };
  },
  mounted() {
    this.getAllOders();
  },
  methods: {
    filterBy(list, value) {
      value = value.charAt(0).toUpperCase() + value.slice(1);
      return list.filter(function(oder) {
        return oder.host.name.indexOf(value) > -1;
      });
    },
    filter_stt_0(list) {
      return list.filter(oder => {
        return oder.status == 0;
      });
    },
    filter_stt_1(list) {
      return list.filter(oder => {
        return oder.status == 1;
      });
    },
    filter_stt_2(list) {
      return list.filter(oder => {
        return oder.status == 2;
      });
    },
    filter_stt_3(list) {
      return list.filter(oder => {
        return oder.status == 3;
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
            var moment = require('moment');
            oder.date = moment(oder.date).format('DD-MM-YYYY');
          });
          console.log(this.oders);
        });
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
