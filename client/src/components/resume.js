import React, { Component } from "react";

class Resume extends Component {
  render() {
    return (
      <div className="pdfview">
        <object
          height="1120px"
          width="100%"
          data="https://drive.google.com/file/d/1EDQYkwtDGD2n8X7hJZChNqargeyJ4GfC/preview"
        />
      </div>
    );
  }
}
export default Resume;