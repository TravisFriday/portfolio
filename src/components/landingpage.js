import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import profilePic from "../files/linkedInpic.png";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="avatarPic">
              <img src={profilePic} alt="avatar" className="avatar-img" />
            </div>

            <div className="banner-text">
              <h1>Software Engineer</h1>

              <hr />

              <p>
                HTML/CSS | Bootstrap | JavaScript | React | Redux | NodeJS |
                MongoDB
              </p>

              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/travisfriday/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/TravisFriday"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
