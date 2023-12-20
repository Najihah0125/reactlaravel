import React from "react";

export default function LeftSideBar() {
  return (
    <div className="vertical-menu">
      <div data-simplebar className="h-100">
        <div className="user-sidebar text-center">
          <div className="dropdown">
            <div className="user-img">
              <img
                src="assets/images/users/avatar-7.jpg"
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

        {/* <!--- Sidemenu --> */}
        <div id="sidebar-menu">
          {/* <!-- Left Menu Start --> */}
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">Menu</li>

            <li>
              <a href="index.html" className="waves-effect">
                <i className="dripicons-home"></i>
                <span className="badge rounded-pill bg-info float-end">3</span>
                <span>Dashboard</span>
              </a>
            </li>

            <li>
              <a href="calendar.html" className=" waves-effect">
                <i className="dripicons-calendar"></i>
                <span>Calendar</span>
              </a>
            </li>

            <li>
              <a href="chat.html" className=" waves-effect">
                <i className="dripicons-message"></i>
                <span>Chat</span>
              </a>
            </li>

            <li>
              <a href="javascript: void(0);" className="has-arrow waves-effect">
                <i className="dripicons-cart"></i>
                <span>Ecommerce</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="ecommerce-products.html">Products</a>
                </li>
                <li>
                  <a href="ecommerce-product-detail.html">Product Detail</a>
                </li>
                <li>
                  <a href="ecommerce-orders.html">Orders</a>
                </li>
                <li>
                  <a href="ecommerce-customers.html">Customers</a>
                </li>
                <li>
                  <a href="ecommerce-cart.html">Cart</a>
                </li>
                <li>
                  <a href="ecommerce-checkout.html">Checkout</a>
                </li>
                <li>
                  <a href="ecommerce-shops.html">Shops</a>
                </li>
                <li>
                  <a href="ecommerce-add-product.html">Add Product</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="javascript: void(0);" className="has-arrow waves-effect">
                <i className="dripicons-mail"></i>
                <span>Email</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="email-inbox.html">Inbox</a>
                </li>
                <li>
                  <a href="email-read.html">Email Read</a>
                </li>
                <li>
                  <a href="email-compose.html">Email Compose</a>
                </li>
              </ul>
            </li>

            <li className="menu-title">Components</li>

            <li>
              <a href="javascript: void(0);" className="has-arrow waves-effect">
                <i className="dripicons-suitcase"></i>
                <span>UI Elements</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="ui-alerts.html">Alerts</a>
                </li>
                <li>
                  <a href="ui-buttons.html">Buttons</a>
                </li>
                <li>
                  <a href="ui-cards.html">Cards</a>
                </li>
                <li>
                  <a href="ui-carousel.html">Carousel</a>
                </li>
                <li>
                  <a href="ui-dropdowns.html">Dropdowns</a>
                </li>
                <li>
                  <a href="ui-grid.html">Grid</a>
                </li>
                <li>
                  <a href="ui-images.html">Images</a>
                </li>
                <li>
                  <a href="ui-lightbox.html">Lightbox</a>
                </li>
                <li>
                  <a href="ui-modals.html">Modals</a>
                </li>
                <li>
                  <a href="ui-rangeslider.html">Range Slider</a>
                </li>
                <li>
                  <a href="ui-session-timeout.html">Session Timeout</a>
                </li>
                <li>
                  <a href="ui-progressbars.html">Progress Bars</a>
                </li>
                <li>
                  <a href="ui-sweet-alert.html">Sweet-Alert</a>
                </li>
                <li>
                  <a href="ui-tabs-accordions.html">Accordions</a>
                </li>
                <li>
                  <a href="ui-typography.html">Typography</a>
                </li>
                <li>
                  <a href="ui-video.html">Video</a>
                </li>
                <li>
                  <a href="ui-general.html">General</a>
                </li>
                <li>
                  <a href="ui-colors.html">Colors</a>
                </li>
                <li>
                  <a href="ui-rating.html">Rating</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="javascript: void(0);" className="waves-effect">
                <i className="dripicons-to-do"></i>
                <span className="badge rounded-pill bg-danger float-end">6</span>
                <span>Forms</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="form-elements.html">Form Elements</a>
                </li>
                <li>
                  <a href="form-validation.html">Form Validation</a>
                </li>
                <li>
                  <a href="form-advanced.html">Form Advanced</a>
                </li>
                <li>
                  <a href="form-editors.html">Form Editors</a>
                </li>
                <li>
                  <a href="form-uploads.html">Form Upload</a>
                </li>
                <li>
                  <a href="form-xeditable.html">Form Xeditable</a>
                </li>
                <li>
                  <a href="form-wizard.html">Form Wizard</a>
                </li>
                <li>
                  <a href="form-mask.html">Form Mask</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript: void(0);" className="has-arrow waves-effect">
                <i className="dripicons-graph-pie"></i>
                <span>Charts</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="charts-apex.html">Apex charts</a>
                </li>
                <li>
                  <a href="charts-chartist.html">Chartist</a>
                </li>
                <li>
                  <a href="charts-chartjs.html">Chartjs Chart</a>
                </li>
                <li>
                  <a href="charts-flot.html">Flot Chart</a>
                </li>
                <li>
                  <a href="charts-knob.html">Knob Chart</a>
                </li>
                <li>
                  <a href="charts-sparkline.html">Sparkline Chart</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript: void(0);" className="has-arrow waves-effect">
                <i className="dripicons-toggles"></i>
                <span>Tables</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="tables-basic.html">Basic Tables</a>
                </li>
                <li>
                  <a href="tables-datatable.html">Data Tables</a>
                </li>
                <li>
                  <a href="tables-responsive.html">Responsive Table</a>
                </li>
                <li>
                  <a href="tables-editable.html">Editable Table</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="javascript: void(0);" className="has-arrow waves-effect">
                <i className="dripicons-basket"></i>
                <span>Icons</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="icons-materialdesign.html">Material Design</a>
                </li>
                <li>
                  <a href="icons-dripicons.html">Dripicons</a>
                </li>
                <li>
                  <a href="icons-fontawesome.html">Font awesome</a>
                </li>
                <li>
                  <a href="icons-themify.html">Themify Icons</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript: void(0);" className="has-arrow waves-effect">
                <i className="dripicons-map"></i>
                <span>Maps</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="maps-google.html">Google Maps</a>
                </li>
                <li>
                  <a href="maps-vector.html">Vector Maps</a>
                </li>
              </ul>
            </li>
            <li className="menu-title">Extras</li>
            <li>
              <a href="javascript: void(0);" className="has-arrow waves-effect">
                <i className="dripicons-device-desktop"></i>
                <span>Layouts</span>
              </a>
              <ul className="sub-menu" aria-expanded="true">
                <li>
                  <a href="javascript: void(0);" className="has-arrow">
                    Vertical
                  </a>
                  <ul className="sub-menu" aria-expanded="true">
                    <li>
                      <a href="layouts-dark-sidebar.html">Dark Sidebar</a>
                    </li>
                    <li>
                      <a href="layouts-compact-sidebar.html">Compact Sidebar</a>
                    </li>
                    <li>
                      <a href="layouts-icon-sidebar.html">Icon Sidebar</a>
                    </li>
                    <li>
                      <a href="layouts-boxed.html">Boxed Layout</a>
                    </li>
                    <li>
                      <a href="layouts-preloader.html">Preloader</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="javascript: void(0);" className="has-arrow">
                    Horizontal
                  </a>
                  <ul className="sub-menu" aria-expanded="true">
                    <li>
                      <a href="layouts-horizontal.html">Horizontal</a>
                    </li>
                    <li>
                      <a href="layouts-hori-topbar-light.html">Topbar light</a>
                    </li>
                    <li>
                      <a href="layouts-hori-boxed-width.html">Boxed width</a>
                    </li>
                    <li>
                      <a href="layouts-hori-preloader.html">Preloader</a>
                    </li>
                    <li>
                      <a href="layouts-hori-colored-header.html">
                        Colored Header
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript: void(0);" className="has-arrow waves-effect">
                <i className="dripicons-user-group"></i>
                <span>Authentication</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="auth-login.html">Login</a>
                </li>
                <li>
                  <a href="auth-register.html">Register</a>
                </li>
                <li>
                  <a href="auth-recoverpw.html">Re-Password</a>
                </li>
                <li>
                  <a href="auth-lock-screen.html">Lock Screen</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="javascript: void(0);" className="has-arrow waves-effect">
                <i className="dripicons-copy"></i>
                <span>Pages</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <a href="pages-timeline.html">Timeline</a>
                </li>
                <li>
                  <a href="pages-invoice.html">Invoice</a>
                </li>
                <li>
                  <a href="pages-blank.html">Blank Page</a>
                </li>
                <li>
                  <a href="pages-404.html">Error 404</a>
                </li>
                <li>
                  <a href="pages-500.html">Error 500</a>
                </li>
                <li>
                  <a href="pages-pricing.html">Pricing</a>
                </li>
                <li>
                  <a href="pages-maintenance.html">Maintenance</a>
                </li>
                <li>
                  <a href="pages-comingsoon.html">Coming Soon</a>
                </li>
                <li>
                  <a href="pages-faq.html">FAQs</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="javascript: void(0);" className="has-arrow waves-effect">
                <i className="dripicons-checklist"></i>
                <span>Multi Level</span>
              </a>
              <ul className="sub-menu" aria-expanded="true">
                <li>
                  <a href="javascript: void(0);">Level 1.1</a>
                </li>
                <li>
                  <a href="javascript: void(0);" className="has-arrow">
                    Level 1.2
                  </a>
                  <ul className="sub-menu" aria-expanded="true">
                    <li>
                      <a href="javascript: void(0);">Level 2.1</a>
                    </li>
                    <li>
                      <a href="javascript: void(0);">Level 2.2</a>
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
