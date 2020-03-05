import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { BlogPost } from "../data/blogpost";

const blog = [
  {
    id: "0",
    title: "Here's how I created my portfolio website",
    date: "",
    author: "Travis Friday",
    img: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfnnu1vvg-zYBpjRQzR3E1FYHCkAHDR6tMxYUZ-1pzFYr0s4rb"
    ],
    text:
      "First I looked up existing portfolios on the web in order to gain a proper vision on what it should look like. I also looked at tutorials on youtube on how to create a portfolio, then I modified it to fit the existing design that I came up with. I started adding on features overtime from displaying projects to my resume. I hava also created a blog site in order to use this medium to express my views. "
  },
  {
    id: "1",
    title: "Team MERN Babyy",
    date: "",
    author: "Travis Friday",
    img: [
      "https://blog.hyperiondev.com/wp-content/uploads/2018/09/Blog-Article-MERN-Stack.jpg"
    ],
    text: "heyyy"
  },
  {
    id: "2",
    title: "Team MERN Babyy",
    date: "",
    author: "Travis Friday",
    img: [
      "https://blog.hyperiondev.com/wp-content/uploads/2018/09/Blog-Article-MERN-Stack.jpg"
    ],
    text: ""
  }
];

const useStyles = makeStyles({
  root: {
    minWidth: 275
  }
});

function BlogPage(props) {
  const { params } = props.match;
  const classes = useStyles();
  //const post = blog.filter(b => (b.id = params.id));
  //console.log(post);

  return (
    <div style={{ background: "white", height: "100%" }}>
      <Container maxWidth="md">
        <Card
          className={classes.root}
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
            {BlogPost[params.id].title}
          </h1>
          <img
            src={BlogPost[params.id].img}
            width="600px"
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
            {blog[params.id].text}
          </p>
        </Card>
      </Container>
    </div>
  );
}

export default BlogPage;
