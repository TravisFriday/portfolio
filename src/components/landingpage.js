import React, { Component } from "react";
import profilePic from "../files/linkedInpic.png";
import Views from "../files/views.jpg"

class Landing extends Component {
  render() {
    return (

      <div>
        {/*<img src= {Modelto} id="modelpic"></img>*/}
        
        <div>
          <div className="container" id="landing-grid">
            <div className="row" id= "row1" /*style={{backgroundImage: Modelto, backgroundSize: "cover", backgroundPosition: "center"}} */>
              <div className= "col-lg-12">
                <div className="avatarPic">
                  <img src={profilePic} alt="avatar" className="avatar-img" />
                </div>
                <div className="banner-text">
                  <h1>Software Engineer</h1>
                  <hr />
                  <p style= {{whiteSpace: "pre-wrap"}}>
                    C++   |   Python   |   Angular   |   React   |   NodeJS   |   MongoDB
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
              </div>
            </div>
            </div>
          </div>
              
            </div>
          
        
        
        
          
        
      
    );
  }
}

export default Landing;
