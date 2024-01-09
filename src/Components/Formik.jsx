import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Col, Form, Row, Button } from "react-bootstrap";
import { BASE_URL } from "../helpers/url";

export default function Formik() {

  const validate = (values) => {
    const errors = {};

    if (!values.quotation || values.quotation.length < 3) {
        errors.quotation = 'Please upload at least 3 quotations';
    }

    return errors;
  };


  const formik = useFormik({
    initialValues: {
      quotation: null,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleFileChange = (event) => {
    formik.setFieldValue('quotation', event.currentTarget.files);
    formik.handleChange(event);
  };

  

  return (
    <div id="layout-wrapper">
      <div className="main-content">
        <div className="page-content">
          {/* start page title */}
          <div className="page-title-box">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <div className="page-title">
                    <h4>Form Validation</h4>
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="">Morvin</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="">Forms</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Form Validation
                      </li>
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
          {/* end page title */}
          <div className="container-fluid">
            <div className="page-content-wrapper">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="header-title">
                        Bootstrap Validation - Normal
                      </h4>
                      <p className="card-title-desc">
                        For custom Bootstrap form validation messages, you’ll
                        need to add the <code>novalidate</code> boolean
                        attribute to your <code>&lt;form&gt;</code>.
                      </p>
                      <Form onSubmit={formik.handleSubmit}>
                        <Row className="mb-3">
                          
                          {/* 3rd input */}
                          <Form.Group as={Col} md="4">
                            <Form.Label>Upload Quotation</Form.Label>
                            <Form.Control
                              id="quotation"
                              name="quotation"
                              type="file"
                              multiple
                              onChange={handleFileChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.quotation}
                            />
                            {formik.touched.quotation &&
                            formik.errors.quotation ? (
                              <div>{formik.errors.quotation}</div>
                            ) : null}
                          </Form.Group>
                        </Row>
                        <Button type="submit">Submit</Button>
                      </Form>
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





