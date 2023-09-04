// Ctrl + ; pra comentar automaticamente (várias linhas ou onde ta o cursor)

import { renderizarCatalogo } from "./src/cartaoProduto";
import { atualizarPrecoCarrinho, inicializarCarrinho, renderizarProdutosCarrinho } from "./src/menuCarrinho";
import { inicializarFiltros } from "./src/filtrosCatalogo";

renderizarCatalogo();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();

// Alt + seta p/ baixo pra levar a linha pra baixo