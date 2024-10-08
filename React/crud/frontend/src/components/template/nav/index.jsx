import { Link } from "react-router-dom";
import "./style.css";
import React from "react";

export default (props) => (
  <aside className="menu-area">
    <nav className="menu">
      <Link to="/">
        <i className="fa fa-home"></i>
        Início
      </Link>
      <Link to="/users">
        <i className="fa fa-home"></i>
        Usuários
      </Link>
    </nav>
  </aside>
);
