import { 
    desenharProdutoCarrinhoSimples, 
    lerLocalStorage, 
    apagarDoLocalStorage,
    salvarLocalStorage,
} from "./src/utilidades";

function desenharProdutosCheckout(){
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};

    for(const idProduto in idsProdutoCarrinhoComQuantidade){
        desenharProdutoCarrinhoSimples(idProduto, 'container-produtos-checkout', idsProdutoCarrinhoComQuantidade[idProduto]);
    }
}

function finalizarCompra(evento){
    evento.preventDefault(); // O comportamento padrão do form é mandar as informações p/ algum lugar, mas a gente tá dizendo pra trocar o endereço
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};
    if(Object.keys(idsProdutoCarrinhoComQuantidade).length === 0){
        return;
    }

    const dataAtual = new Date();
    const pedidoFeito = {
        dataPedido: dataAtual,
        pedido: idsProdutoCarrinhoComQuantidade,
    }
    const historicoDePedidos = lerLocalStorage('historico') ?? [];
    const historicoDePedidosAtualizado = [pedidoFeito, ...historicoDePedidos];
    // ... = operador de espalhamento (pra lista dentro de outra lista não vir como um elemento só)
    
    salvarLocalStorage('historico', historicoDePedidosAtualizado);
    apagarDoLocalStorage('carrinho');

    window.location.href = './pedidos.html';
}

desenharProdutosCheckout();

document.addEventListener('submit', (evt) => finalizarCompra(evt));
//  Simples assim porque o botão no HTML já tem o atributo submit e a página tem só 1 form