<template>
  <div class="app-main">
    <div class="app-main__inner">
      <div class="app-page-title">
        <div class="page-title-wrapper">
          <div class="page-title-heading">
            <div class="page-title-icon">
              <i class="pe-7s-drawer icon-gradient bg-happy-itmeo"> </i>
            </div>
            <div>
              for HOST
              <div class="page-title-subheading">
                Tabs are used to split content between multiple sections. Wide
                variety available.
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
            <span>Thống Kê</span>
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
            <span>Đặt Phòng</span>
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
            <span>Căn hộ của bạn</span>
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
            <span>Hồ sơ của bạn</span>
          </a>
        </li>
      </ul>
      <div class="tab-content">
        <div
          class="tab-pane tabs-animation fade show active"
          id="tab-content-0"
          role="tabpanel"
        ></div>
        <div
          class="tab-pane tabs-animation fade"
          id="tab-content-1"
          role="tabpanel"
        >
          <OderbyHost />
        </div>
        <div
          class="tab-pane tabs-animation fade"
          id="tab-content-2"
          role="tabpanel"
        >
          <div class="col-md-12">
            <div class="main-card mb-3 card">
              <div class="card-header">
                Căn hộ của bạn
                <div class="btn-actions-pane-right">
                  <div role="group" class="btn-group-sm btn-group">
                    <router-link
                      :to="{ name: 'AddProperties' }"
                      class="active btn btn-success"
                      >Thêm căn hộ</router-link
                    >
                  </div>
                </div>
              </div>
              <div class="table-responsive">
                <table
                  class="align-middle mb-0 table table-borderless table-striped table-hover"
                >
                  <tbody>
                    <tr
                      v-for="(room, index) in filterActive(rooms)"
                      v-bind:item="room"
                      v-bind:index="index"
                      v-bind:key="room._id"
                    >
                      <td>
                        <div class="widget-content p-0">
                          <div class="widget-content-wrapper">
                            <div class="widget-content-left mr-3">
                              <div class="widget-content-left">
                                <img
                                  width="150"
                                  class="rounded-0"
                                  :src="`/${room.roomImage[0].pathImg}`"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div class="widget-content-left flex2">
                              <div
                                class="widget-heading"
                                style="font-size: 20px;"
                              >
                                {{ room.name }}
                              </div>
                              <div class="widget-subheading opacity-7">
                                {{ room.address }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="text-center" style="font-size: 25px;">
                        <b
                          >{{
                            room.price
                              .toFixed(1)
                              .replace(/\d(?=(\d{3})+\.)/g, "$&,")
                              .slice(0, -2)
                          }}
                          đ </b
                        >/tháng
                      </td>
                      <td class="text-center">
                        <div class="badge badge-warning">
                          Pending
                        </div>
                      </td>
                      <td class="text-center">
                        <button
                          type="button"
                          id="PopoverCustomT-1"
                          class="btn btn-primary btn-sm"
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="d-block text-center card-footer">
                <button
                  class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"
                >
                  <i class="pe-7s-trash btn-icon-wrapper"> </i>
                </button>
                <button class="btn-wide btn btn-success">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane tabs-animation fade show"
          id="tab-content-3"
          role="tabpanel"
        >
          <div class="col-md-12">
            <div class="main-card mb-3 card">
              <Profile />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Service from "../../Service.js";

import OderbyHost from "./OderbyHost.vue";
import Profile from "../Properties/SettingProfile";
export default {
  name: "MainforHost",
  data() {
    return {
      rooms: []
    };
  },
  components: {
    OderbyHost,
    Profile
  },
  mounted() {
    this.AllRoomAvai();
  },
  methods: {
    filterActive(list) {
      const emails = sessionStorage.getItem("email");
      return list.filter(room => {
        return room.host.email == emails;
      });
    },
    async AllRoomAvai() {
      try {
        this.rooms = await Service.getRooms();
        console.log(this.rooms);
      } catch (err) {
        this.error = err.message;
      }
    }
  }
};
</script>

<style></style>
