import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function DropZone(props) {
  const [validationError, setValidationError] = useState(null);
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    fileRejections,
  } = useDropzone();

  useEffect(() => {
    // Validate the number of uploaded files
    if (acceptedFiles.length < 3) {
      setValidationError({
        code: "minimum file not met",
        message: "Please upload a minimum of 3 quotations",
      });
    } else {
      setValidationError(null);
    }
  }, [acceptedFiles]);

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <em>(2 files are the maximum number of files you can drop here)</em>
      </div>
      <aside>
        <h4>Accepted files</h4>
        <ul>{acceptedFileItems}</ul>
        <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul>
      </aside>
      {validationError && (
        <div style={{ color: "red" }}>{validationError.message}</div>
      )}
    </section>
  );
}
