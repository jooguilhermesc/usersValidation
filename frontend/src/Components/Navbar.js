import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cadastro">Cadastro de Novo Usuário</Link>
          </li>
          <li>
            <Link to="/validacao">Validação</Link>
          </li>
          <li>
            <Link to="/consulta">Consulta</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
