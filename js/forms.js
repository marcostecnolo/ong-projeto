import { salvarCadastro } from "./storage.js";


export function configurarFormulario() {

  const form =
    document.querySelector(".custom-form");

  if (!form) return;


  const campos =
    form.querySelectorAll("input");


  campos.forEach((campo) => {

    const mensagem =
      document.createElement("small");

    mensagem.className = "field-error";

    mensagem.id =
      `${campo.id}-erro`;

    campo.insertAdjacentElement(
      "afterend",
      mensagem
    );

    campo.setAttribute(
      "aria-describedby",
      mensagem.id
    );


    campo.addEventListener(
      "blur",
      () => validarCampo(campo)
    );


    campo.addEventListener(
      "input",
      () => {

        if (campo.value.trim() !== "") {
          validarCampo(campo);
        } else {
          limparErro(campo);
        }

      }
    );

  });


  form.addEventListener("submit", (event) => {

    let formularioValido = true;


    campos.forEach((campo) => {

      const valido =
        validarCampo(campo);

      if (!valido) {
        formularioValido = false;
      }

    });


    if (!formularioValido) {

      event.preventDefault();

      return;

    }


    event.preventDefault();


    const dados = {

      nome:
        document.querySelector("#nome").value.trim(),

      email:
        document.querySelector("#email").value.trim(),

      nascimento:
        document.querySelector("#nascimento").value,

      cep:
        document.querySelector("#cep").value.trim(),

      cidade:
        document.querySelector("#cidade").value.trim(),

      estado:
        document.querySelector("#estado").value
          .trim()
          .toUpperCase(),

      cpf:
        document.querySelector("#cpf").value.trim(),

      telefone:
        document.querySelector("#telefone").value.trim()

    };


    salvarCadastro(dados);


    const status =
      document.querySelector("#cadastro-status");


    if (status) {

      status.textContent =
        "Cadastro realizado com sucesso!";

    }


    form.reset();


    campos.forEach((campo) => {
      limparErro(campo);
    });

  });

}


/* ==============================
   VALIDAÇÃO DOS CAMPOS
================================ */

function validarCampo(campo) {

  const mensagem =
    document.querySelector(
      `#${campo.id}-erro`
    );


  if (!mensagem) return true;


  limparErro(campo);


  if (campo.value.trim() === "") {

    mostrarErro(
      campo,
      "Este campo é obrigatório."
    );

    return false;

  }


  if (
    campo.type === "email" &&
    !campo.validity.valid
  ) {

    mostrarErro(
      campo,
      "Digite um e-mail válido. Ex.: nome@email.com"
    );

    return false;

  }


  if (campo.id === "cep") {

    const formatoCep =
      /^\d{5}-\d{3}$/;

    if (!formatoCep.test(campo.value)) {

      mostrarErro(
        campo,
        "Digite o CEP no formato 00000-000."
      );

      return false;

    }

  }


  if (campo.id === "cpf") {

    const formatoCpf =
      /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    if (!formatoCpf.test(campo.value)) {

      mostrarErro(
        campo,
        "Digite o CPF no formato 000.000.000-00."
      );

      return false;

    }

  }


  if (campo.id === "telefone") {

    const formatoTelefone =
      /^\d{2}-\d{5}-\d{4}$/;

    if (!formatoTelefone.test(campo.value)) {

      mostrarErro(
        campo,
        "Digite o telefone no formato 11-99999-9999."
      );

      return false;

    }

  }


  if (campo.id === "estado") {

    const formatoEstado =
      /^[A-Za-z]{2}$/;

    if (!formatoEstado.test(campo.value)) {

      mostrarErro(
        campo,
        "Digite a sigla do estado com 2 letras. Ex.: SP"
      );

      return false;

    }

  }


  if (!campo.validity.valid) {

    mostrarErro(
      campo,
      "Preencha este campo no formato correto."
    );

    return false;

  }


  return true;

}


/* ==============================
   MOSTRAR ERRO
================================ */

function mostrarErro(campo, texto) {

  const mensagem =
    document.querySelector(
      `#${campo.id}-erro`
    );


  campo.classList.add("input-error");

  campo.setAttribute(
    "aria-invalid",
    "true"
  );


  if (mensagem) {

    mensagem.textContent = texto;

  }

}


/* ==============================
   LIMPAR ERRO
================================ */

function limparErro(campo) {

  const mensagem =
    document.querySelector(
      `#${campo.id}-erro`
    );


  campo.classList.remove(
    "input-error"
  );


  campo.removeAttribute(
    "aria-invalid"
  );


  if (mensagem) {

    mensagem.textContent = "";

  }

}