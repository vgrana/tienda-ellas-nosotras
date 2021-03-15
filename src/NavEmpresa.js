import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import "./App.css";

class Nav extends React.Component {
  render() {
    return (
      <ul class="nav nav-pills">
        {/* <li role="presentation">
          <Link to="/home">Home</Link>
        </li> */}
        <li role="presentation">
          <Link to="./">Galeria</Link>
        </li>
        <li role="presentation">
          <Link to="./contacto">Contactate con nosotras</Link>
        </li>
      </ul>
    );
  }
}

export default Nav;
