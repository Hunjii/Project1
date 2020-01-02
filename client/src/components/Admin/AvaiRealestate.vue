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
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-xl-4">
          <div class="card mb-3 widget-content bg-midnight-bloom">
            <div class="widget-content-wrapper text-white">
              <div class="widget-content-left">
                <div class="widget-heading">Tổng căn hộ</div>
                <div class="widget-subheading">Total Appartments</div>
              </div>
              <div class="widget-content-right">
                <div class="widget-numbers text-white">
                  <span>{{ filterActive(rooms).length }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4">
          <div class="card mb-3 widget-content bg-arielle-smile">
            <div class="widget-content-wrapper text-white">
              <div class="widget-content-left">
                <div class="widget-heading">Tổng căn hộ đang thuê</div>
                <div class="widget-subheading">Total Appartments rented</div>
              </div>
              <div class="widget-content-right">
                <div class="widget-numbers text-white">
                  <span>{{ rooms.filter(res => res.rent).length }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4">
          <div class="card mb-3 widget-content bg-grow-early">
            <div class="widget-content-wrapper text-white">
              <div class="widget-content-left">
                <div class="widget-heading">Tổng căn hộ trống</div>
                <div class="widget-subheading">Total Appartments empty</div>
              </div>
              <div class="widget-content-right">
                <div class="widget-numbers text-white">
                  <span>{{
                    rooms.filter(res => !res.rent && res.active).length
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-xl-none d-lg-block col-md-6 col-xl-4">
          <div class="card mb-3 widget-content bg-premium-dark">
            <div class="widget-content-wrapper text-white">
              <div class="widget-content-left">
                <div class="widget-heading">Products Sold</div>
                <div class="widget-subheading">Revenue streams</div>
              </div>
              <div class="widget-content-right">
                <div class="widget-numbers text-warning"><span>$14M</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="main-card mb-3 card">
            <div class="card-header">Danh sách căn hộ</div>
            <div class="table-responsive">
              <table
                class="align-middle mb-0 table table-borderless table-striped table-hover"
              >
                <thead>
                  <tr>
                    <th class="text-center">#</th>
                    <th>Thông tin</th>
                    <th class="text-center">Địa chỉ</th>
                    <th class="text-center">Giá thuê</th>
                    <th class="text-center">Trạng thái</th>
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
                                width="100"
                                class="rounded-0"
                                :src="`/${room.roomImage[0].pathImg}`"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="widget-content-left flex2">
                            <div class="widget-heading">{{ room.name }}</div>
                            <div class="widget-subheading opacity-7">
                              {{ room.category }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{{ room.address }}</td>
                    <td class="text-center">${{ room.price }}</td>
                    <td class="text-center" v-if="room.rent">
                      <div class="badge badge-warning">RENT</div>
                    </td>
                    <td class="text-center" v-else>
                      <div class="badge badge-success">EMPTY</div>
                    </td>
                    <td class="text-center">
                      <button
                        type="button"
                        id="PopoverCustomT-1"
                        class="btn btn-warning btn-sm"
                        @click="Confirmed_rent(room)"
                      >
                        RENT
                      </button>
                      -
                      <button
                        type="button"
                        id="PopoverCustomT-1"
                        class="btn btn-success btn-sm"
                        @click="Confirmed_empty(room)"
                      >
                        EMPTY
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
    </div>
  </div>
</template>

<script>
import Service from '../../Service.js';

export default {
  name: 'AvaiRealstate',
  data() {
    return {
      rooms: []
    };
  },
  mounted() {
    this.AllRoomAvai();
  },
  methods: {
    filterActive(list) {
      return list.filter(room => {
        return room.active;
      });
    },
    async AllRoomAvai() {
      try {
        this.rooms = await Service.getRooms();
        console.log(this.rooms);
      } catch (err) {
        this.error = err.message;
      }
    },
    async Confirmed_rent(room) {
      try {
        await Service.update_active_Room(room._id, 'rent', 'true').then(() => {
          this.AllRoomAvai();
        });
      } catch (error) {
        console.log(error);
      }
    },
    async Confirmed_empty(room) {
      try {
        await Service.update_active_Room(room._id, 'rent', 'false').then(() => {
          this.AllRoomAvai();
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style></style>
