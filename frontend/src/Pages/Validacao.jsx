import React from "react";
import { useState } from "react";

const Validacao = () => {
  const user = {
    id: 0,
    nome: "João",
    email: "nome@domain.com",
    cpf: "000.000.000-00",
    telefone: "(XX) XXXXX-XXXX",
    conhecimentos: ["html", "css", "react"],
    validado: 0,
  };

  const arrayUserStatus = useState(0);
  let userStatus = arrayUserStatus[0];
  const setUserStatus = arrayUserStatus[1];

  function validar() {
    setUserStatus(1);
  }

  const habilities = user.conhecimentos.map((conhecimento, i) => (
    <li key={i}>{conhecimento}</li>
  ));

  return (
    <>
      <div>Nome: {user.nome}</div>
      <div>Email: {user.email}</div>
      <div>CPF: {user.cpf}</div>
      <div>Telefone: {user.telefone}</div>
      <div>Conhecimentos: {habilities}</div>
      <div>Status: {userStatus === 0 ? "NÃO VALIDADO" : "VALIDADO"}</div>
      <button onClick={validar}>Validar</button>
    </>
  );
};
export default Validacao;
