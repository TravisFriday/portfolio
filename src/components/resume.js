import React, { Component } from "react";

class Resume extends Component {
  render() {
    return (
      <div className="pdfview">
        <object
          height="1120px"
          width="100%"
          data="https://drive.google.com/file/d/19UbEsIfeo6G2fCDUpvo9XW-lj_U-o5Vp/preview"
          alt="pdf"
        >
          resume
        </object>
      </div>
    );
  }
}
export default Resume;
