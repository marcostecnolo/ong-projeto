export function configurarMascaras() {

  const cep = document.querySelector("#cep");
  const cpf = document.querySelector("#cpf");
  const telefone = document.querySelector("#telefone");


  if (cep) {

    cep.addEventListener("input", () => {

      let valor =
        cep.value.replace(/\D/g, "");

      valor = valor.slice(0, 8);

      if (valor.length > 5) {

        valor =
          valor.replace(
            /^(\d{5})(\d)/,
            "$1-$2"
          );

      }

      cep.value = valor;

    });

  }


  if (cpf) {

    cpf.addEventListener("input", () => {

      let valor =
        cpf.value.replace(/\D/g, "");

      valor = valor.slice(0, 11);

      valor =
        valor.replace(
          /^(\d{3})(\d)/,
          "$1.$2"
        );

      valor =
        valor.replace(
          /^(\d{3})\.(\d{3})(\d)/,
          "$1.$2.$3"
        );

      valor =
        valor.replace(
          /^(\d{3})\.(\d{3})\.(\d{3})(\d)/,
          "$1.$2.$3-$4"
        );

      cpf.value = valor;

    });

  }


  if (telefone) {

    telefone.addEventListener("input", () => {

      let valor =
        telefone.value.replace(/\D/g, "");

      valor = valor.slice(0, 11);

      valor =
        valor.replace(
          /^(\d{2})(\d)/,
          "$1-$2"
        );

      valor =
        valor.replace(
          /^(\d{2})-(\d{5})(\d)/,
          "$1-$2-$3"
        );

      telefone.value = valor;

    });

  }

}