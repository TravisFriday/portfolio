import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body" style={{ textShadow: "1px 5px 10px #000" }}>
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Travis Friday</h2>
            <img
              src="https://s3-us-west-2.amazonaws.com/tfportfolio.com/img/contact.jpg"
              alt="avatar"
              style={{ height: "250px" }}
            />

            <p
              style={{
                fontSize: "15px",
                width: "75%",
                margin: "auto",
                paddingTop: "1em",
                fontFamily: "Oxygen",
                color: "white"
              }}
            >
              I am a passionate Software Engineer with a Bachelor of Applied
              Science in Computer Engineering. My Expertise is in Front End
              Development, Data Analysis, Product Management. I have a keen
              interest in mixed reality technology, biomedical engineering
              technology, and green technology.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "Oxygen",
                      whiteSpace: "pre-wrap",
                      color: "white"
                    }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    travisgifriday@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "Oxygen",
                      whiteSpace: "pre-wrap"
                    }}
                  >
                    <a
                      id="contact-a-1"
                      href="https://www.linkedin.com/in/travisfriday"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin-square" aria-hidden="true" />{" "}
                      linkedin.com/in/travisfriday
                    </a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "Oxygen",
                      whiteSpace: "pre-wrap"
                    }}
                  >
                    <a
                      id="contact-a-2"
                      href="https://github.com/TravisFriday"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="fa fa-github-square" aria-hidden="true" />{" "}
                      github.com/TravisFriday
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
