import React, { cloneElement } from "react";

export const Pai = ({ nome, sobrenome, children }) => {
  return (
    <div>
      <h1>
        {nome} {sobrenome}
      </h1>
      <h2>Filhos</h2>
      <ul>
        {React.Children.map(children, (child) =>
          cloneElement(child, { sobrenomePai: sobrenome })
        )}
      </ul>
    </div>
  );
};
