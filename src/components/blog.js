import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Blog extends Component {
  render() {
    return (
      <div className="about">
        <Grid>
          <Cell col={12} style={{ textAlign: "center" }}>
            <h1 style={{ color: "white", textShadow: "1px 5px 10px #000" }}>
              My Blog
            </h1>
            <p style={{ color: "white", textShadow: "1px 5px 10px #000" }}>
              Hello everybody, welcome to my blog. This series will tell stories
              all about me. Whether it's about my career as a software engineer,
              my hobbies, and things that has happened to me, good and bad. I
              will be genuine, not highlighting my successes but also my
              failures, and how I overcome those failures.
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Blog;
