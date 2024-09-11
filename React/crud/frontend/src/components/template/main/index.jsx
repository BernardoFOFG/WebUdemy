import "./style.css";
import React from "react";
import header from "../header";
import Header from "../header";

export default (props) => (
  <>
    <Header {...props}/>
    <main className="content">Conteúdo</main>
  </>
);
