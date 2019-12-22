import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header 
            className="header-color"
            title={
              <Link style={{ textDecoration: "none", color: "white", fontSize: '24px' }} to="/">
                MyPortfolio
              </Link>
            }scroll
          >
            <div className= "links">
              <Navigation>
                <Link to="/resume" style={{ color: '#fff', fontSize: '18px' }}>Resume</Link>
                <Link to="/blog" style={{ color: '#fff', fontSize: '18px'}}>Blog</Link>
                <Link to="/projects" style={{ color: '#fff', fontSize: '18px' }}>Projects</Link>
                <Link to="/contact" style={{ color: '#fff', fontSize: '18px' }}>Contact</Link>
              </Navigation>
            </div>
          </Header>
          
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                MyPortfolio
              </Link>
            }
          > <div className= "links">
              <Navigation>
              <Link to="/resume" style={{ color: '#000', fontSize: '18px' }}>Resume</Link>
                <Link to="/blog" style={{ color: '#000', fontSize: '18px'}}>Blog</Link>
                <Link to="/projects" style={{ color: '#000', fontSize: '18px' }}>Projects</Link>
                <Link to="/contact" style={{ color: '#000', fontSize: '18px' }}>Contact</Link>
              </Navigation>
            </div>
          </Drawer> 

          
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}
export default App;
