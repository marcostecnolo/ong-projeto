export function configurarNavegacao(renderizar) {

  document.addEventListener("click", (event) => {

    const link =
      event.target.closest("[data-rota]");

    if (!link) return;

    event.preventDefault();

    const pagina =
      link.dataset.rota;

    window.location.hash = pagina;

  });


  window.addEventListener("hashchange", () => {

    const pagina =
      window.location.hash.replace("#", "") || "inicio";

    renderizar(pagina);

  });

}