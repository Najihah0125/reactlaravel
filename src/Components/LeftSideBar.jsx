import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import {metisMenu} from "metismenu";
import avatar_7 from '../assets/images/users/avatar-7.jpg';

export default function LeftSideBar() {

  

  useEffect(() => {
    const initializeSidebar = () => {
      $("#side-menu").metisMenu();

      $("#vertical-menu-btn").on("click", function (e) {
        e.preventDefault();
        $("body").toggleClass("sidebar-enable");
        if (992 <= $(window).width()) {
          $("body").removeClass("vertical-collpsed");
        }
      });

      $("body,html").click(function (e) {
        const verticalMenuBtn = $("#vertical-menu-btn");
        if (
          !verticalMenuBtn.is(e.target) &&
          verticalMenuBtn.has(e.target).length === 0 &&
          !e.target.closest("div.vertical-menu")
        ) {
          $("body").removeClass("sidebar-enable");
        }
      });

      // Return cleanup function
      return () => {
        $("#vertical-menu-btn").off("click");
      };
    };

    initializeSidebar();
    // sidebarMenuLink();
    
  }, []);


  useEffect(() => {
    const scrollSidebarMenu = () => {
      const sidebarMenu = $("#sidebar-menu");

      if (sidebarMenu.length > 0) {
        const activeItems = sidebarMenu.find(".mm-active .active");

        if (activeItems.length > 0) {
          const topOffset = 300;
          const targetOffset = activeItems.offset().top;

          if (targetOffset > topOffset) {
            const scrollTarget = targetOffset - topOffset;

            $(".vertical-menu .simplebar-content-wrapper").animate(
              { scrollTop: scrollTarget },
              "slow"
            );
          }
        }
      }

      // Return cleanup function
      return () => {
        $("#vertical-menu-btn").off("click");
      };
    };

    scrollSidebarMenu();
  }, []);


  
 
    const sidebarMenuLink = () => {
      $("#sidebar-menu a").each(function () {
        const currentURL = window.location.href.split(/[?#]/)[0];
        if (this.href === currentURL) {
          $(this).addClass("active");
          $(this).parent().addClass("mm-active");
          $(this).parent().parent().addClass("mm-show");
          $(this).parent().parent().prev().addClass("mm-active");
          $(this).parent().parent().parent().addClass("mm-active");
          $(this).parent().parent().parent().parent().addClass("mm-show");
          $(this)
            .parent()
            .parent()
            .parent()
            .parent()
            .parent()
            .parent()
            .addClass("mm-active");
        }
      });
    };

  


  
  

  return (
    // profile pic
    <div className="vertical-menu">
      <div data-simplebar className="h-100">
        <div className="user-sidebar text-center">
          <div className="dropdown">
            <div className="user-img">
              <img
                src={avatar_7}
                alt=""
                className="rounded-circle"
              />
              <span className="avatar-online bg-success"></span>
            </div>
            <div className="user-info">
              <h5 className="mt-3 font-size-16 text-white">James Raphael</h5>
              <span className="font-size-13 text-white-50">Administrator</span>
            </div>
          </div>
        </div>
        {/* end profile pic */}

        {/* <!--- Sidemenu --> */}
        <div id="sidebar-menu">
          {/* <!-- Left Menu Start --> */}
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">Menu</li>

            <li>
              <Link to="/index" className="waves-effect">
                <i className="dripicons-home"></i>
                <span className="badge rounded-pill bg-info float-end">3</span>
                <span>Dashboard</span>
              </Link>
            </li>

            <li>
              <Link to="/calendar" className=" waves-effect">
                <i className="dripicons-calendar"></i>
                <span>Calendar</span>
              </Link>
            </li>

            <li>
              <Link to="/chat" className=" waves-effect">
                <i className="dripicons-message"></i>
                <span>Chat</span>
              </Link>
            </li>

            <li>
              <Link
                to=""
                className="has-arrow waves-effect"
              >
                <i className="dripicons-cart"></i>
                <span>Ecommerce</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="/ecommerce-products">Products</Link>
                </li>
                <li>
                  <Link to="/ecommerce-product-detail">Product Detail</Link>
                </li>
                <li>
                  <Link to="/ecommerce-orders">Orders</Link>
                </li>
                <li>
                  <Link to="/ecommerce-customers">Customers</Link>
                </li>
                <li>
                  <Link to="/ecommerce-cart">Cart</Link>
                </li>
                <li>
                  <Link to="/ecommerce-checkout">Checkout</Link>
                </li>
                <li>
                  <Link to="/ecommerce-shops">Shops</Link>
                </li>
                <li>
                  <Link to="/ecommerce-add-product">Add Product</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                to=""
                className="has-arrow waves-effect"
              >
                <i className="dripicons-mail"></i>
                <span>Email</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="email-inbox.html">Inbox</Link>
                </li>
                <li>
                  <Link to="email-read.html">Email Read</Link>
                </li>
                <li>
                  <Link to="email-compose.html">Email Compose</Link>
                </li>
              </ul>
            </li>

            <li className="menu-title">Components</li>

            <li>
              <Link
                to=""
                className="has-arrow waves-effect"
              >
                <i className="dripicons-suitcase"></i>
                <span>UI Elements</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="ui-alerts.html">Alerts</Link>
                </li>
                <li>
                  <Link to="ui-buttons.html">Buttons</Link>
                </li>
                <li>
                  <Link to="ui-cards.html">Cards</Link>
                </li>
                <li>
                  <Link to="ui-carousel.html">Carousel</Link>
                </li>
                <li>
                  <Link to="ui-dropdowns.html">Dropdowns</Link>
                </li>
                <li>
                  <Link to="ui-grid.html">Grid</Link>
                </li>
                <li>
                  <Link to="ui-images.html">Images</Link>
                </li>
                <li>
                  <Link to="ui-lightbox.html">Lightbox</Link>
                </li>
                <li>
                  <Link to="ui-modals.html">Modals</Link>
                </li>
                <li>
                  <Link to="ui-rangeslider.html">Range Slider</Link>
                </li>
                <li>
                  <Link to="ui-session-timeout.html">Session Timeout</Link>
                </li>
                <li>
                  <Link to="ui-progressbars.html">Progress Bars</Link>
                </li>
                <li>
                  <Link to="ui-sweet-alert.html">Sweet-Alert</Link>
                </li>
                <li>
                  <Link to="ui-tabs-accordions.html">Accordions</Link>
                </li>
                <li>
                  <Link to="ui-typography.html">Typography</Link>
                </li>
                <li>
                  <Link to="ui-video.html">Video</Link>
                </li>
                <li>
                  <Link to="ui-general.html">General</Link>
                </li>
                <li>
                  <Link to="ui-colors.html">Colors</Link>
                </li>
                <li>
                  <Link to="ui-rating.html">Rating</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="" className="waves-effect">
                <i className="dripicons-to-do"></i>
                <span className="badge rounded-pill bg-danger float-end">
                  6
                </span>
                <span>Forms</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="form-elements.html">Form Elements</Link>
                </li>
                <li>
                  <Link to="form-validation.html">Form Validation</Link>
                </li>
                <li>
                  <Link to="form-advanced.html">Form Advanced</Link>
                </li>
                <li>
                  <Link to="form-editors.html">Form Editors</Link>
                </li>
                <li>
                  <Link to="form-uploads.html">Form Upload</Link>
                </li>
                <li>
                  <Link to="form-xeditable.html">Form Xeditable</Link>
                </li>
                <li>
                  <Link to="form-wizard.html">Form Wizard</Link>
                </li>
                <li>
                  <Link to="form-mask.html">Form Mask</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to=""
                className="has-arrow waves-effect"
              >
                <i className="dripicons-graph-pie"></i>
                <span>Charts</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="charts-apex.html">Apex charts</Link>
                </li>
                <li>
                  <Link to="charts-chartist.html">Chartist</Link>
                </li>
                <li>
                  <Link to="charts-chartjs.html">Chartjs Chart</Link>
                </li>
                <li>
                  <Link to="charts-flot.html">Flot Chart</Link>
                </li>
                <li>
                  <Link to="charts-knob.html">Knob Chart</Link>
                </li>
                <li>
                  <Link to="charts-sparkline.html">Sparkline Chart</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to=""
                className="has-arrow waves-effect"
              >
                <i className="dripicons-toggles"></i>
                <span>Tables</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="tables-basic.html">Basic Tables</Link>
                </li>
                <li>
                  <Link to="tables-datatable.html">Data Tables</Link>
                </li>
                <li>
                  <Link to="tables-responsive.html">Responsive Table</Link>
                </li>
                <li>
                  <Link to="tables-editable.html">Editable Table</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                to=""
                className="has-arrow waves-effect"
              >
                <i className="dripicons-basket"></i>
                <span>Icons</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="icons-materialdesign.html">Material Design</Link>
                </li>
                <li>
                  <Link to="icons-dripicons.html">Dripicons</Link>
                </li>
                <li>
                  <Link to="icons-fontawesome.html">Font awesome</Link>
                </li>
                <li>
                  <Link to="icons-themify.html">Themify Icons</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to=""
                className="has-arrow waves-effect"
              >
                <i className="dripicons-map"></i>
                <span>Maps</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="maps-google.html">Google Maps</Link>
                </li>
                <li>
                  <Link to="maps-vector.html">Vector Maps</Link>
                </li>
              </ul>
            </li>
            <li className="menu-title">Extras</li>
            <li>
              <Link
                to=""
                className="has-arrow waves-effect"
              >
                <i className="dripicons-device-desktop"></i>
                <span>Layouts</span>
              </Link>
              <ul className="sub-menu" aria-expanded="true">
                <li>
                  <Link to=" " className="has-arrow">
                    Vertical
                  </Link>
                  <ul className="sub-menu" aria-expanded="true">
                    <li>
                      <Link to="layouts-dark-sidebar.html">Dark Sidebar</Link>
                    </li>
                    <li>
                      <Link to="layouts-compact-sidebar.html">
                        Compact Sidebar
                      </Link>
                    </li>
                    <li>
                      <Link to="layouts-icon-sidebar.html">Icon Sidebar</Link>
                    </li>
                    <li>
                      <Link to="layouts-boxed.html">Boxed Layout</Link>
                    </li>
                    <li>
                      <Link to="layouts-preloader.html">Preloader</Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to=" " className="has-arrow">
                    Horizontal
                  </Link>
                  <ul className="sub-menu" aria-expanded="true">
                    <li>
                      <Link to="layouts-horizontal.html">Horizontal</Link>
                    </li>
                    <li>
                      <Link to="layouts-hori-topbar-light.html">
                        Topbar light
                      </Link>
                    </li>
                    <li>
                      <Link to="layouts-hori-boxed-width.html">
                        Boxed width
                      </Link>
                    </li>
                    <li>
                      <Link to="layouts-hori-preloader.html">Preloader</Link>
                    </li>
                    <li>
                      <Link to="layouts-hori-colored-header.html">
                        Colored Header
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to=""
                className="has-arrow waves-effect"
              >
                <i className="dripicons-user-group"></i>
                <span>Authentication</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="auth-login.html">Login</Link>
                </li>
                <li>
                  <Link to="auth-register.html">Register</Link>
                </li>
                <li>
                  <Link to="auth-recoverpw.html">Re-Password</Link>
                </li>
                <li>
                  <Link to="auth-lock-screen.html">Lock Screen</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                to=""
                className="has-arrow waves-effect"
              >
                <i className="dripicons-copy"></i>
                <span>Pages</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="pages-timeline.html">Timeline</Link>
                </li>
                <li>
                  <Link to="pages-invoice.html">Invoice</Link>
                </li>
                <li>
                  <Link to="pages-blank.html">Blank Page</Link>
                </li>
                <li>
                  <Link to="pages-404.html">Error 404</Link>
                </li>
                <li>
                  <Link to="pages-500.html">Error 500</Link>
                </li>
                <li>
                  <Link to="pages-pricing.html">Pricing</Link>
                </li>
                <li>
                  <Link to="pages-maintenance.html">Maintenance</Link>
                </li>
                <li>
                  <Link to="pages-comingsoon.html">Coming Soon</Link>
                </li>
                <li>
                  <Link to="pages-faq.html">FAQs</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                to=""
                className="has-arrow waves-effect"
              >
                <i className="dripicons-checklist"></i>
                <span>Multi Level</span>
              </Link>
              <ul className="sub-menu" aria-expanded="true">
                <li>
                  <Link to=" ">Level 1.1</Link>
                </li>
                <li>
                  <Link to=" " className="has-arrow">
                    Level 1.2
                  </Link>
                  <ul className="sub-menu" aria-expanded="true">
                    <li>
                      <Link to=" ">Level 2.1</Link>
                    </li>
                    <li>
                      <Link to=" ">Level 2.2</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
