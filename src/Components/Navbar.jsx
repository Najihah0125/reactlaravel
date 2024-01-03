import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

export default function Navbar(){

  // full screen permissions
  const handleClick = (event) => {
    event.preventDefault();
    $("body").toggleClass("fullscreen-enable");
    document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement
      ? document.cancelFullScreen
        ? document.cancelFullScreen()
        : document.mozCancelFullScreen
        ? document.mozCancelFullScreen()
        : document.webkitCancelFullScreen &&
          document.webkitCancelFullScreen()
      : document.documentElement.requestFullscreen
      ? document.documentElement.requestFullscreen()
      : document.documentElement.mozRequestFullScreen
      ? document.documentElement.mozRequestFullScreen()
      : document.documentElement.webkitRequestFullscreen &&
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
  };


  const handleClickSideBar = () => {
    handleSidebarToggle();
    closeSidebarOnOutsideClick();
  };


  // click button to hide the side bar, click again to display
  const handleSidebarToggle = () => {
    $("#vertical-menu-btn").on("click", (e) => {
      e.preventDefault();
      $("body").toggleClass("sidebar-enable");
      if (992 <= $(window).width()) {
        $("body").toggleClass("vertical-collpsed");
      } else {
        $("body").removeClass("vertical-collpsed");
      }
    });
  };

  const closeSidebarOnOutsideClick = () => {
    $("body,html").click((e) => {
      const target = $("#vertical-menu-btn");
      if (
        !target.is(e.target) &&
        target.has(e.target).length === 0 &&
        !e.target.closest("div.vertical-menu")
      ) {
        $("body").removeClass("sidebar-enable");
      }
    });
  };


  
  // click search icon, then display search bar, click 'x' to close
  useEffect(() => {
    const handleToggleSearchClick = () => {
      const target = $(".toggle-search").data("target");
      target && $(target).toggleClass("open");
    };

    // Attach the click event listener to toggle-search
    $(".toggle-search").on("click", handleToggleSearchClick);

    // Cleanup function
    return () => {
      // Remove event listener for toggle-search
      $(".toggle-search").off("click", handleToggleSearchClick);
    };
  }, []);


  // fullscreen - if full screen button clicked, display console log & enter full screen, if click esc, exit from full screen
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (
        !document.webkitIsFullScreen &&
        !document.mozFullScreen &&
        !document.msFullscreenElement
      ) {
        console.log("Full screen size");
        $("body").removeClass("fullscreen-enable");
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
  
    // Cleanup function
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
    };
  }, []);


  // display right bar after click the settings button
  useEffect(() => {
    const handleRightBarToggle = (e) => {
      $("body").toggleClass("right-bar-enabled");
    };

    // Attach the click event listener
    $(".right-bar-toggle").on("click", handleRightBarToggle);

    // Cleanup function to remove the event listener
    return () => {
      $(".right-bar-toggle").off("click", handleRightBarToggle);
    };
  });


  // close the right bar after click outside the right bar
  useEffect(() => {
    const handleBodyClick = (e) => {
      if (!($(e.target).closest(".right-bar-toggle, .right-bar").length > 0)) {
        $("body").removeClass("right-bar-enabled");
      }
    };

    // Attach the click event listener
    $(document).on("click", "body", handleBodyClick);

    // Cleanup function to remove the event listener
    return () => {
      $(document).off("click", "body", handleBodyClick);
    };
  });

  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          {/* <!-- LOGO --> */}
          <div className="navbar-brand-box">
            <Link to="/index" className="logo logo-dark">
              <span className="logo-sm">
                <img src="assets/images/logo-sm.png" alt="" height="22" />
              </span>
              <span className="logo-lg">
                <img src="assets/images/logo-dark.png" alt="" height="20" />
              </span>
            </Link>

            <Link to="/index" className="logo logo-light">
              <span className="logo-sm">
                <img src="assets/images/logo-sm.png" alt="" height="22" />
              </span>
              <span className="logo-lg">
                <img src="assets/images/logo-light.png" alt="" height="20" />
              </span>
            </Link>
          </div>

          <button
            type="button"
            className="btn btn-sm px-3 font-size-24 header-item waves-effect"
            id="vertical-menu-btn"
            onClick={handleClickSideBar}
          >
            <i className="mdi mdi-menu"></i>
          </button>

          <div className="topbar-social-icon me-3 d-none d-md-block">
            <ul className="list-inline title-tooltip m-0">
              <li className="list-inline-item">
                <Link
                  to="/email-inbox"
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title="Email"
                >
                  <i className="mdi mdi-email-outline"></i>
                </Link>
              </li>

              <li className="list-inline-item">
                <Link
                  to="/chat"
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title="Chat"
                >
                  <i className="mdi mdi-tooltip-outline"></i>
                </Link>
              </li>

              <li className="list-inline-item">
                <Link
                  to="/calendar"
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title="Calendar"
                >
                  <i className="mdi mdi-calendar"></i>
                </Link>
              </li>

              <li className="list-inline-item">
                <Link
                  to="/pages-invoice"
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title="Printer"
                >
                  <i className="mdi mdi-printer"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Search input --> */}
        <div className="search-wrap" id="search-wrap">
          <div className="search-bar">
            <input className="search-input form-control" placeholder="Search" />
            <Link
              to="#"
              className="close-search toggle-search"
              data-target="#search-wrap"
            >
              <i className="mdi mdi-close-circle"></i>
            </Link>
          </div>
        </div>

        <div className="d-flex">
          <div className="dropdown d-none d-lg-inline-block">
            <button
              type="button"
              className="btn header-item toggle-search noti-icon waves-effect"
              data-target="#search-wrap"
            >
              <i className="mdi mdi-magnify"></i>
            </button>
          </div>

          <div className="dropdown d-none d-md-block ms-2">
            <button
              type="button"
              className="btn header-item waves-effect"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="me-2"
                src="assets/images/flags/us.jpg"
                alt="Header Language"
                height="16"
              />{" "}
              English <span className="mdi mdi-chevron-down"></span>
            </button>
            <div className="dropdown-menu dropdown-menu-end">
              {/* <!-- item--> */}
              <Link
                to=""
                className="dropdown-item notify-item"
              >
                <img
                  src="assets/images/flags/germany.jpg"
                  alt="user-image"
                  className="me-1"
                  height="12"
                />
                <span className="align-middle"> German </span>
              </Link>

              {/* <!-- item--> */}
              <Link
                to=""
                className="dropdown-item notify-item"
              >
                <img
                  src="assets/images/flags/italy.jpg"
                  alt="user-image"
                  className="me-1"
                  height="12"
                />
                <span className="align-middle"> Italian </span>
              </Link>

              {/* <!-- item--> */}
              <Link
                to=""
                className="dropdown-item notify-item"
              >
                <img
                  src="assets/images/flags/french.jpg"
                  alt="user-image"
                  className="me-1"
                  height="12"
                />
                <span className="align-middle"> Italian </span>
              </Link>

              {/* <!-- item--> */}
              <Link
                to=""
                className="dropdown-item notify-item"
              >
                <img
                  src="assets/images/flags/spain.jpg"
                  alt="user-image"
                  className="me-1"
                  height="12"
                />
                <span className="align-middle"> Spanish </span>
              </Link>

              {/* <!-- item--> */}
              <Link
                to=""
                className="dropdown-item notify-item"
              >
                <img
                  src="assets/images/flags/russia.jpg"
                  alt="user"
                  className="me-1"
                  height="12"
                />
                <span className="align-middle"> Russian </span>
              </Link>
            </div>
          </div>

          <div className="dropdown d-none d-lg-inline-block ms-1">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect"
              data-toggle="fullscreen"
              onClick={handleClick}
            >
              <i className="mdi mdi-fullscreen"></i>
            </button>
          </div>

          <div className="dropdown d-inline-block">
            <button
              type="button"
              className="btn header-item noti-icon waves-effect"
              id="page-header-notifications-dropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="mdi mdi-bell-outline bx-tada"></i>
              <span className="badge bg-danger rounded-pill">3</span>
            </button>
            <div
              className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
              aria-labelledby="page-header-notifications-dropdown"
            >
              <div className="p-3">
                <div className="row align-items-center">
                  <div className="col">
                    <h6 className="m-0"> Notifications </h6>
                  </div>
                  <div className="col-auto">
                    <Link to="#!" className="small">
                      {" "}
                      View All
                    </Link>
                  </div>
                </div>
              </div>
              <div data-simplebar style={{maxHeight: '230px'}}>
                <Link to="" className="text-reset notification-item">
                  <div className="media">
                    <div className="avatar-xs me-3">
                      <span className="avatar-title bg-primary rounded-circle font-size-16">
                        <i className="mdi mdi-cart text-white"></i>
                      </span>
                    </div>
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">Your order is placed</h6>
                      <div className="font-size-13 text-muted">
                        <p className="mb-1">
                          If several languages coalesce the grammar
                        </p>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline"></i> 3 min ago
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="" className="text-reset notification-item">
                  <div className="media">
                    <img
                      src="assets/images/users/avatar-3.jpg"
                      className="me-3 rounded-circle avatar-xs"
                      alt="user-pic"
                    />
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">James Lemire</h6>
                      <div className="font-size-13 text-muted">
                        <p className="mb-1">
                          It will seem like simplified English.
                        </p>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline"></i> 1 hours ago
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="" className="text-reset notification-item">
                  <div className="media">
                    <div className="avatar-xs me-3">
                      <span className="avatar-title bg-success rounded-circle font-size-16">
                        <i className="mdi mdi-check text-white"></i>
                      </span>
                    </div>
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">Your item is shipped</h6>
                      <div className="font-size-13 text-muted">
                        <p className="mb-1">
                          If several languages coalesce the grammar
                        </p>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline"></i> 3 min ago
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
{/* notification */}
                <Link to="" className="text-reset notification-item">
                  <div className="media">
                    <img
                      src="assets/images/users/avatar-4.jpg"
                      className="me-3 rounded-circle avatar-xs"
                      alt="user-pic"
                    />
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">Salena Layfield</h6>
                      <div className="font-size-13 text-muted">
                        <p className="mb-1">
                          As a skeptical Cambridge friend of mine occidental.
                        </p>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline"></i> 1 hours ago
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="p-2 border-top">
                <Link
                  className="btn btn-sm btn-link font-size-14 w-100 text-center"
                  to=" "
                >
                  <i className="mdi mdi-arrow-right-circle me-1"></i> View
                  More..
                </Link>
              </div>
            </div>
          </div>

          <div className="dropdown d-inline-block">
            <button
              type="button"
              className="btn header-item waves-effect"
              id="page-header-user-dropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="rounded-circle header-profile-user"
                src="assets/images/users/avatar-7.jpg"
                alt="Header Avatar"
              />
              <span className="d-none d-xl-inline-block ms-1">James</span>
              <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-end">
              {/* <!-- item--> */}
              <Link className="dropdown-item" to="#">
                <i className="mdi mdi-account-circle-outline font-size-16 align-middle me-1"></i>{" "}
                Profile
              </Link>
              <Link className="dropdown-item" to="#">
                <i className="mdi mdi-wallet-outline font-size-16 align-middle me-1"></i>{" "}
                My Wallet
              </Link>
              <Link className="dropdown-item d-block" to="#">
                <span className="badge badge-success float-end">11</span>
                <i className="mdi mdi-cog-outline font-size-16 align-middle me-1"></i>{" "}
                Settings
              </Link>
              <Link className="dropdown-item" to="#">
                <i className="mdi mdi-lock-open-outline font-size-16 align-middle me-1"></i>{" "}
                Lock screen
              </Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item text-danger" to="#">
                <i className="mdi mdi-power font-size-16 align-middle me-1 text-danger"></i>{" "}
                Logout
              </Link>
            </div>
          </div>

          <div className="dropdown d-inline-block">
            <button
              type="button"
              className="btn header-item noti-icon right-bar-toggle waves-effect"
            >
              <i className="mdi mdi-cog-outline font-size-20"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};