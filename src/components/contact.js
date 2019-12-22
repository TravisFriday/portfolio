import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import contactPic from "../files/contact.jpg";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Travis Friday</h2>
            <img src={contactPic} alt="avatar" style={{ height: "250px" }} />

            <p style={{ fontSize: "15px" ,width: "75%", margin: "auto", paddingTop: "1em", fontFamily:"Oxygen" }}>
                I am a passionate Software Engineer with a Bachelor of Applied Science
                in Computer Engineering. My Expertise is in Front End Development,
                Data Analysis, Product Management. I have a keen interest in mixed
                reality technology, biomedical engineering technology, and green
                technology.
                <br />
                <br />
                My ambition is to leverage technology in order to directly impact
                communities who have been forgotten. This is why I am currently
                developing a web application in React.js to empower black-owned
                businesses and consumers to buy/sell products in a marketplace. This
                eCommerce platform will encourage black communities all over the globe
                to support each other and grow. This is my first step in making the
                world a better place.
              </p>
            
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Oxygen", whiteSpace: "pre-wrap"  }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />travisgifriday@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Oxygen", whiteSpace: "pre-wrap"  }}>
                    <a  id="contact-a-1"
                        href="https://www.linkedin.com/in/travisfriday"
                        rel="noopener noreferrer"
                        target="_blank"
                        >
                      <i className="fa fa-linkedin-square" aria-hidden="true" /> linkedin.com/in/travisfriday
                    </a>
                  </ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent style={{ fontSize: "30px", fontFamily: "Oxygen", whiteSpace: "pre-wrap"  }}>
                      <a id="contact-a-2"
                          href="https://github.com/TravisFriday"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className="fa fa-github-square" aria-hidden="true"/> github.com/TravisFriday
                        </a>
                    </ListItemContent>
                  </ListItem>
                
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
