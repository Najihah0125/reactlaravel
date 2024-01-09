import React, { useState } from 'react';

const Formik = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (e) => {
    const files = e.target.files;
    const selectedFilesArray = Array.from(files);

    // Validate minimum 3 files
    if (selectedFilesArray.length < 3) {
        console.log(selectedFilesArray.length);
      setErrorMessage('Please upload at least 3 files.');
    } else {
        console.log(selectedFilesArray.length);
      setErrorMessage('');
      setSelectedFiles(selectedFilesArray);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle submission logic here with the selectedFiles array
    console.log('Selected Files:', selectedFiles);
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
                      <form onSubmit={handleSubmit}>
         <input type="file" multiple onChange={handleFileChange} />
         {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
         <button type="submit">Submit</button>
       </form>
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
};

export default Formik;

