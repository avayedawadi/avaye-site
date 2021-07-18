import React from "react";
import styled from "styled-components";

import { Link } from "react-scroll";
export default function Navbar() {
  return (
    <>
      <NavbarStyled>
        <div className="header">
          <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Section 1
          </Link>
          <Link
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Section 2
          </Link>
          <Link
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Section 3
          </Link>
        </div>
        <div className="scrolling-buttons">
          <Wrapper>
            <OnScreenScrolling />
          </Wrapper>
        </div>
      </NavbarStyled>
      <nav class="navbar sticky-top navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Sticky top
        </a>
      </nav>
    </>
  );
}
