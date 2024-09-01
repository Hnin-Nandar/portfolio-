import React from "react";
import './App.css'
import Home from "./pages/home";
import Skill from './pages/skills';
import Study from './pages/study';
import Contact from './pages/contact';

const App = () => {
  return (
    <div className="main">
      <Home />
      <Skill />
      <Study />
      <Contact />
    </div>
  )
}

export default App;
