import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import ListSubheader from "@material-ui/core/ListSubheader";
import { Link } from "react-router-dom";
import { BlogPost } from "../data/blogpost";

//<Link to={`/blog/${tile.id}`}>

const useStyles = makeStyles(theme => ({
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

function Blog() {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      style={{ background: "transparent", paddingTop: "0px" }}
    >
      <GridList cellHeight={180} spacing={12} className={classes.gridList}>
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
        {BlogPost.map(tile => (
          <GridListTile
            key={tile.img}
            style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
          >
            <img src={tile.img} alt={tile.title} />

            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <Link to={`/blogpage/${tile.id}`}>
                  <IconButton
                    aria-label={`info about ${tile.title}`}
                    className={classes.icon}
                  >
                    <InfoIcon />
                  </IconButton>{" "}
                </Link>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default Blog;
