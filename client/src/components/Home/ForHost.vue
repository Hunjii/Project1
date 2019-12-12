<template>
  <div
    class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header"
  >
    <div class="app-header header-shadow">
      <div class="app-header__logo">
        <div class="logo-src"></div>
      </div>
      <div class="app-header__content">
        <div class="app-header-right">
          <div class="header-btn-lg pr-0">
            <div class="widget-content p-0">
              <div class="widget-content-wrapper">
                <div class="widget-content-left">
                  <div class="btn-group">
                    <a
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      class="p-0 btn"
                    >
                      <img
                        width="42"
                        class="rounded-circle"
                        src="assets/images/avatars/1.jpg"
                        alt=""
                      />
                      <i class="fa fa-angle-down ml-2 opacity-8"></i>
                    </a>
                    <div
                      tabindex="-1"
                      role="menu"
                      aria-hidden="true"
                      class="dropdown-menu dropdown-menu-right"
                    >
                      <button type="button" tabindex="0" class="dropdown-item">
                        User Account
                      </button>
                      <button type="button" tabindex="0" class="dropdown-item">
                        Settings
                      </button>
                      <h6 tabindex="-1" class="dropdown-header">Header</h6>
                      <button type="button" tabindex="0" class="dropdown-item">
                        Actions
                      </button>
                      <div tabindex="-1" class="dropdown-divider"></div>
                      <button type="button" tabindex="0" class="dropdown-item">
                        Dividers
                      </button>
                    </div>
                  </div>
                </div>
                <div class="widget-content-left  ml-3 header-user-info">
                  <div class="widget-heading">
                    Alina Mclourd
                  </div>
                  <div class="widget-subheading">
                    VP People Manager
                  </div>
                </div>
                <div class="widget-content-right header-user-info ml-3">
                  <button
                    type="button"
                    class="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example"
                  >
                    <i class="fa text-white fa-calendar pr-1 pl-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="app-main">
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
          </div>
        </div>
        <div class="tab-content">
          <div>
            <div class="row">
              <div class="col-md-12">
                <div class="mb-4 card">
                  <div class="card-header card-header-tab-animation">
                    <ul class="nav nav-justified">
                      <li class="nav-item">
                        <a
                          data-toggle="tab"
                          href="#tab-eg115-0"
                          class="active nav-link"
                          >Thống kê</a
                        >
                      </li>
                      <li class="nav-item">
                        <a
                          data-toggle="tab"
                          href="#tab-eg115-1"
                          class="nav-link"
                          >Đặt phòng</a
                        >
                      </li>
                      <li class="nav-item">
                        <a
                          data-toggle="tab"
                          href="#tab-eg115-2"
                          class="nav-link"
                          >Chỗ ở của bạn</a
                        >
                      </li>
                      <li class="nav-item">
                        <a
                          data-toggle="tab"
                          href="#tab-eg115-3"
                          class="nav-link"
                          >Hồ sơ của bạn</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="card-body">
                    <div class="tab-content">
                      <div
                        class="tab-pane active"
                        id="tab-eg115-0"
                        role="tabpanel"
                      >
                        <div class="col-lg-12">
                          <div class="main-card mb-3 card">
                            <div class="card-body">
                              <h5 class="card-title">Table bordered</h5>
                              <table class="mb-0 table table-bordered">
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane" id="tab-eg115-1" role="tabpanel">
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
                                  <tr>
                                    <td>
                                      <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                          <div
                                            class="widget-content-left flex2"
                                          >
                                            <div class="widget-heading">
                                              John Doe
                                            </div>
                                            <div
                                              class="widget-subheading opacity-7"
                                            >
                                              +123123123
                                            </div>
                                            <div
                                              class="widget-subheading opacity-7"
                                            >
                                              Web Developer@gmail.com
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                          <div
                                            class="widget-content-left flex2"
                                          >
                                            <div class="widget-heading">
                                              John Doe
                                            </div>
                                            <div
                                              class="widget-subheading opacity-7"
                                            >
                                              +123123123
                                            </div>
                                            <div
                                              class="widget-subheading opacity-7"
                                            >
                                              Web Developer@gmail.com
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      12/12/2018
                                    </td>
                                    <td>
                                      <div class="badge badge-success">
                                        Completed
                                      </div>
                                    </td>
                                    <td><b>1,200,000 đ</b></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane" id="tab-eg115-2" role="tabpanel">
                        <div class="col-md-12">
                          <div class="main-card mb-3 card">
                            <div class="card-header">
                              Căn hộ của bạn
                              <div class="btn-actions-pane-right">
                                <div
                                  role="group"
                                  class="btn-group-sm btn-group"
                                >
                                  <button class="active btn btn-focus">
                                    Last Week
                                  </button>
                                  <button class="btn btn-focus">
                                    All Month
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div class="table-responsive">
                              <table
                                class="align-middle mb-0 table table-borderless table-striped table-hover"
                              >
                                <tbody>
                                  <tr>
                                    <td>
                                      <div class="widget-content p-0">
                                        <div class="widget-content-wrapper">
                                          <div class="widget-content-left mr-3">
                                            <div class="widget-content-left">
                                              <img
                                                width="80"
                                                class="rounded-0"
                                                src="../../admin_assets/assets/images/avatars/4.jpg"
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                          <div
                                            class="widget-content-left flex2"
                                          >
                                            <div
                                              class="widget-heading"
                                              style="font-size: 25px;"
                                            >
                                              John Doe - John Doe John Doe
                                            </div>
                                            <div
                                              class="widget-subheading opacity-7"
                                            >
                                              101 ngõ 161 , đường Nguyễn Xiển,
                                              Quận Thanh Xuân, Hà Nội
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td
                                      class="text-center"
                                      style="font-size: 25px;"
                                    >
                                      <b>1,200,000 đ </b>/tháng
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
                      <div class="tab-pane" id="tab-eg115-3" role="tabpanel">
                        <p>
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s, when an unknown printer
                          took a galley of type and scrambled it to make a type
                          specimen book. It has survived not only five
                          centuries, but also the leap into electronic
                          typesetting, remaining essentially unchanged.
                        </p>
                      </div>
                    </div>
                  </div>
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
import "../../admin_assets/assets/scripts/main";
export default {
  name: "ForHost"
};
</script>

<style>
@import "../../admin_assets/main.css";
</style>
