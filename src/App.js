import React from "react";
import './App.css'
import Home from "./pages/home";

const App = () => {
  return (
    <div className="text">
      <h2>Development</h2>
      <p>
        I specialize in developing websites using Webflow, a powerful platform that allows for easy customization and responsive design. I have experience building websites for a variety of industries, from small businesses to large corporations. My focus is always on creating functional and smooth websites that are accessible and generate traffic. Webflow Development
      </p>
      <Button />
    </div>
  )
}

const Button = ({ }) => {
  return (
    <>
      <button><a href="#">Webflow</a></button>
      <button><a href="#">Development</a></button>
    </>
  )
}

export default App;
