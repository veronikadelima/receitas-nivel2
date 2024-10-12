function getListaIngredientes(receita) {
    return receita.ingredientes
      .map(ingrediente => `<li>${ingrediente}</li>`)
      .reduce((acr, item) => acr + item, "<ul>") + "</ul>";
}

function getCard(receita) {
    return `
        <div class="card" style="width: 250px; margin: 10px;">
            <img src="${receita.imagem}" class="card-img-top" alt="${receita.título}">
            <div class="card-body">
                <h5 class="card-title">${receita.título}</h5>
                <div class="card-text">
                    ${getListaIngredientes(receita)}
                    <hr>
                    ${receita.preparo}
                </div>
            </div>
        </div>
    `;
}

function preencheCatalogo() {
    const pnlCatalogo = document.getElementById("pnlCatalogo");
    pnlCatalogo.innerHTML = receitas.map(getCard).reduce((acr, card) => acr + card, "");
}

