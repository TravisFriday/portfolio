import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

class Contact extends Component {
  render() {
    return (
      <Container id="contact-grid" style={{ textShadow: "1px 5px 10px #000" }}>
        <Row className="justify-content-center">
          <Col xs={12} lg={6}>
            <h2>Travis Friday</h2>
            <img
              src="https://s3-us-west-2.amazonaws.com/tfportfolio.com/img/contact.jpg"
              alt="avatar"
              style={{ height: "13rem" }}
            />

            <p
              style={{
                fontSize: "1rem",
                width: "auto",
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
          </Col>
          <Col xs={12} lg={6}>
            <h2 style={{ fontSize: "3rem" }}>Contact Me</h2>
            <div className="contact-list">
              <ListGroup
                variant="flush"
                style={{ textAlign: "left", fontSize: "2rem" }}
              >
                <ListGroup.Item
                  style={{
                    backgroundColor: "transparent"
                  }}
                >
                  <ListItemContent
                    style={{
                      fontFamily: "Oxygen",
                      whiteSpace: "pre-wrap"
                    }}
                  >
                    <i
                      className="fa fa-envelope"
                      aria-hidden="true"
                      style={{
                        fontSize: "1em"
                      }}
                    />
                    travisgifriday@gmail.com
                  </ListItemContent>
                </ListGroup.Item>

                <ListGroup.Item style={{ backgroundColor: "transparent" }}>
                  <ListItemContent
                    style={{
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
                      <i
                        className="fa fa-linkedin-square"
                        aria-hidden="true"
                        style={{
                          fontSize: "1em"
                        }}
                      />
                      linkedin.com/in/travisfriday
                    </a>
                  </ListItemContent>
                </ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: "transparent" }}>
                  <ListItemContent
                    style={{
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
                      <i
                        className="fa fa-github-square"
                        aria-hidden="true"
                        style={{
                          fontSize: "1em"
                        }}
                      />
                      github.com/TravisFriday
                    </a>
                  </ListItemContent>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
