import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingpage";
import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";
import Blog from "./blog";
import BlogPage2 from "./blogpage";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route exact path="/blogpage/:id?" component={BlogPage2} />
    <Route path="/blog" component={Blog} />

    <Route component={LandingPage} />
  </Switch>
);

export default Main;
