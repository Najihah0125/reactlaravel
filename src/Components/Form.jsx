import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { BASE_URL } from "../helpers/url";

export default function FormElements() {
  const [validated, setValidated] = useState(false);
  const [project, setProject] = useState([]);
  const [purchase, setPurchase] = useState({
    edd: "",
    reason: "",
    project_id: "",
  });


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/getProject`);
        setProject(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      // if form is not complete
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    event.preventDefault();

    const data = { 
      edd: purchase.edd,
      reason: purchase.reason,
      project_id: purchase.project_id,
    };
    await axios.post(`${BASE_URL}/createPurchase`, data).then(
      res => {
        alert(res.data.message);
      }
    );
  };

  const handleInput = (e) => {
    e.persist();
    setPurchase({ ...purchase, [e.target.name]: e.target.value });
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
                      <Form
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                      >
                        <Row className="mb-3">
                          <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationCustom01"
                          >
                            <Form.Label>EDD</Form.Label>
                            <Form.Control
                              required
                              type="date"
                              placeholder="Estimated Delivery Date"
                              onChange={handleInput}
                            />
                            <Form.Control.Feedback>
                              Looks good!
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationCustom02"
                          >
                            <Form.Label>Reason</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Reason of purchase"
                              onChange={handleInput}
                            />
                            <Form.Control.Feedback>
                              Looks good!
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationCustomUsername"
                          >
                            <Form.Label>Project Name</Form.Label>
                            <Form.Control
                              as="select"
                              required
                              onChange={handleInput}
                            >
                              <option value="">Select a project</option>
                              {project.map((ms_project) => (
                                <option
                                  key={ms_project.id}
                                  value={ms_project.id}
                                >
                                  {ms_project.project_name}
                                </option>
                              ))}
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                              Please select a project.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Row>
                       
                        <Button type="submit">Submit form</Button>
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
