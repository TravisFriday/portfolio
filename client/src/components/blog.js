import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import ListSubheader from "@material-ui/core/ListSubheader";
import { Link } from "react-router-dom";

const tileData = [
  {
    id: 1,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfnnu1vvg-zYBpjRQzR3E1FYHCkAHDR6tMxYUZ-1pzFYr0s4rb",
    title: "Here's how I created my portfolio website",
    author: "Travis Friday"
  },
  {
    id: 2,
    img:
      "https://blog.hyperiondev.com/wp-content/uploads/2018/09/Blog-Article-MERN-Stack.jpg",
    title: "Team MERN Baby",
    author: "Travis Friday"
  },
  {
    id: 3,
    img: "https://graphql.org/img/og_image.png",
    title: "My thoughts on GraphQL",
    author: "Travis Friday"
  },
  {
    id: 4,
    img:
      "https://inteng-storage.s3.amazonaws.com/img/iea/QjOdqW0AGd/sizes/computer-eng-salaries-worldwide_resize_md.jpg",
    title: "Converting from Computer engineer to full-stack developer",
    author: "Travis Friday"
  },
  {
    id: 5,
    img:
      "https://careers.workopolis.com/wp-content/uploads/sites/5/2018/03/friendly-caucasian-employers-and-africanamerican-applicant-welcoming-picture-id695760158.jpg",
    title: "Interview Preparation",
    author: "Travis Friday"
  },
  {
    id: 6,
    img:
      "https://s3.amazonaws.com/tjn-blog-images/wp-content/uploads/2015/11/20001153/4-Resume-Building-Tips-for-2016.jpg",
    title: "Resume Building",
    author: "Travis Friday"
  },
  {
    id: 7,
    img:
      "https://kinsta.com/wp-content/uploads/2018/09/linkedin-statistics.png",
    title: "Streamlining your LinkedIn for your Career",
    author: "Travis Friday"
  },
  {
    id: 8,
    img:
      "https://www.elegantthemes.com/blog/wp-content/uploads/2019/11/what-is-cover-letter.png",
    title: "Cover Letters, Cover Letters, Cover Letters",
    author: "Travis Friday"
  },
  {
    id: 9,
    img: "https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1.png",
    title: "GitHub is your best friend!",
    author: "Travis Friday"
  }
];

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
              My Blog Posts (Still Under Construction)
            </h1>
          </ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <Link to={`/blog/${tile.id}`}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${tile.title}`}
                    className={classes.icon}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default Blog;
