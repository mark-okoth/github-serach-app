import React from "react";
import propTypes from "prop-types";

const Navbar = (props) =>{



    return (
      <nav className="Navbar z-depth-0">
        <div className="nav-wrapper blue z-depth-0">
          <div className="brand-logo hide-on-med-and-down">
            <a href="home">{props.title}</a>
          </div>
          <div className="container">
            <div className="nav-content right  center-on-med-and-down">
              <ul>
                <li>
                  <a href="home">home</a>
                </li>
                <li>
                  <a href="home">about</a>
                </li>
                <li>
                  <a href="home">contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  
}

Navbar.defaultProps = {
  title: "github finder",
  icon: "icon",
};

Navbar.propTypes = {
  title: propTypes.string.isRequired,
};
export default Navbar;
