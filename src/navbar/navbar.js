import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import {Link} from 'react-router-dom'

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
        <a class="navbar-brand">
          Avaye's Site
        </a>
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
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                <Link to="/">Home</Link>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link">
                <Link to="/wc">Web Components</Link>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link">
              <Link to="/storybookComponent">Storybooks</Link>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
