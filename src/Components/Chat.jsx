import React, { Fragment, useEffect } from "react";
export default function Chat() {
  return (
    <Fragment>
      <div className="main-content">
        <div className="page-content">
          {/* start page title */}
          <div className="page-title-box">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <div className="page-title">
                    <h4>Chat</h4>
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href=" ">Morvin</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href=" ">Dashboard</a>
                      </li>
                      <li className="breadcrumb-item active">Chat</li>
                    </ol>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="float-end d-none d-sm-block">
                    <a href className="btn btn-success">
                      Add Widget
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end page title */}
          <div className="container-fluid">
            <div className="page-content-wrapper">
              <div className="d-lg-flex">
                <div className="chat-leftsidebar me-lg-4">
                  <div className="card">
                    <div className="p-4">
                      <div className="search-box chat-search-box pb-4">
                        <div className="position-relative">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                          />
                          <i className="mdi mdi-magnify search-icon" />
                        </div>
                      </div>
                      <div className="chat-leftsidebar-nav">
                        <ul className="nav nav-pills nav-justified">
                          <li className="nav-item">
                            <a
                              href="#chat"
                              data-bs-toggle="tab"
                              aria-expanded="true"
                              className="nav-link active"
                            >
                              <span>Chat</span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#group"
                              data-bs-toggle="tab"
                              aria-expanded="false"
                              className="nav-link"
                            >
                              <span>Group</span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#contact"
                              data-bs-toggle="tab"
                              aria-expanded="false"
                              className="nav-link"
                            >
                              <span>Contacts</span>
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content py-4">
                          <div className="tab-pane show active" id="chat">
                            <div>
                              <h5 className="font-size-16 mb-3">Online</h5>
                              <ul className="list-unstyled chat-list">
                                <li className="active">
                                  <a href="">
                                    <div className="media">
                                      <div className="align-self-center me-3">
                                        <i className="mdi mdi-circle text-success font-size-10" />
                                      </div>
                                      <div className="align-self-center me-3">
                                        <img
                                          src="assets/images/users/avatar-2.jpg"
                                          className="rounded-circle avatar-xs"
                                          
                                        />
                                      </div>
                                      <div className="media-body overflow-hidden">
                                        <h5 className="text-truncate font-size-14 mb-1">
                                          Steven Franklin
                                        </h5>
                                        <p className="text-truncate mb-0">
                                          Hey! there I'm available
                                        </p>
                                      </div>
                                      <div className="font-size-11">05 min</div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    <div className="media">
                                      <div className="align-self-center me-3">
                                        <i className="mdi mdi-circle text-success font-size-10" />
                                      </div>
                                      <div className="avatar-xs align-self-center me-3">
                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                          K
                                        </span>
                                      </div>
                                      <div className="media-body overflow-hidden">
                                        <h5 className="text-truncate font-size-14 mb-1">
                                          Keith Gonzales
                                        </h5>
                                        <p className="text-truncate mb-0">
                                          This theme is awesome!
                                        </p>
                                      </div>
                                      <div className="font-size-11">24 min</div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="tab-content pb-4">
                          <div className="tab-pane show active">
                            <div>
                              <h5 className="font-size-16 mb-3">Contact</h5>
                              <ul className="list-unstyled chat-list">
                                <li>
                                  <a href="">
                                    <div className="media">
                                      <div className="align-self-center me-3">
                                        <i className="mdi mdi-circle text-success font-size-10" />
                                      </div>
                                      <div className="align-self-center me-3">
                                        <img
                                          src="assets/images/users/avatar-3.jpg"
                                          className="rounded-circle avatar-xs"
                                          
                                        />
                                      </div>
                                      <div className="media-body overflow-hidden">
                                        <h5 className="text-truncate font-size-14 mb-1">
                                          Adam Miller
                                        </h5>
                                        <p className="text-truncate mb-0">
                                          I've finished it! See you so
                                        </p>
                                      </div>
                                      <div className="font-size-11">12 min</div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    <div className="media">
                                      <div className="align-self-center me-3">
                                        <i className="mdi mdi-circle text-warning font-size-10" />
                                      </div>
                                      <div className="align-self-center me-3">
                                        <img
                                          src="assets/images/users/avatar-4.jpg"
                                          className="rounded-circle avatar-xs"
                                          
                                        />
                                      </div>
                                      <div className="media-body overflow-hidden">
                                        <h5 className="text-truncate font-size-14 mb-1">
                                          Jose Vickery
                                        </h5>
                                        <p className="text-truncate mb-0">
                                          Nice to meet you
                                        </p>
                                      </div>
                                      <div className="font-size-11">1 hr</div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    <div className="media">
                                      <div className="align-self-center me-3">
                                        <i className="mdi mdi-circle font-size-10" />
                                      </div>
                                      <div className="avatar-xs align-self-center me-3">
                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                          M
                                        </span>
                                      </div>
                                      <div className="media-body overflow-hidden">
                                        <h5 className="text-truncate font-size-14 mb-1">
                                          Mitchel Givens
                                        </h5>
                                        <p className="text-truncate mb-0">
                                          Hey! there I'm available
                                        </p>
                                      </div>
                                      <div className="font-size-11">3 hrs</div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    <div className="media">
                                      <div className="align-self-center me-3">
                                        <i className="mdi mdi-circle text-success font-size-10" />
                                      </div>
                                      <div className="align-self-center me-3">
                                        <img
                                          src="assets/images/users/avatar-6.jpg"
                                          className="rounded-circle avatar-xs"
                                          
                                        />
                                      </div>
                                      <div className="media-body overflow-hidden">
                                        <h5 className="text-truncate font-size-14 mb-1">
                                          Stephen Hadley
                                        </h5>
                                        <p className="text-truncate mb-0">
                                          I've finished it! See you so
                                        </p>
                                      </div>
                                      <div className="font-size-11">5hrs</div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="">
                                    <div className="media">
                                      <div className="align-self-center me-3">
                                        <i className="mdi mdi-circle text-success font-size-10" />
                                      </div>
                                      <div className="avatar-xs align-self-center me-3">
                                        <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                          K
                                        </span>
                                      </div>
                                      <div className="media-body overflow-hidden">
                                        <h5 className="text-truncate font-size-14 mb-1">
                                          Keith Gonzales
                                        </h5>
                                        <p className="text-truncate mb-0">
                                          This theme is awesome!
                                        </p>
                                      </div>
                                      <div className="font-size-11">24 min</div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="tab-pane" id="group">
                            <h5 className="font-size-14 mb-3">Group</h5>
                            <ul className="list-unstyled chat-list">
                              <li>
                                <a href="">
                                  <div className="media align-items-center">
                                    <div className="avatar-xs me-3">
                                      <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                        G
                                      </span>
                                    </div>
                                    <div className="media-body">
                                      <h5 className="font-size-14 mb-0">
                                        General
                                      </h5>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="">
                                  <div className="media align-items-center">
                                    <div className="avatar-xs me-3">
                                      <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                        R
                                      </span>
                                    </div>
                                    <div className="media-body">
                                      <h5 className="font-size-14 mb-0">
                                        Reporting
                                      </h5>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="">
                                  <div className="media align-items-center">
                                    <div className="avatar-xs me-3">
                                      <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                        M
                                      </span>
                                    </div>
                                    <div className="media-body">
                                      <h5 className="font-size-14 mb-0">
                                        Meeting
                                      </h5>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="">
                                  <div className="media align-items-center">
                                    <div className="avatar-xs me-3">
                                      <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                        A
                                      </span>
                                    </div>
                                    <div className="media-body">
                                      <h5 className="font-size-14 mb-0">
                                        Project A
                                      </h5>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a href="">
                                  <div className="media align-items-center">
                                    <div className="avatar-xs me-3">
                                      <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                        B
                                      </span>
                                    </div>
                                    <div className="media-body">
                                      <h5 className="font-size-14 mb-0">
                                        Project B
                                      </h5>
                                    </div>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane" id="contact">
                            <h5 className="font-size-14 mb-3">Contact</h5>
                            <div data-simplebar style={{ maxHeight: 410 }}>
                              <div>
                                <div className="avatar-xs mb-3">
                                  <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                    A
                                  </span>
                                </div>
                                <ul className="list-unstyled chat-list">
                                  <li>
                                    <a href="">
                                      <h5 className="font-size-14 mb-0">
                                        Adam Miller
                                      </h5>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <h5 className="font-size-14 mb-0">
                                        Alfonso Fisher
                                      </h5>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="mt-4">
                                <div className="avatar-xs mb-3">
                                  <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                    B
                                  </span>
                                </div>
                                <ul className="list-unstyled chat-list">
                                  <li>
                                    <a href="">
                                      <h5 className="font-size-14 mb-0">
                                        Bonnie Harney
                                      </h5>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="mt-4">
                                <div className="avatar-xs mb-3">
                                  <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                    C
                                  </span>
                                </div>
                                <ul className="list-unstyled chat-list">
                                  <li>
                                    <a href="">
                                      <h5 className="font-size-14 mb-0">
                                        Charles Brown
                                      </h5>
                                    </a>
                                    <a href="">
                                      <h5 className="font-size-14 mb-0">
                                        Carmella Jones
                                      </h5>
                                    </a>
                                    <a href="">
                                      <h5 className="font-size-14 mb-0">
                                        Carrie Williams
                                      </h5>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="mt-4">
                                <div className="avatar-xs mb-3">
                                  <span className="avatar-title rounded-circle bg-soft-primary text-primary">
                                    D
                                  </span>
                                </div>
                                <ul className="list-unstyled chat-list">
                                  <li>
                                    <a href="">
                                      <h5 className="font-size-14 mb-0">
                                        Dolores Minter
                                      </h5>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-100 user-chat">
                  <div className="card">
                    <div className="p-4 border-bottom ">
                      <div className="row">
                        <div className="col-md-4 col-9">
                          <h5 className="font-size-15 mb-1 text-truncate">
                            Steven Franklin
                          </h5>
                          <p className="text-muted mb-0 text-truncate">
                            <i className="mdi mdi-circle text-success align-middle me-1" />{" "}
                            Active now
                          </p>
                        </div>
                        <div className="col-md-8 col-3">
                          <ul className="list-inline user-chat-nav text-end mb-0">
                            <li className="list-inline-item d-none d-sm-inline-block">
                              <div className="dropdown">
                                <button
                                  className="btn nav-btn dropdown-toggle"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="mdi mdi-magnify font-size-18" />
                                </button>
                                <div className="dropdown-menu dropdown-menu-end dropdown-menu-md">
                                  <form className="p-3">
                                    <div className="form-group m-0">
                                      <div className="input-group">
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Search ..."
                                          aria-label="Recipient's username"
                                        />
                                        <button
                                          className="btn btn-primary"
                                          type="submit"
                                        >
                                          <i className="mdi mdi-magnify" />
                                        </button>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </li>
                            <li className="list-inline-item  d-none d-sm-inline-block">
                              <div className="dropdown">
                                <button
                                  className="btn nav-btn dropdown-toggle"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="mdi mdi-cog-outline font-size-18" />
                                </button>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a className="dropdown-item" href="">
                                    View Profile
                                  </a>
                                  <a className="dropdown-item" href="">
                                    Clear chat
                                  </a>
                                  <a className="dropdown-item" href="">
                                    Muted
                                  </a>
                                  <a className="dropdown-item" href="">
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </li>
                            <li className="list-inline-item">
                              <div className="dropdown">
                                <button
                                  className="btn nav-btn dropdown-toggle"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="mdi mdi-dots-horizontal font-size-18" />
                                </button>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a className="dropdown-item" href="">
                                    Action
                                  </a>
                                  <a className="dropdown-item" href="">
                                    Another action
                                  </a>
                                  <a className="dropdown-item" href="">
                                    Something else
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="chat-conversation p-3">
                        <ul
                          className="list-unstyled"
                          data-simplebar
                          style={{ maxHeight: 600 }}
                        >
                          <li>
                            <div className="chat-day-title">
                              <span className="title">Today</span>
                            </div>
                          </li>
                          <li>
                            <div className="conversation-list">
                              <div className="media">
                                <img
                                  src="assets/images/users/avatar-2.jpg"
                                  className="rounded-circle avatar-xs"
                                  
                                />
                                <div className="media-body arrow-left ms-3">
                                  <div className="dropdown">
                                    <a
                                      className="dropdown-toggle"
                                      href=""
                                      role="button"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      <i className="bx bx-dots-vertical-rounded" />
                                    </a>
                                    <div className="dropdown-menu">
                                      <a className="dropdown-item" href="">
                                        Copy
                                      </a>
                                      <a className="dropdown-item" href="">
                                        Save
                                      </a>
                                      <a className="dropdown-item" href="">
                                        Forward
                                      </a>
                                      <a className="dropdown-item" href="">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ctext-wrap">
                                    <div className="conversation-name">
                                      Steven Franklin
                                    </div>
                                    <p>Hello!</p>
                                    <p className="chat-time mb-0">
                                      <i className="bx bx-time-five align-middle me-1" />{" "}
                                      10:00
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="right">
                            <div className="conversation-list">
                              <div className="media">
                                <div className="media-body arrow-right me-3">
                                  <div className="dropdown">
                                    <a
                                      className="dropdown-toggle"
                                      href=""
                                      role="button"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      <i className="bx bx-dots-vertical-rounded" />
                                    </a>
                                    <div className="dropdown-menu">
                                      <a className="dropdown-item" href="">
                                        Copy
                                      </a>
                                      <a className="dropdown-item" href="">
                                        Save
                                      </a>
                                      <a className="dropdown-item" href="">
                                        Forward
                                      </a>
                                      <a className="dropdown-item" href="">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ctext-wrap">
                                    <div className="conversation-name">
                                      Henry Wells
                                    </div>
                                    <p>
                                      Hi, How are you? What about our next
                                      meeting?
                                    </p>
                                    <p className="chat-time mb-0">
                                      <i className="bx bx-time-five align-middle me-1" />{" "}
                                      10:02
                                    </p>
                                  </div>
                                </div>
                                <img
                                  src="assets/images/users/avatar-3.jpg"
                                  className="rounded-circle avatar-xs"
                                  
                                />
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="conversation-list">
                              <div className="media">
                                <img
                                  src="assets/images/users/avatar-2.jpg"
                                  className="rounded-circle avatar-xs"
                                  
                                />
                                <div className="media-body arrow-left ms-3">
                                  <div className="dropdown">
                                    <a
                                      className="dropdown-toggle"
                                      href=""
                                      role="button"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      <i className="bx bx-dots-vertical-rounded" />
                                    </a>
                                    <div className="dropdown-menu">
                                      <a className="dropdown-item" href="">
                                        Copy
                                      </a>
                                      <a className="dropdown-item" href="">
                                        Save
                                      </a>
                                      <a className="dropdown-item" href="">
                                        Forward
                                      </a>
                                      <a className="dropdown-item" href="">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ctext-wrap">
                                    <div className="conversation-name">
                                      Steven Franklin
                                    </div>
                                    <p>Yeah everything is fine</p>
                                    <p className="chat-time mb-0">
                                      <i className="bx bx-time-five align-middle me-1" />{" "}
                                      10:06
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="last-chat">
                            <div className="conversation-list">
                              <div className="media">
                                <img
                                  src="assets/images/users/avatar-2.jpg"
                                  className="rounded-circle avatar-xs"
                                  
                                />
                                <div className="media-body arrow-left ms-3">
                                  <div className="dropdown">
                                    <a
                                      className="dropdown-toggle"
                                      href=""
                                      role="button"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      <i className="bx bx-dots-vertical-rounded" />
                                    </a>
                                    <div className="dropdown-menu">
                                      <a className="dropdown-item" href="">
                                        Copy
                                      </a>
                                      <a className="dropdown-item" href="">
                                        Save
                                      </a>
                                      <a className="dropdown-item" href="">
                                        Forward
                                      </a>
                                      <a className="dropdown-item" href="">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ctext-wrap">
                                    <div className="conversation-name">
                                      Steven Franklin
                                    </div>
                                    <p>&amp; Next meeting tomorrow 10.00AM</p>
                                    <p className="chat-time mb-0">
                                      <i className="bx bx-time-five align-middle me-1" />{" "}
                                      10:06
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className=" right">
                            <div className="conversation-list">
                              <div className="media">
                                <div className="media-body arrow-right me-3">
                                  <div className="dropdown">
                                    <a
                                      className="dropdown-toggle"
                                      href=""
                                      role="button"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      <i className="bx bx-dots-vertical-rounded" />
                                    </a>
                                    <div className="dropdown-menu">
                                      <a className="dropdown-item" href="">
                                        Copy
                                      </a>
                                      <a className="dropdown-item" href="">
                                        Save
                                      </a>
                                      <a className="dropdown-item" href="">
                                        Forward
                                      </a>
                                      <a className="dropdown-item" href="">
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                  <div className="ctext-wrap">
                                    <div className="conversation-name">
                                      Henry Wells
                                    </div>
                                    <p>Wow that's great</p>
                                    <p className="chat-time mb-0">
                                      <i className="bx bx-time-five align-middle me-1" />{" "}
                                      10:07
                                    </p>
                                  </div>
                                </div>
                                <img
                                  src="assets/images/users/avatar-3.jpg"
                                  className="rounded-circle avatar-xs"
                                  
                                />
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="p-3 chat-input-section">
                        <div className="row">
                          <div className="col">
                            <div className="position-relative">
                              <input
                                type="text"
                                className="form-control chat-input"
                                placeholder="Enter Message..."
                              />
                              <div className="chat-input-links">
                                <ul className="list-inline mb-0">
                                  <li className="list-inline-item">
                                    <a
                                      href=""
                                      data-bs-toggle="tooltip"
                                      data-placement="top"
                                      title="Emoji"
                                    >
                                      <i className="mdi mdi-emoticon-happy-outline" />
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a
                                      href=""
                                      data-bs-toggle="tooltip"
                                      data-placement="top"
                                      title="Images"
                                    >
                                      <i className="mdi mdi-file-image-outline" />
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a
                                      href=""
                                      data-bs-toggle="tooltip"
                                      data-placement="top"
                                      title="Add Files"
                                    >
                                      <i className="mdi mdi-file-document-outline" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <button
                              type="submit"
                              className="btn btn-primary btn-rounded chat-send w-md waves-effect waves-light"
                            >
                              <span className="d-none d-sm-inline-block me-2">
                                Send
                              </span>{" "}
                              <i className="mdi mdi-send" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end row */}
            </div>
          </div>{" "}
          {/* container-fluid */}
        </div>
        {/* End Page-content */}
      </div>
    </Fragment>
  );
}
