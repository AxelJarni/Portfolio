import Nav from './components/layout/nav/Nav';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className='App'>
      <Nav />
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
