import "./style.css";
import React from "react";
import header from "../header";
import Header from "../header";

export default (props) => (
  <>
    <Header {...props} />
    <main className="content container-fluid">
      <p className="p-3 mt-3">{props.children}</p>
    </main>
  </>
);
