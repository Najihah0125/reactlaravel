import React, { Fragment } from "react";
export default function Calendar() {
  return (
    <fragment>
      <div id="layout-wrapper">
        <div className="main-content">
          <div className="page-content">
            {/* start page title */}
            <div className="page-title-box">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-sm-6">
                    <div className="page-title">
                      <h4>Calendar</h4>
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <a href="javascript: void(0);">Morvin</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="javascript: void(0);">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item active">Calendar</li>
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
                <div className="row mb-4">
                  <div className="col-xl-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <button
                          type="button"
                          className="btn font-16 btn-primary waves-effect waves-light w-100"
                          id="btn-new-event"
                          data-bs-toggle="modal"
                          data-bs-target="#event-modal"
                        >
                          Create New Event
                        </button>
                        <div id="external-events">
                          <br />
                          <p className="text-muted">
                            Drag and drop your event or click in the calendar
                          </p>
                          <div
                            className="external-event fc-event bg-success"
                            data-class="bg-success"
                          >
                            <i className="mdi mdi-checkbox-blank-circle font-size-11 me-2" />
                            New Event Planning
                          </div>
                          <div
                            className="external-event fc-event bg-info"
                            data-class="bg-info"
                          >
                            <i className="mdi mdi-checkbox-blank-circle font-size-11 me-2" />
                            Meeting
                          </div>
                          <div
                            className="external-event fc-event bg-warning"
                            data-class="bg-warning"
                          >
                            <i className="mdi mdi-checkbox-blank-circle font-size-11 me-2" />
                            Generating Reports
                          </div>
                          <div
                            className="external-event fc-event bg-danger"
                            data-class="bg-danger"
                          >
                            <i className="mdi mdi-checkbox-blank-circle font-size-11 me-2" />
                            Create New theme
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* end col*/}
                  <div className="col-xl-9">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div id="calendar" />
                      </div>
                    </div>
                  </div>{" "}
                  {/* end col */}
                </div>{" "}
                {/* end row*/}
                <div style={{ clear: "both" }} />
                {/* Add New Event MODAL */}
                <div
                  className="modal fade"
                  id="event-modal"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header py-3 px-4">
                        <h5 className="modal-title" id="modal-title">
                          Event
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body p-4">
                        <form
                          className="needs-validation"
                          name="event-form"
                          id="form-event"
                          noValidate
                        >
                          <div className="row">
                            <div className="col-12">
                              <div className="mb-3">
                                <label className="form-label">Event Name</label>
                                <input
                                  className="form-control"
                                  placeholder="Insert Event Name"
                                  type="text"
                                  name="title"
                                  id="event-title"
                                  required
                                  
                                />
                                <div className="invalid-feedback">
                                  Please provide a valid event name
                                </div>
                              </div>
                            </div>{" "}
                            {/* end col*/}
                            <div className="col-12">
                              <div className="mb-3">
                                <label className="form-label">Category</label>
                                <select
                                  className="form-select"
                                  name="category"
                                  id="event-category"
                                >
                                  <option selected> --Select-- </option>
                                  <option value="bg-danger">Danger</option>
                                  <option value="bg-success">Success</option>
                                  <option value="bg-primary">Primary</option>
                                  <option value="bg-info">Info</option>
                                  <option value="bg-dark">Dark</option>
                                  <option value="bg-warning">Warning</option>
                                </select>
                                <div className="invalid-feedback">
                                  Please select a valid event category
                                </div>
                              </div>
                            </div>{" "}
                            {/* end col*/}
                          </div>{" "}
                          {/* end row*/}
                          <div className="row mt-2">
                            <div className="col-6">
                              <button
                                type="button"
                                className="btn btn-danger"
                                id="btn-delete-event"
                              >
                                Delete
                              </button>
                            </div>{" "}
                            {/* end col*/}
                            <div className="col-6 text-end">
                              <button
                                type="button"
                                className="btn btn-light me-1"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button
                                type="submit"
                                className="btn btn-success"
                                id="btn-save-event"
                              >
                                Save
                              </button>
                            </div>
                            {/* end col*/}
                          </div>
                          {/* end row*/}
                        </form>
                      </div>
                    </div>
                    {/* end modal-content*/}
                  </div>
                  {/* end modal dialog*/}
                </div>
                {/* end modal*/}
              </div>
            </div>
            {/* container-fluid */}
          </div>
          {/* End Page-content */}
        </div>
        {/* end main content*/}
      </div>
    </fragment>
  );
}
