import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <script>document.write(new Date().getFullYear())</script> © Morvin.
          </div>
          <div className="col-sm-6">
            <div className="text-sm-end d-none d-sm-block">
              Crafted with <i className="mdi mdi-heart text-danger"></i> by{" "}
              <a href="https://1.envato.market/themesdesign" target="_blank">
                Themesdesign
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}