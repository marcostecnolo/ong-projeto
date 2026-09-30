export function salvarCadastro(dados) {

  const cadastros =
    JSON.parse(
      localStorage.getItem("cadastros-recomecar")
    ) || [];


  cadastros.push(dados);


  localStorage.setItem(
    "cadastros-recomecar",
    JSON.stringify(cadastros)
  );

}


export function obterCadastros() {

  return JSON.parse(
    localStorage.getItem("cadastros-recomecar")
  ) || [];

}