import React from "react";
import './App.css'
import Home from "./pages/home";
import Skill from './pages/skills';
import Study from './pages/study';
import Award from './pages/awards'

const App = () => {
  return (
    <div>
      <Home />
      <Skill />
      <Study />
      <Award />
    </div>
  )
}

export default App;
