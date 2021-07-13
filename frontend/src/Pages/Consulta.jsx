import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Consulta = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get("users/listar");
        setUsers(response.data);
        //console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);

  return (
    <>
      {users.map((user, index) => (
        <table>
          <tr>
            <th>Nome</th>
            <th>Status</th>
            <th>Consultar</th>
          </tr>
          <tr key={index}>
            <td>{user.name}</td>
            <td>
              <span>{user.isValidated}</span>
            </td>
            <td>
              <Link to={`/validacao/${user.id}`}>Consultar</Link>
            </td>
          </tr>
        </table>
      ))}
    </>
  );
};

export default Consulta;
