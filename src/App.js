import Nav from './components/layout/nav/Nav'
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
    </div>
  );
}

export default App;
