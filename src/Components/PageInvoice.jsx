import React from "react";

export default function PageInvoice() {
  return (
    <div className="main-content">
      <div className="page-content">
        {/* start page title */}
        <div className="page-title-box">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="page-title">
                  <h4>Invoice</h4>
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <a href="">Morvin</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="">Pages</a>
                    </li>
                    <li className="breadcrumb-item active">Invoice</li>
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
            <div className="row">
              <div className="col-12">
                <div className="card m-b-30">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12">
                        <div className="invoice-title">
                          <h4 className="float-end font-size-16">
                            <strong>Order # 12345</strong>
                          </h4>
                          <h3 className="m-t-0">
                            <img
                              src="images/logo-dark.png"
                              alt="logo"
                              height={18}
                            />
                          </h3>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-6">
                            <address>
                              <strong>Billed To:</strong>
                              <br />
                              Ricky Clemons
                              <br />
                              1234 Main
                              <br />
                              Apt. 4B
                              <br />
                              Springfield, ST 54321
                            </address>
                          </div>

                          <div className="col-6 text-end">
                            <address>
                              <strong>Shipped To:</strong>
                              <br />
                              Kenny Rigdon
                              <br />
                              1234 Main
                              <br />
                              Apt. 4B
                              <br />
                              Springfield, ST 54321
                            </address>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-6 m-t-30">
                            <address>
                              <strong>Payment Method:</strong>
                              <br />
                              Visa ending **** 4242
                              <br />
                              RClemons@email.com
                            </address>
                          </div>

                          <div className="col-6 m-t-30 text-end">
                            <address>
                              <strong>Order Date:</strong>
                              <br />
                              October 7, 2016
                              <br />
                              <br />
                            </address>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="panel panel-default">
                          <div className="p-2">
                            <h3 className="panel-title font-size-20">
                              <strong>Order summary</strong>
                            </h3>
                          </div>
                          <div>
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <td>
                                      <strong>Item</strong>
                                    </td>
                                    <td className="text-center">
                                      <strong>Price</strong>
                                    </td>
                                    <td className="text-center">
                                      <strong>Quantity</strong>
                                    </td>
                                    <td className="text-end">
                                      <strong>Totals</strong>
                                    </td>
                                  </tr>
                                </thead>

                                <tbody>
                                  {/* foreach ($order->lineItems as $line) or some such thing here */}
                                  <tr>
                                    <td>BS-200</td>
                                    <td className="text-center">$10.99</td>
                                    <td className="text-center">1</td>
                                    <td className="text-end">$10.99</td>
                                  </tr>
                                  <tr>
                                    <td>BS-400</td>
                                    <td className="text-center">$20.00</td>
                                    <td className="text-center">3</td>
                                    <td className="text-end">$60.00</td>
                                  </tr>
                                  <tr>
                                    <td>BS-1000</td>
                                    <td className="text-center">$600.00</td>
                                    <td className="text-center">1</td>
                                    <td className="text-end">$600.00</td>
                                  </tr>
                                  <tr>
                                    <td className="thick-line" />
                                    <td className="thick-line" />
                                    <td className="thick-line text-center">
                                      <strong>Subtotal</strong>
                                    </td>
                                    <td className="thick-line text-end">
                                      $670.99
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="no-line" />
                                    <td className="no-line" />
                                    <td className="no-line text-center">
                                      <strong>Shipping</strong>
                                    </td>
                                    <td className="no-line text-end">$15</td>
                                  </tr>
                                  <tr>
                                    <td className="no-line" />
                                    <td className="no-line" />
                                    <td className="no-line text-center">
                                      <strong>Total</strong>
                                    </td>
                                    <td className="no-line text-end">
                                      <h4 className="m-0">$685.99</h4>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="d-print-none mo-mt-2">
                              <div className="float-end">
                                <a
                                  href="javascript:window.print()"
                                  className="btn btn-success waves-effect waves-light"
                                >
                                  <i className="fa fa-print" />
                                </a>
                                <a
                                  href="#"
                                  className="btn btn-primary waves-effect waves-light ms-1"
                                >
                                  Send
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
      </div>
    </div>
  );
}
