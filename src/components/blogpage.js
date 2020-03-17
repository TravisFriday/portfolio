import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { BlogPost } from "../data/blogpost";

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
            {BlogPost[params.id].body}
          </p>
        </Card>
      </Container>
    </div>
  );
}

export default BlogPage;
