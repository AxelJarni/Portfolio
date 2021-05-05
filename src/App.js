import Nav from './components/layout/nav/Nav'
import Home from './components/home/Home'
import Projects from './components/projects/Projects'
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
    </div>
  );
}

export default App;
