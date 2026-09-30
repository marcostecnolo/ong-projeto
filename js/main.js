import { Views } from "./views.js";
import { configurarNavegacao } from "./interactions.js";
import { configurarFormulario } from "./forms.js";
import { configurarMascaras } from "./masks.js";


const app = document.querySelector("#app");


function renderizar(pagina) {

  if (!app) return;

  const rota =
    Views[pagina] ? pagina : "inicio";

  app.innerHTML =
    Views[rota]();

  configurarFormulario();
  configurarMascaras();

}


configurarNavegacao(renderizar);


const paginaInicial =
  window.location.hash.replace("#", "") || "inicio";


renderizar(paginaInicial);