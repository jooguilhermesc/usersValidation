import React from "react";
import MaskedInput from "react-text-mask";

const Cadastro = () => {
  return (
    <>
      <h1>Formulário de cadastro de novo usuários</h1>
      <div>
        <label htmlFor="">Nome: </label>
        <input type="text" placeholder="nome completo" />
      </div>
      <div>
        <label htmlFor="">Email: </label>
        <input type="text" placeholder="email@domain.com" />
      </div>
      <div>
        <label htmlFor="">CPF: </label>
        <MaskedInput
          mask={[
            /[0-9]/,
            /\d/,
            /\d/,
            ".",
            /\d/,
            /\d/,
            /\d/,
            ".",
            /\d/,
            /\d/,
            /\d/,
            "-",
            /\d/,
            /\d/,
          ]}
          placeholder="000.000.000-00"
          guide={false}
        />
      </div>
      <div>
        <label htmlFor="">Telefone: </label>
        <MaskedInput
          mask={[
            "(",
            /[1-9]/,
            /\d/,
            ")",
            " ",
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            "-",
            /\d/,
            /\d/,
            /\d/,
            /\d/,
          ]}
          placeholder="(XX) XXXXX-XXXX"
          guide={true}
        />
      </div>
      <h3>Quais dessas tecnologias você possui conhecimento?</h3>
      <div>
        HTML: <input type="checkbox" value="html" />
        CSS: <input type="checkbox" value="css" />
        JavaScript: <input type="checkbox" value="javascript" />
        NodeJS: <input type="checkbox" value="nodejs" />
        React: <input type="checkbox" value="react" />
        NestJS: <input type="checkbox" value="nestjs" />
        Next.JS: <input type="checkbox" value="nextjs" />
        PowerBI: <input type="checkbox" value="powerbi" />
      </div>
      <button>Enviar Cadastro</button>
    </>
  );
};

export default Cadastro;
