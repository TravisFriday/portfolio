import React, { Component } from "react";

class Resume extends Component {
  render() {
    return (
      <div className="pdfview">
        <object
          height="1120px"
          width="100%"
          data="https://drive.google.com/file/d/1KjuocR37VLHzc7PgVKE_w7tbOzOg_g5q/preview"
          alt="pdf"
        >
          resume
        </object>
      </div>
    );
  }
}
export default Resume;
