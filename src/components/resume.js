import React, { Component } from "react";

class Resume extends Component {
  render() {
    return (
      <div className="pdfview">
        <object
          width="100%"
          height="640"
          data="https://drive.google.com/file/d/0B18W-ElxCAwhM0VsTjVjcF8tYUs5TDVIYWNkNnEtZi1GZldN/preview"
        />
      </div>
    );
  }
}
export default Resume;
