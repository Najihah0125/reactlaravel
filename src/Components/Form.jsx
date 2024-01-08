import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { BASE_URL } from "../helpers/url";

export default function FormElements() {
  const minNumberOfQuots = 3;
  const [minQuotValid, setMinQuotValid] = useState(null);
  const [validated, setValidated] = useState(false);
  const [project, setProject] = useState([]);
  // const [purchase, setPurchase] = useState({
  //   purchase_edd: "",
  //   purchase_reason: "",
  //   purchase_project_id: "",
  //   quotations: [],
  // });

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
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

  const numberOfQuots = formData.getAll("quotation").length;

    if (form.checkValidity() === false || numberOfQuots < minNumberOfQuots) {
      // if form is not complete
      event.stopPropagation();
      // set validated to true, so that can display the error feedback at each inputs
      setMinQuotValid(true);
      setValidated(true);
      console.log('min quot: ', minQuotValid);
      console.log("At least 3 quotations");
    } else {
      setMinQuotValid(false);
      setValidated(false);
      console.log('min quot: ', minQuotValid);
      const data = {
        purchase_edd: formData.get("edd"),
        purchase_reason: formData.get("reason"),
        purchase_project_id: formData.get("project_id"),
        quotations: formData.getAll("quotation"),
      };
      console.log("Submitting data:", data);
      try {
        const response = await axios.post(`${BASE_URL}/createPurchase`, data);
        console.log("Response:", response.data);
        alert(response.data.message);
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    }
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    const numberOfFiles = files.length;
    setMinQuotValid(numberOfFiles >= minNumberOfQuots);
  };


  // const handleInput = (e) => {
  //   e.persist();
  //   setPurchase({ ...purchase, [e.target.name]: e.target.value });
  //   console.log("purchase state:", purchase);

  //   //minimum 3 quotations validation @ file upload input
  //   // if (e.target.type === "file") {

  //   //   if (Array.from(e.target.files).length < minQuotNum) {
  //   //     // error feedback
  //   //     // e.target.value = "";
  //   //     setValidated(true);
  //   //   } else {
  //   //     // if user attach at least 3 quot
  //   //     setPurchase({ ...purchase, [e.target.name]: e.target.value });
  //   //     console.log("purchase state:", purchase);
  //   //   }
  //   // }
  // };

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
                              name="edd"
                              required
                              type="date"
                              placeholder="Estimated Delivery Date"
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
                              name="reason"
                              required
                              type="text"
                              placeholder="Reason of purchase"
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
                              name="project_id"
                              as="select"
                              required
                            >
                              <option value="">Select a project</option>
                              {project.map((ms_project) => (
                                <option
                                  key={ms_project.project_id}
                                  value={ms_project.project_id}
                                >
                                  {ms_project.project_name}
                                </option>
                              ))}
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                              Please select a project.
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>File</Form.Label>
                            <Form.Control
                              type="file"
                              multiple
                              required
                              name="quotation"
                              isInvalid={!minQuotValid}
                              onChange={handleFileChange}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please attach at least 3 quotations.
                              </Form.Control.Feedback>
                            {/* {minQuotValid && validated && (
                              <Form.Control.Feedback type="invalid">
                                Please attach at least 3 quotations.
                              </Form.Control.Feedback>
                            )}
                            {!minQuotValid && !validated && (
    <Form.Control.Feedback type="valid">
      Looks good!
    </Form.Control.Feedback>
  )} */}
                            
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
