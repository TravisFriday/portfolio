import React, { Component } from "react";
import CovidPic from "../data/covid2.png";
import FlashCardPic from "../data/flashcard.jpg"
import FitnessTrackerPic from "../data/fitnessTracker.jpg"
import WouldYouRatherPic from "../data/wouldYouRather.png";
import TwitterPic from "../data/twitter.png";
import { Container, Row, Col, Card } from "react-bootstrap";
import { CardActions, Button, Grid, Cell, Tab, Tabs } from "react-mdl";
import Appview from "./appview.png";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <Container>
          <Row>
          <Col
              sm={12}
              md={6}
              lg={4}
              style={{
                display: "flex",
                padding: 10,
              }}
            >
              <Card>
                <Card.Img
                  variant="top"
                  src={WouldYouRatherPic}
                  style={{ width: "100%", height: "30vh", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "2rem", textAlign: "center" }}>
                    Would You Rather...
                  </Card.Title>
                  <Card.Text>
                    An adaptation of the popular game Would You Rather
                  </Card.Text>
                </Card.Body>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/TravisFriday/would-you-rather"
                  >
                    GitHub
                  </Button>
                  <Button colored href="https://would-you-rather-tf.netlify.app/">
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Col>
          <Col
              sm={12}
              md={6}
              lg={4}
              style={{
                display: "flex",
                padding: 10,
              }}
            >
              <Card>
                <Card.Img
                  variant="top"
                  src={TwitterPic}
                  style={{ width: "100%", height: "30vh", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "2rem", textAlign: "center" }}>
                    Twitter
                  </Card.Title>
                  <Card.Text>
                    A replica of the popular social media platform Twitter
                  </Card.Text>
                </Card.Body>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/TravisFriday/twitter"
                  >
                    GitHub
                  </Button>
                  <Button colored href="https://tftwitter.netlify.app/">
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={4}
              style={{
                display: "flex",
                padding: 10,
              }}
            >
              <Card>
                <Card.Img
                  variant="top"
                  src={CovidPic}
                  style={{ width: "100%", height: "30vh", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "2rem", textAlign: "center" }}>
                    The Rona Stats
                  </Card.Title>
                  <Card.Text>
                    This is a front-end application built in React which
                    visualizes data about the impact of Pic-19 in each country
                    around the world
                  </Card.Text>
                </Card.Body>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/TravisFriday/covidtracker"
                  >
                    GitHub
                  </Button>
                  <Button colored href="https://theronastats.netlify.app/">
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={4} style={{ display: "flex", padding: 10 }}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://s3-us-west-2.amazonaws.com/tfportfolio.com/img/appview.png"
                  style={{ width: "100%", height: "30vh", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "2rem", textAlign: "center" }}>
                    My Reads
                  </Card.Title>
                  <Card.Text>
                    This web application built in React.js that allows you to
                    keep track of books that you want to read, currently reading
                    and finished reading.
                  </Card.Text>
                </Card.Body>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/TravisFriday/MyReads"
                  >
                    GitHub
                  </Button>
                  <Button colored href="https://myreads-tfriday.netlify.com/">
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={4} style={{ display: "flex", padding: 10 }}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://s3-us-west-2.amazonaws.com/tfportfolio.com/img/portfolioHomepage.jpg"
                  style={{ width: "100%", height: "30vh", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "2rem", textAlign: "center" }}>
                    Portfolio Site
                  </Card.Title>
                  <Card.Text>
                    A portfolio web application built with React.js.
                  </Card.Text>
                </Card.Body>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/TravisFriday/portfolio"
                  >
                    GitHub
                  </Button>
                  <Button colored href="https://www.tfportfolio.com/">
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={4}
              style={{
                display: "flex",
                padding: 10,
              }}
            >
              <Card>
                <Card.Img
                  variant="top"
                  src="https://s3-us-west-2.amazonaws.com/tfportfolio.com/img/freshWears.jpg"
                  style={{ width: "100%", height: "30vh", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "2rem", textAlign: "center" }}>
                    FreshWears
                  </Card.Title>
                  <Card.Text>
                    This is React/Redux web application that allows the user to
                    add/remove watches to their shopping cart.
                  </Card.Text>
                </Card.Body>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/TravisFriday/inventory"
                  >
                    GitHub
                  </Button>
                  <Button
                    colored
                    href="https://travisfriday.github.io/freshwears/"
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={4}
              style={{
                display: "flex",
                padding: 10,
              }}
            >
              <Card>
                <Card.Img
                  variant="top"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
                  style={{ width: "100%", height: "30vh", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "2rem", textAlign: "center" }}>
                    Backend Tutorials
                  </Card.Title>
                  <Card.Text>
                    Here is some coursework from Mosh\'s "The Complete Node.js
                    Course". Learn to build highly-scalable, fast and secure
                    RESTful APIs with Node, Express, and MongoDB
                  </Card.Text>
                </Card.Body>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/TravisFriday/backend-tutorials"
                  >
                    GitHub
                  </Button>
                </CardActions>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <Container>
          <Row>
          <Col
              sm={12}
              md={6}
              lg={4}
              style={{
                display: "flex",
                padding: 10,
              }}
            >
              <Card>
                <Card.Img variant="top" src={FlashCardPic} />
                <Card.Body>
                  <Card.Title style={{ fontSize: "2rem", textAlign: "center" }}>
                    Flashcard
                  </Card.Title>
                  <Card.Text>
                    An iOS/Android application built in React Native that gives the user the ability to create flashcards, decks and test themselves on topics.
                  </Card.Text>
                </Card.Body>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/TravisFriday/fitness-tracker"
                  >
                    GitHub
                  </Button>
                </CardActions>
              </Card>
            </Col>
          <Col
              sm={12}
              md={6}
              lg={4}
              style={{
                display: "flex",
                padding: 10,
              }}
            >
              <Card>
                <Card.Img variant="top" src={FitnessTrackerPic} />
                <Card.Body>
                  <Card.Title style={{ fontSize: "2rem", textAlign: "center" }}>
                    Fitness Tracker
                  </Card.Title>
                  <Card.Text>
                  An iOS/Android application built in React Native where you can log your sporting activities, meals and sleep.
                  </Card.Text>
                </Card.Body>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/TravisFriday/fitness-tracker"
                  >
                    GitHub
                  </Button>
                </CardActions>
              </Card>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={4}
              style={{
                display: "flex",
                padding: 10,
              }}
            >
              <Card>
                <Card.Img variant="top" src={Appview} />
                <Card.Body>
                  <Card.Title style={{ fontSize: "2rem", textAlign: "center" }}>
                    Lumohacks 2018
                  </Card.Title>
                  <Card.Text>
                    Smart Companion: A prototype of a system comprised of a
                    smart watch and an iOS app that would aid in the mitigation
                    of stress and anxiety of first responders.
                  </Card.Text>
                </Card.Body>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/TravisFriday/lumohacks-2018"
                  >
                    GitHub
                  </Button>
                </CardActions>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is VueJS</h1>
        </div>
      );
    }
  }
  render() {
    return (
      <div id="tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
          style={{}}
        >
          <Tab style={{ color: "white", background: "#333333" }}>
            Web Applications
          </Tab>
          <Tab style={{ color: "white", background: "#333333" }}>
            Mobile Applications
          </Tab>
          {/*<Tab style={{ color: "white", background: "#333333" }}>
            School Projects
    </Tab>*/}
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
