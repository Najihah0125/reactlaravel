import React, { useEffect } from "react";
import ApexChart from "../apexcharttt";
import { VectorMap } from "@react-jvectormap/core";
import worldMill from "@react-jvectormap/world/dist/worldMill.json";
import img_3 from '../assets/images/product/img-3.png';
import img_5 from '../assets/images/product/img-5.png';
import img_1 from '../assets/images/product/img-1.png';
import img_7 from '../assets/images/product/img-7.png';
import img_8 from '../assets/images/product/img-8.png';
import img_10 from '../assets/images/product/img-10.png';
import img_11 from '../assets/images/product/img-11.png';
import img_12 from '../assets/images/product/img-12.png';
import avatar_7 from '../assets/images/users/avatar-7.jpg';

export default function Index() {
  return (
    <div className="main-content">
      <div className="page-content">
        {/* <!-- start page title --> */}
        <div className="page-title-box">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="page-title">
                  <h4>Dashboard</h4>
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <a href="">Morvin</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="float-end d-none d-sm-block">
                  <a href="" className="btn btn-success">
                    Add Widget
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end page title -->     */}

        <div className="container-fluid">
          <div className="page-content-wrapper">
            <div className="row">
              <div className="col-xl-8">
                <div className="card">
                  <div className="card-body">
                    <h4 className="header-title mb-4 float-sm-start">
                      Quick Summary
                    </h4>

                    <div className="float-sm-end">
                      <ul className="nav nav-pills">
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Day
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Week
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Month
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active" href="#">
                            Year
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="clearfix"></div>

                    <div className="row align-items-center">
                      <div className="col-xl-9">
                        <div style={{ position: "relative" }}>
                          <div
                            id="stacked-column-chart"
                            className="apex-charts"
                            dir="ltr"
                          >
                            <ApexChart chartType="stackedColumn" />
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-3">
                        <div className="dash-info-widget mt-4 mt-lg-0 py-4 px-3 rounded">
                          <div className="media dash-main-border pb-2 mt-2">
                            <div className="avatar-sm mb-3 mt-2">
                              <span className="avatar-title rounded-circle bg-white shadow">
                                <i className="mdi mdi-currency-inr text-primary font-size-18"></i>
                              </span>
                            </div>
                            <div className="media-body ps-3">
                              <h4 className="font-size-20">$2354</h4>
                              <p className="text-muted">
                                Earning{" "}
                                <a href="#" className="text-primary">
                                  Withdraw{" "}
                                  <i className="mdi mdi-arrow-right"></i>
                                </a>
                              </p>
                            </div>
                          </div>

                          <div className="media mt-4 dash-main-border pb-2">
                            <div className="avatar-sm mb-3 mt-2">
                              <span className="avatar-title rounded-circle bg-white shadow">
                                <i className="mdi mdi-credit-card-outline text-primary font-size-18"></i>
                              </span>
                            </div>
                            <div className="media-body ps-3">
                              <h4 className="font-size-20">$1598</h4>
                              <p className="text-muted">
                                To Paid{" "}
                                <a href="#" className="text-primary">
                                  Pay <i className="mdi mdi-arrow-right"></i>
                                </a>
                              </p>
                            </div>
                          </div>

                          <div className="media mt-4">
                            <div className="avatar-sm mb-2 mt-2">
                              <span className="avatar-title rounded-circle bg-white shadow">
                                <i className="mdi mdi-eye-outline text-primary font-size-18"></i>
                              </span>
                            </div>
                            <div className="media-body ps-3">
                              <h4 className="font-size-20">1230</h4>
                              <p className="text-muted mb-0">
                                To Online{" "}
                                <a href="#" className="text-primary">
                                  View <i className="mdi mdi-arrow-right"></i>
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4">
                <div className="row">
                  <div className="col-xl-6 col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="text-center">
                          <p className="font-size-16">Orders</p>
                          <div className="mini-stat-icon mx-auto mb-4 mt-3">
                            <span className="avatar-title rounded-circle bg-soft-primary">
                              <i className="mdi mdi-cart-outline text-primary font-size-20"></i>
                            </span>
                          </div>
                          <h5 className="font-size-22">58</h5>

                          <p className="text-muted">70% Target</p>

                          <div
                            className="progress mt-3"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "70%" }}
                              aria-valuenow="70"
                              aria-valuemin="0"
                              aria-valuemax="70"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="text-center">
                          <p className="font-size-16">Users</p>
                          <div className="mini-stat-icon mx-auto mb-4 mt-3">
                            <span className="avatar-title rounded-circle bg-soft-success">
                              <i className="mdi mdi-account-outline text-success font-size-20"></i>
                            </span>
                          </div>
                          <h5 className="font-size-22">136</h5>

                          <p className="text-muted">80% Target</p>

                          <div
                            className="progress mt-3"
                            style={{ height: "4px" }}
                          >
                            <div
                              className="progress-bar progress-bar bg-success"
                              role="progressbar"
                              style={{ width: "80%" }}
                              aria-valuenow="80"
                              aria-valuemin="0"
                              aria-valuemax="80"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <h4 className="header-title mb-4">Revenue Stastics</h4>

                    <div className="media">
                      <h4>$14,235 </h4>

                      <div className="media-body ps-3">
                        <div className="dropdown">
                          <button
                            className="btn btn-light btn-sm dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Today<i className="mdi mdi-chevron-down ms-1"></i>
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <a className="dropdown-item" href="#">
                              Yesterday
                            </a>
                            <a className="dropdown-item" href="#">
                              Last Week
                            </a>
                            <a className="dropdown-item" href="#">
                              last Month
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div>
                        <ApexChart chartType="statistics" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-4">
                <div className="card">
                  <div className="card-body">
                    <h4 className="header-title mb-4">Product Traking</h4>

                    <ul className="list-unstyled activity-wid mb-0">
                      <li className="activity-list activity-border">
                        <div className="activity-icon avatar-sm">
                          <img
                            src={avatar_7}
                            className="avatar-sm rounded-circle"
                            alt=""
                          />
                        </div>
                        <div className="media">
                          <div className="me-3">
                            <h5 className="font-size-15 mb-1">
                              Your Manager Posted
                            </h5>
                            <p className="text-muted font-size-14 mb-0">
                              James Raphael
                            </p>
                          </div>

                          <div className="media-body">
                            <div className="text-end d-none d-md-block">
                              <p className="text-muted font-size-13 mt-2 pt-1 mb-0">
                                <i className="mdi mdi-timer-outline font-size-15 text-primary"></i>{" "}
                                3 days
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="activity-list activity-border">
                        <div className="activity-icon avatar-sm">
                          <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                            <i className="ti-shopping-cart font-size-16"></i>
                          </span>
                        </div>
                        <div className="media">
                          <div className="me-3">
                            <h5 className="font-size-15 mb-1">
                              You have 5 pending order.
                            </h5>
                            <p className="text-muted font-size-14 mb-0">
                              America
                            </p>
                          </div>

                          <div className="media-body">
                            <div className="text-end d-none d-md-block">
                              <p className="text-muted font-size-13 mt-2 pt-1 mb-0">
                                <i className="mdi mdi-timer-outline font-size-15 text-primary"></i>{" "}
                                1 days
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="activity-list activity-border">
                        <div className="activity-icon avatar-sm">
                          <span className="avatar-title bg-soft-success text-success rounded-circle">
                            <i className="ti-user font-size-16"></i>
                          </span>
                        </div>
                        <div className="media">
                          <div className="me-3">
                            <h5 className="font-size-15 mb-1">
                              New Order Received
                            </h5>
                            <p className="text-muted font-size-14 mb-0">
                              Thank You
                            </p>
                          </div>

                          <div className="media-body">
                            <div className="text-end d-none d-md-block">
                              <p className="text-muted font-size-13 mt-2 pt-1 mb-0">
                                <i className="mdi mdi-timer-outline font-size-15 text-primary"></i>{" "}
                                Today
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="activity-list activity-border">
                        <div className="activity-icon avatar-sm">
                          <img
                            src={avatar_7}
                            className="avatar-sm rounded-circle"
                            alt=""
                          />
                        </div>
                        <div className="media">
                          <div className="me-3">
                            <h5 className="font-size-15 mb-1">
                              Your Manager Posted
                            </h5>
                            <p className="text-muted font-size-14 mb-0">
                              James Raphael
                            </p>
                          </div>

                          <div className="media-body">
                            <div className="text-end d-none d-md-block">
                              <p className="text-muted font-size-13 mt-2 pt-1 mb-0">
                                <i className="mdi mdi-timer-outline font-size-15 text-primary"></i>{" "}
                                3 days
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="activity-list activity-border">
                        <div className="activity-icon avatar-sm">
                          <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                            <i className="ti-shopping-cart font-size-16"></i>
                          </span>
                        </div>
                        <div className="media">
                          <div className="me-3">
                            <h5 className="font-size-15 mb-1">
                              You have 1 pending order.
                            </h5>
                            <p className="text-muted font-size-14 mb-0">
                              Dubai
                            </p>
                          </div>

                          <div className="media-body">
                            <div className="text-end d-none d-md-block">
                              <p className="text-muted font-size-13 mt-2 pt-1 mb-0">
                                <i className="mdi mdi-timer-outline font-size-15 text-primary"></i>{" "}
                                1 days
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="activity-list">
                        <div className="activity-icon avatar-sm">
                          <span className="avatar-title bg-soft-success text-success rounded-circle">
                            <i className="ti-user font-size-16"></i>
                          </span>
                        </div>
                        <div className="media">
                          <div className="me-3">
                            <h5 className="font-size-15 mb-1">
                              New Order Received
                            </h5>
                            <p className="text-muted font-size-14 mb-0">
                              Thank You
                            </p>
                          </div>

                          <div className="media-body">
                            <div className="text-end d-none d-md-block">
                              <p className="text-muted font-size-13 mt-2 pt-1 mb-0">
                                <i className="mdi mdi-timer-outline font-size-15 text-primary"></i>{" "}
                                Today
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-4">
                <div className="card">
                  <div className="card-body">
                    <h4 className="header-title mb-4">Earning Goal</h4>

                    <div className="mt-2 text-center">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mt-4 mt-sm-0">
                            <div
                              id="list-chart-1"
                              className="apex-charts"
                              dir="ltr"
                            ></div>
                            <ApexChart chartType="listChart1" />

                            <p className="text-muted mb-2 mt-2 pt-1">
                              Total Earning:
                            </p>
                            <h5 className="font-size-18 mb-1">USD 13,545.65</h5>
                          </div>
                        </div>

                        <div className="col-md-6 dash-goal">
                          <div className="mt-4 mt-sm-0">
                            <div
                              id="list-chart-2"
                              className="apex-charts"
                              dir="ltr"
                            ></div>
                            <ApexChart chartType="listChart2" />

                            <p className="text-muted mb-2 mt-2 pt-1">
                              Earning Goal:
                            </p>
                            <h5 className="font-size-18 mb-1">USD 84,265.45</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <h4 className="header-title mb-4">Best Selling Product</h4>

                    <div
                      id="carouselExampleIndicators"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="row align-items-center mb-5">
                            <div className="col-md-4">
                              <img
                                src={img_3}
                                className="img-fluid me-3"
                                alt=""
                              />
                            </div>
                            <div className="col-md-7 offset-md-1">
                              <div className="mt-4 mt-sm-0">
                                <p className="text-muted mb-2">Headphone</p>

                                <h5 className="text-primary">Blue Headphone</h5>

                                <div className="row no-gutters mt-4">
                                  <div className="col-4">
                                    <div className="mt-1">
                                      <h4>1200</h4>
                                      <p className="text-muted mb-1">Sold</p>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <div className="mt-1">
                                      <h4>450</h4>
                                      <p className="text-muted mb-1">Stock</p>
                                    </div>
                                  </div>

                                  <div className="col-4">
                                    <div className="mt-4 pt-1">
                                      <a
                                        href=""
                                        className="btn btn-primary btn-sm"
                                      >
                                        Buy Now
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="row align-items-center mb-5">
                            <div className="col-md-4">
                              <img
                                src={img_5}
                                className="img-fluid me-3"
                                alt=""
                              />
                            </div>
                            <div className="col-md-7 offset-md-1">
                              <div className="mt-4 mt-sm-0">
                                <p className="text-muted mb-2">T-shirt</p>

                                <h5 className="text-primary">Blue T-shirt</h5>

                                <div className="row no-gutters mt-4">
                                  <div className="col-4">
                                    <div className="mt-1">
                                      <h4>800</h4>
                                      <p className="text-muted mb-1">Sold</p>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <div className="mt-1">
                                      <h4>250</h4>
                                      <p className="text-muted mb-1">Stock</p>
                                    </div>
                                  </div>

                                  <div className="col-4">
                                    <div className="mt-4 pt-1">
                                      <a
                                        href=""
                                        className="btn btn-primary btn-sm"
                                      >
                                        Buy Now
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="row align-items-center mb-5">
                            <div className="col-md-4">
                              <img
                                src={img_1}
                                className="img-fluid me-3"
                                alt=""
                              />
                            </div>
                            <div className="col-md-7 offset-md-1">
                              <div className="mt-4 mt-sm-0">
                                <p className="text-muted mb-2">Sonic</p>

                                <h5 className="text-primary">Alarm clock</h5>

                                <div className="row no-gutters mt-4">
                                  <div className="col-4">
                                    <div className="mt-1">
                                      <h4>600</h4>
                                      <p className="text-muted mb-1">Sold</p>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <div className="mt-1">
                                      <h4>150</h4>
                                      <p className="text-muted mb-1">Stock</p>
                                    </div>
                                  </div>

                                  <div className="col-4">
                                    <div className="mt-4 pt-1">
                                      <a
                                        href=""
                                        className="btn btn-primary btn-sm"
                                      >
                                        Buy Now
                                      </a>
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
              </div>

              <div className="col-xl-4">
                <div className="card">
                  <div className="card-body">
                    <h4 className="header-title mb-4">Sales by State</h4>

                    <div id="world-map-markers" style={{ height: "230px" }}>
                      <VectorMap
                        map={worldMill}
                        normalizeFunction="polynomial"
                        hoverOpacity={0.7}
                        hoverColor="rgba(255, 255, 255, 0.1)"
                        regionStyle={{ initial: { fill: "#dde3ec" } }}
                        markerStyle={{
                          initial: {
                            r: 9,
                            fill: "#525CE9",
                            "fill-opacity": 0.9,
                            stroke: "#fff",
                            "stroke-width": 7,
                            "stroke-opacity": 0.4,
                          },
                          hover: {
                            stroke: "#fff",
                            "fill-opacity": 1,
                            "stroke-width": 1.5,
                          },
                        }}
                        backgroundColor="transparent"
                        markers={[
                          { latLng: [41.9, 12.45], name: "USA" },
                          { latLng: [12.05, -61.75], name: "Russia" },
                          { latLng: [1.3, 103.8], name: "Australia" },
                        ]}
                      />
                    </div>

                    <div className="px-4 py-3 mt-4">
                      <p className="mb-1">
                        USA <span className="float-right">75%</span>
                      </p>
                      <div className="progress mt-2" style={{ height: "6px" }}>
                        <div
                          className="progress-bar progress-bar-striped bg-primary"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="75"
                        ></div>
                      </div>

                      <p className="mt-3 mb-1">
                        Russia <span className="float-right">55%</span>
                      </p>
                      <div className="progress mt-2" style={{ height: "6px" }}>
                        <div
                          className="progress-bar progress-bar-striped bg-primary"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow="55"
                          aria-valuemin="0"
                          aria-valuemax="55"
                        ></div>
                      </div>

                      <p className="mt-3 mb-1">
                        Australia <span className="float-right">85%</span>
                      </p>
                      <div className="progress mt-2" style={{ height: "6px" }}>
                        <div
                          className="progress-bar progress-bar-striped bg-primary"
                          role="progressbar"
                          style={{ width: "85%" }}
                          aria-valuenow="85"
                          aria-valuemin="0"
                          aria-valuemax="85"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="header-title mb-4">Sales By Social Source</h4>

                  <ul className="inbox-wid list-unstyled mb-0">
                    <li className="inbox-list-item">
                      <a href="#">
                        <div className="media">
                          <div className="me-3 align-self-center">
                            <div className="avatar-sm rounded bg-primary align-self-center">
                              <span className="avatar-title">
                                <i className="ti-facebook text-white font-size-18"></i>
                              </span>
                            </div>
                          </div>
                          <div className="media-body overflow-hidden mt-1">
                            <h5 className="font-size-15 mb-1">Facebook Ads</h5>
                            <p className="text-muted mb-0">
                              3.2k Sale - 4.2k Like
                            </p>
                          </div>
                          <p className="ms-2 pt-3">
                            <i className="mdi mdi-arrow-top-right text-success me-1"></i>
                            50%
                          </p>
                        </div>
                      </a>
                    </li>
                    <li className="inbox-list-item">
                      <a href="#">
                        <div className="media">
                          <div className="me-3 align-self-center">
                            <div className="avatar-sm rounded bg-info align-self-center">
                              <span className="avatar-title">
                                <i className="ti-twitter-alt text-white font-size-18"></i>
                              </span>
                            </div>
                          </div>
                          <div className="media-body overflow-hidden mt-1">
                            <h5 className="font-size-15 mb-1">Twitter Ads</h5>
                            <p className="text-muted mb-0">
                              3.1k Sale - 3.7k Like
                            </p>
                          </div>
                          <p className="ms-2 pt-3">
                            <i className="mdi mdi-arrow-top-right text-success me-1"></i>
                            45%
                          </p>
                        </div>
                      </a>
                    </li>
                    <li className="inbox-list-item">
                      <a href="#">
                        <div className="media">
                          <div className="me-3 align-self-center">
                            <div className="avatar-sm rounded bg-danger align-self-center">
                              <span className="avatar-title">
                                <i className="ti-linkedin text-white font-size-18"></i>
                              </span>
                            </div>
                          </div>
                          <div className="media-body overflow-hidden mt-1">
                            <h5 className="font-size-15 mb-1">linkedin Ads</h5>
                            <p className="text-muted mb-0">
                              4.3k Sale - 4.3k Like
                            </p>
                          </div>
                          <p className="ms-2 pt-3">
                            <i className="mdi mdi-arrow-bottom-right text-danger me-1"></i>
                            30%
                          </p>
                        </div>
                      </a>
                    </li>

                    <li className="inbox-list-item">
                      <a href="#">
                        <div className="media">
                          <div className="me-3 align-self-center">
                            <div className="avatar-sm rounded bg-danger align-self-center">
                              <span className="avatar-title">
                                <i className="ti-youtube text-white font-size-18"></i>
                              </span>
                            </div>
                          </div>
                          <div className="media-body overflow-hidden mt-1">
                            <h5 className="font-size-15 mb-1">Youtube Ads</h5>
                            <p className="text-muted mb-0">
                              4.2k Sale - 3.7k Like
                            </p>
                          </div>
                          <p className="ms-2 pt-3">
                            <i className="mdi mdi-arrow-top-right text-success me-1"></i>
                            35%
                          </p>
                        </div>
                      </a>
                    </li>

                    <li className="inbox-list-item">
                      <a href="#" className="pb-0">
                        <div className="media">
                          <div className="me-3 align-self-center">
                            <div className="avatar-sm rounded bg-dark align-self-center">
                              <span className="avatar-title">
                                <i className="ti-github text-white font-size-18"></i>
                              </span>
                            </div>
                          </div>
                          <div className="media-body overflow-hidden mt-1">
                            <h5 className="font-size-15 mb-1">GitHub Ads</h5>
                            <p className="text-muted mb-2">
                              4.9k Sale - 4.1k Like
                            </p>
                          </div>
                          <p className="ms-2 pt-3">
                            <i className="mdi mdi-arrow-top-right text-success me-1"></i>
                            40%
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-8">
              <div className="card">
                <div className="card-body">
                  <h4 className="header-title mb-4">Products of the Month</h4>
                  <div className="table-responsive">
                    <table className="table table-centered table-nowrap mb-0">
                      <thead className="thead-light">
                        <tr>
                          <th>ID</th>
                          <th>Product</th>

                          <th>Customer</th>
                          <th>Price</th>
                          <th>Invoice</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#2356</td>
                          <td>
                            <img
                              src={img_7}
                              width="42"
                              className="me-3"
                              alt=""
                            />
                            Green Chair
                          </td>
                          <td>Kenneth Gittens</td>
                          <td>$200.00</td>
                          <td>42</td>
                          <td>
                            <span className="badge badge-pill badge-soft-primary font-size-13">
                              Pending
                            </span>
                          </td>
                        </tr>

                        <tr>
                          <td>#2564</td>
                          <td>
                            <img
                              src={img_8}
                              width="42"
                              className="me-3"
                              alt=""
                            />
                            Office Chair
                          </td>
                          <td>Alfred Gordon</td>
                          <td>$242.00</td>
                          <td>54</td>
                          <td>
                            <span className="badge badge-pill badge-soft-success font-size-13">
                              Active
                            </span>
                          </td>
                        </tr>

                        <tr>
                          <td>#2125</td>
                          <td>
                            <img
                              src={img_10}
                              width="42"
                              className="me-3"
                              alt=""
                            />
                            Gray Chair
                          </td>
                          <td>Keena Reyes</td>
                          <td>$320.00</td>
                          <td>65</td>
                          <td>
                            <span className="badge badge-pill badge-soft-success font-size-13">
                              Active
                            </span>
                          </td>
                        </tr>

                        <tr>
                          <td>#8587</td>
                          <td>
                            <img
                              src={img_11}
                              width="42"
                              className="me-3"
                              alt=""
                            />
                            Steel Chair
                          </td>
                          <td>Timothy Zuniga</td>
                          <td>$342.00</td>
                          <td>52</td>
                          <td>
                            <span className="badge badge-pill badge-soft-primary font-size-13">
                              Pending
                            </span>
                          </td>
                        </tr>

                        <tr>
                          <td>#2354</td>
                          <td>
                            <img
                              src={img_12}
                              width="42"
                              className="me-3"
                              alt=""
                            />
                            Home Chair
                          </td>
                          <td>Joann Wiliams</td>
                          <td>$320.00</td>
                          <td>25</td>
                          <td>
                            <span className="badge badge-pill badge-soft-primary font-size-13">
                              Pending
                            </span>
                          </td>
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
  );
}
