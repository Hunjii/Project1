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
            <button
              type="button"
              data-toggle="tooltip"
              title="Example Tooltip"
              data-placement="bottom"
              class="btn-shadow mr-3 btn btn-dark"
            >
              <i class="fa fa-star"></i>
            </button>
            <div class="d-inline-block dropdown">
              <button
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                class="btn-shadow dropdown-toggle btn btn-info"
              >
                <span class="btn-icon-wrapper pr-2 opacity-7">
                  <i class="fa fa-business-time fa-w-20"></i>
                </span>
                Buttons
              </button>
              <div
                tabindex="-1"
                role="menu"
                aria-hidden="true"
                class="dropdown-menu dropdown-menu-right"
              >
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a href="javascript:void(0);" class="nav-link">
                      <i class="nav-link-icon lnr-inbox"></i>
                      <span>
                        Inbox
                      </span>
                      <div class="ml-auto badge badge-pill badge-secondary">
                        86
                      </div>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="javascript:void(0);" class="nav-link">
                      <i class="nav-link-icon lnr-book"></i>
                      <span>
                        Book
                      </span>
                      <div class="ml-auto badge badge-pill badge-danger">5</div>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="javascript:void(0);" class="nav-link">
                      <i class="nav-link-icon lnr-picture"></i>
                      <span>
                        Picture
                      </span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      disabled
                      href="javascript:void(0);"
                      class="nav-link disabled"
                    >
                      <i class="nav-link-icon lnr-file-empty"></i>
                      <span>
                        File Disabled
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
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
                  <h5 class="card-title">Table bordered</h5>
                  <table class="mb-0 table table-bordered">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Apartment</th>
                        <th>Customer</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>P/m</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(oder, index) in filter_stt_0(oders)"
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
                          >
                            Cancel
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
                        <th>Apartment</th>
                        <th>Customer</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>P/m</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Actions</th>
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
                        <th>Apartment</th>
                        <th>Customer</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>P/m</th>
                        <th>Status</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(oder, index) in filter_stt_2(oders)"
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
                        <th>Apartment</th>
                        <th>Customer</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>P/m</th>
                        <th>Status</th>
                        <th>Date</th>
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
import Service from "../../Service.js";

export default {
  name: "Oder",
  data() {
    return {
      oders: []
    };
  },
  mounted() {
    this.getAllOders();
  },
  methods: {
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
            var moment = require("moment");
            oder.date = moment(oder.date).format("DD-MM-YYYY");
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
