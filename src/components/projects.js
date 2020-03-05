import React, { Component } from "react";

import { Container, Row, Col, Image, Card, CardDeck } from "react-bootstrap";
import { CardActions, Button, Grid, Cell, Tab, Tabs } from "react-mdl";

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
            <CardDeck style={{ opacity: "80%" }}>
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
                </CardActions>
              </Card>
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
                </CardActions>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://s3-us-west-2.amazonaws.com/tfportfolio.com/img/freshWears.jpg"
                  style={{ width: "100%", height: "30vh", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "2rem", textAlign: "center" }}>
                    Inventory
                  </Card.Title>
                  <Card.Text>
                    This is React/Redux web application that allows the user to
                    add watches to their shopping cart.
                  </Card.Text>
                </Card.Body>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/TravisFriday/inventory"
                  >
                    GitHub
                  </Button>
                </CardActions>
              </Card>
            </CardDeck>
          </Row>
        </Container>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <Container>
          <Row>
            <CardDeck>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://s3-us-west-2.amazonaws.com/tfportfolio.com/img/appview.png"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/TravisFriday/MyReads"
                  >
                    GitHub
                  </Button>
                </CardActions>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://s3-us-west-2.amazonaws.com/tfportfolio.com/img/appview.png"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/TravisFriday/MyReads"
                  >
                    GitHub
                  </Button>
                </CardActions>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://s3-us-west-2.amazonaws.com/tfportfolio.com/img/appview.png"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/TravisFriday/MyReads"
                  >
                    GitHub
                  </Button>
                </CardActions>
              </Card>
            </CardDeck>
          </Row>
        </Container>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is VueJS</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is MongoDB</h1>
        </div>
      );
    }
  }
  render() {
    return (
      <div id="tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
          style={{}}
        >
          <Tab style={{ color: "white", background: "#333333" }}>React</Tab>
          {/*<Tab style={{ color: "white", background: "#333333" }}>Python</Tab>*/}
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
