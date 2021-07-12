import React from "react";

const Validacao = () => {
  const user = {
    nome: "João",
    email: "nome@domain.com",
    cpf: "000.000.000-00",
    telefone: "(XX) XXXXX-XXXX",
    conhecimentos: ["html", "css", "react"],
    validado: false,
  };

  const userStatus = true ? "Validado" : "Não Validado";

  const setValidation = () => {
    user.validado = true ? true : false;
  };

  const habilities = user.conhecimentos.map((conhecimento) => (
    <li>{conhecimento}</li>
  ));

  return (
    <>
      <div>Nome: {user.nome}</div>
      <div>Email: {user.email}</div>
      <div>CPF: {user.cpf}</div>
      <div>Telefone: {user.telefone}</div>
      <div>Conhecimentos: {habilities}</div>
      <div>Status: {userStatus}</div>
      <button onClick={setValidation}>Validar</button>
    </>
  );
};

export default Validacao;
