import React, { Component } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { makeStyles } from "@material-ui/core/styles";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { Link } from "react-router-dom";
import axios from "axios";
import _ from "lodash";

let config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
  }
};

export default class blogMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      blog: {}
    };
  }
  classes = makeStyles(theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      width: 700
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)"
    }
  }));

  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url =
      "https://0yc3i3tqki.execute-api.us-west-2.amazonaws.com/latest/api/blog";
    axios.get(proxyurl + url, config).then(response => {
      this.setState({
        loading: false,
        blog: response.data
      });
    });
  }

  renderBlogs() {
    return _.map(this.state.blog, b => {
      console.log(b);
      return (
        <GridListTile
          key={b.id}
          className={this.classes.gridList}
          style={{
            paddingLeft: "1rem",
            paddingRight: "1rem"
            //margin: "0px 400px 0px"
          }}
        >
          <img src={b.image} alt={b.title} />

          <GridListTileBar
            title={b.title}
            subtitle={<span>by: Travis Friday </span>}
            actionIcon={
              <Link to={`/blogpage/${b.id}`}>
                <IconButton
                  aria-label={`info about ${b.title}`}
                  className={this.classes.icon}
                >
                  <InfoIcon />
                </IconButton>{" "}
              </Link>
            }
          />
        </GridListTile>
      );
    });
  }

  render() {
    if (this.state.loading === true) {
      return <h1>Loading...</h1>;
    }
    return (
      <div
        className={this.classes.root}
        style={{ background: "transparent", paddingTop: "0px" }}
      >
        <GridList
          cellHeight={180}
          spacing={12}
          className={this.classes.gridList}
        >
          <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
            <ListSubheader component="div">
              <h1
                style={{
                  fontSize: "2.5rem",
                  fontFamily: "Oxygen",
                  color: "white",
                  textAlign: "center",
                  textShadow: "1px 5px 10px #000"
                }}
              >
                My Blog
              </h1>
            </ListSubheader>
          </GridListTile>

          {this.renderBlogs()}
        </GridList>
      </div>
    );
  }
}
