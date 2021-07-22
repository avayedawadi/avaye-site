import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from 'react-router-dom'
import './navbar.css'

const NavigationBar = () => {
  document.addEventListener("logout", () => {
    window.location.replace("https://www.youtube.com/watch?v=Gb2jGy76v0Y");
  });
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossOrigin="anonymous"
      />
       <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          class="navbar-toggler navHamburger"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                <Link to="/"><button className="navButton">Home</button></Link>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link">
              <Link to="/aboutme"><button className="navButton">About Me</button></Link>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link">
              <Link to="/work"><button className="navButton">My Work</button></Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;

/*
<li class="nav-item active">
              <a class="nav-link">
                <Link to="/wc">Web Components</Link>
              </a>
            </li>



 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav justify-content-center">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                <Link to="/">Home</Link>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link">
              <Link to="/storybookComponent">Storybooks</Link>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link">
              <Link to="/work">My Work</Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
            
      
      
      
      
      
  <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" href="#"> <Link to="/">Home</Link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"> <Link to="/aboutme">About Me</Link></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><Link to="/work">My Work</Link></a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#"><Link to="/gtri">GTRI</Link></a>
              <a class="dropdown-item" href="#"><Link to="/mypalate">MyPalate</Link></a>
            </div>
          </li>
        </ul>     
      */
