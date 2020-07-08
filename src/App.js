import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './App.css';
import Footer from "./components/Footer";
import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      title: 'Aakash Baranwal',
      headerLinks: [
        {title: 'Home', path: '/reality/'},
        {title: 'Experience', path: '/reality/experience'},
        {title: 'Projects', path: '/reality/projects'},
        {title: 'Contact Me', path: '/reality/contact'}
      ],

      home: {
        title: "Be Relentless and Patient",
        subTitle: "Make an Impact",
        text: "Aakash Baranwal"
      },
      experience: {
        title: "About Me"
      },
      projects: {
        title: "Projects"
      },
      contact: {
        title: "Let's Talk"
      }

    }
  }


  render(){
  return (
    <Router>
    <Container className="p-0" fluid={true}>

    <Navbar className="border-bottom" bg="transparent" expand="lg">
      <Navbar.Brand>Aakash Baranwal</Navbar.Brand>

      <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
      <Navbar.Collapse id="navbar-toggle">
        <Nav className="ml-auto">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/experience">Experience</Link>
        <Link className="nav-link" to="/project">Projects</Link>
        <Link className="nav-link" to="/contact">Contact</Link>

        </Nav>
      </Navbar.Collapse>

    </Navbar>

    <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
    <Route path="/experience" exact render={() => <ExperiencePage title={this.state.experience.title} />} />
    <Route path="/project" exact render={() => <ProjectPage title={this.state.projects.title} />} />
    <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} />} />

    <Footer />

    </Container>
    </Router>
  );
}
}

export default App;
