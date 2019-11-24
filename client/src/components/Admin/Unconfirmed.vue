<template>
  <div class="app-main__outer">
    <div class="app-main__inner">
      <div class="app-page-title">
        <div class="page-title-wrapper">
          <div class="page-title-heading">
            <div class="page-title-icon">
              <i class="pe-7s-car icon-gradient bg-mean-fruit"> </i>
            </div>
            <div>
              Analytics Dashboard
              <div class="page-title-subheading">
                This is an example dashboard created using build-in elements and
                components.
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
      <div class="row">
        <div class="col-md-12">
          <div class="main-card mb-3 card">
            <div class="card-header">Active Users</div>
            <div class="table-responsive">
              <table
                class="align-middle mb-0 table table-borderless table-striped table-hover"
              >
                <thead>
                  <tr>
                    <th class="text-center">#</th>
                    <th>Name</th>
                    <th class="text-center">Category</th>
                    <th class="text-center">City</th>
                    <th class="text-center">Status</th>
                    <th class="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(room, index) in filterActive(rooms)"
                    v-bind:item="room"
                    v-bind:index="index"
                    v-bind:key="room._id"
                  >
                    <td class="text-center text-muted">{{ index + 1 }}</td>
                    <td>
                      <div class="widget-content p-0">
                        <div class="widget-content-wrapper">
                          <div class="widget-content-left mr-3">
                            <div class="widget-content-left">
                              <img
                                width="80"
                                class="rounded-circle"
                                :src="`/${room.roomImage[0].pathImg}`"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="widget-content-left flex2">
                            <div class="widget-heading">{{ room.name }}</div>
                            <div class="widget-subheading opacity-7">
                              {{ room.host.email }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="text-center">{{ room.category }}</td>
                    <td class="text-center">{{ room.address }}</td>
                    <td class="text-center" v-if="room.active">
                      <div class="badge badge-success">ACTIVE</div>
                    </td>
                    <td class="text-center" v-else>
                      <div class="badge badge-danger">UNCONFIRM</div>
                    </td>
                    <td class="text-center">
                      <button
                        type="button"
                        id="PopoverCustomT-1"
                        class="btn btn-primary btn-sm"
                        @click="Confirmed(room)"
                      >
                        CONFIRM
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="d-block text-center card-footer">
              <button class="btn-wide btn btn-success">Save</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-3">
          <div
            class="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card"
          >
            <div class="widget-content">
              <div class="widget-content-outer">
                <div class="widget-content-wrapper">
                  <div class="widget-content-left pr-2 fsize-1">
                    <div class="widget-numbers mt-0 fsize-3 text-danger">
                      71%
                    </div>
                  </div>
                  <div class="widget-content-right w-100">
                    <div class="progress-bar-xs progress">
                      <div
                        class="progress-bar bg-danger"
                        role="progressbar"
                        aria-valuenow="71"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 71%;"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="widget-content-left fsize-1">
                  <div class="text-muted opacity-6">Income Target</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div
            class="card-shadow-success mb-3 widget-chart widget-chart2 text-left card"
          >
            <div class="widget-content">
              <div class="widget-content-outer">
                <div class="widget-content-wrapper">
                  <div class="widget-content-left pr-2 fsize-1">
                    <div class="widget-numbers mt-0 fsize-3 text-success">
                      54%
                    </div>
                  </div>
                  <div class="widget-content-right w-100">
                    <div class="progress-bar-xs progress">
                      <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        aria-valuenow="54"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 54%;"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="widget-content-left fsize-1">
                  <div class="text-muted opacity-6">Expenses Target</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div
            class="card-shadow-warning mb-3 widget-chart widget-chart2 text-left card"
          >
            <div class="widget-content">
              <div class="widget-content-outer">
                <div class="widget-content-wrapper">
                  <div class="widget-content-left pr-2 fsize-1">
                    <div class="widget-numbers mt-0 fsize-3 text-warning">
                      32%
                    </div>
                  </div>
                  <div class="widget-content-right w-100">
                    <div class="progress-bar-xs progress">
                      <div
                        class="progress-bar bg-warning"
                        role="progressbar"
                        aria-valuenow="32"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 32%;"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="widget-content-left fsize-1">
                  <div class="text-muted opacity-6">Spendings Target</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div
            class="card-shadow-info mb-3 widget-chart widget-chart2 text-left card"
          >
            <div class="widget-content">
              <div class="widget-content-outer">
                <div class="widget-content-wrapper">
                  <div class="widget-content-left pr-2 fsize-1">
                    <div class="widget-numbers mt-0 fsize-3 text-info">89%</div>
                  </div>
                  <div class="widget-content-right w-100">
                    <div class="progress-bar-xs progress">
                      <div
                        class="progress-bar bg-info"
                        role="progressbar"
                        aria-valuenow="89"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 89%;"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="widget-content-left fsize-1">
                  <div class="text-muted opacity-6">Totals Target</div>
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
  name: "Unconfirmed",
  data() {
    return {
      rooms: []
    };
  },
  mounted() {
    this.get_unactive_room();
  },
  methods: {
    async get_unactive_room() {
      try {
        this.rooms = await Service.getRooms();
        console.log(this.rooms);
      } catch (err) {
        this.error = err.message;
      }
    },
    filterActive(list) {
      return list.filter(room => {
        return !room.active;
      });
    },

    async Confirmed(room) {
      try {
        await Service.update_active_Room(room._id).then(() => {
          this.get_unactive_room();
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style></style>
