import Nav from './components/layout/nav/Nav';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/layout/footer/Footer';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import jump from 'jump.js'

const NavLinks = document.querySelectorAll('.nav-link');
NavLinks.forEach(navLink => {
    navLink.addEventListener('click', (e) => {
        e.preventDefault();
        let target = navLink.getAttribute('href');
        jump(target);
    });
});

function App() {
  return (
    <div className='App'>
      <Nav />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
