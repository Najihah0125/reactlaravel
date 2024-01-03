import React from "react";
import layout_1 from '../assets/images/layouts/layout-1.jpg';
import layout_2 from '../assets/images/layouts/layout-2.jpg';
import layout_3 from '../assets/images/layouts/layout-3.jpg';

export default function RightSideBar() {
  return (
    <div className="right-bar">
      <div data-simplebar className="h-100">
        <div className="rightbar-title d-flex align-items-center px-3 py-4">
          <h5 className="m-0 me-2">Settings</h5>

          <a href="" className="right-bar-toggle ms-auto">
            <i className="mdi mdi-close noti-icon"></i>
          </a>
        </div>

        {/* <!-- Settings --> */}
        <hr className="mt-0" />
        <h6 className="text-center mb-0">Choose Layouts</h6>

        <div className="p-4">
          <div className="mb-2">
            <img
              src={layout_1}
              className="img-fluid img-thumbnail"
              alt="layout-1"
            />
          </div>

          <div className="form-check form-switch mb-3">
            <input
              className="form-check-input theme-choice"
              type="checkbox"
              id="light-mode-switch"
              checked
            />
            <label className="form-check-label" htmlFor="light-mode-switch">
              Light Mode
            </label>
          </div>

          <div className="mb-2">
            <img
              src={layout_2}
              className="img-fluid img-thumbnail"
              alt="layout-2"
            />
          </div>
          <div className="form-check form-switch mb-3">
            <input
              className="form-check-input theme-choice"
              type="checkbox"
              id="dark-mode-switch"
              data-bsStyle="css/bootstrap-dark.min.css"
              data-appStyle="css/app-dark.min.css"
            />
            <label className="form-check-label" htmlFor="dark-mode-switch">
              Dark Mode
            </label>
          </div>

          <div className="mb-2">
            <img
              src={layout_3}
              className="img-fluid img-thumbnail"
              alt="layout-3"
            />
          </div>
          <div className="form-check form-switch mb-5">
            <input
              className="form-check-input theme-choice"
              type="checkbox"
              id="rtl-mode-switch"
              data-appStyle="css/app-rtl.min.css"
            />
            <label className="form-check-label" htmlFor="rtl-mode-switch">
              RTL Mode
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
