import React from "react";
import { Link } from "react-router-dom";
// import Validacao from "./Validacao";

const Consulta = () => {
  return (
    <>
      <table>
        <tr>
          <th>Nome</th>
          <th>Status</th>
          <th>Consultar</th>
        </tr>
        <tr>
          <td>João</td>
          <td>
            <span>Não validado</span>
          </td>
          <td>
            <Link to="/validacao">Consultar</Link>
          </td>
        </tr>
        <tr>
          <td>Guilherme</td>
          <td>
            <span>Validado</span>
          </td>
          <td>
            <Link to="/validacao">Consultar</Link>
          </td>
        </tr>
      </table>
    </>
  );
};

export default Consulta;
