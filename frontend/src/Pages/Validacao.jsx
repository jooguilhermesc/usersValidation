import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Validacao = () => {
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

  // const arrayUserStatus = useState(0);
  // let userStatus = arrayUserStatus[0];
  // const setUserStatus = arrayUserStatus[1];

  // function validar() {
  //   setUserStatus(1);
  // }

  // const habilities = user.conhecimentos.map((conhecimento, i) => (
  //   <li key={i}>{conhecimento}</li>
  // ));

  return (
    <>
      {users.map((user) => (
        <ul key={user.id}>
          <li>Nome: {user.name}</li>
          <li>E-mail: {user.email}</li>
          <li>CPF: {user.cpf}</li>
          <li>Telefone: {user.phoneNumber}</li>
          <li>
            Conhecimentos:{" "}
            {user.habilities.map((hability, i) => (
              <ul key={i}>
                <li>{hability}</li>
              </ul>
            ))}
          </li>
          <li>Status: {user.isValidated}</li>
        </ul>
      ))}
      <button onClick={console.log(users)}>Validar</button>
    </>
  );
};
export default Validacao;
