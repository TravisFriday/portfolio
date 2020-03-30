import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
//import { BlogPost } from "../data/blogpost";
import axios from "axios";

export default class BlogPage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      blog: {}
    };
    console.log("whatsup");
  }
  classes = makeStyles({
    root: {
      minWidth: 275
    }
  });

  componentWillMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url =
      "https://mfc2xycfk2.execute-api.us-west-2.amazonaws.com/latest/api/blog/";
    const id = this.props.match.params.id;
    axios.get(proxyurl + url + id).then(response => {
      this.setState({
        loading: false,
        blog: response.data
      });
    });
  }

  //params = this.props.match;

  render() {
    //const post = blog.filter(b => (b.id = params.id));
    //console.log(post);
    return (
      <div
        key={this.state.blog.id}
        style={{ background: "white", height: "100%" }}
      >
        <Container maxWidth="md">
          <Card
            className={this.classes.root}
            variant="outlined"
            style={{
              //width: 100%,
              marginBottom: "5rem",
              textAlign: "center",
              borderBottom: "none",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none"
            }}
          >
            <h1
              style={{
                fontFamily:
                  "medium-content-serif-font, Georgia, Cambria, Times New Roman, Times, serif"
              }}
            >
              {this.state.blog.title}
            </h1>
            <img
              src={this.state.blog.image}
              alt={this.state.blog.title}
              width="60%"
              style={{
                marginBottom: "3rem",
                marginTop: "10px"
              }}
            ></img>

            <p
              style={{
                lineHeight: "1.58",

                fontSize: "21px",
                fontFamily:
                  "medium-content-serif-font, Georgia, Cambria, Times New Roman, Times, serif",
                paddingLeft: "3rem",
                paddingRight: "3rem",
                textAlign: "left"
              }}
            >
              {this.state.blog.body}
            </p>
          </Card>
        </Container>
      </div>
    );
  }
}
