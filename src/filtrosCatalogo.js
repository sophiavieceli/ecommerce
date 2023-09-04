const catalogoProdutos = document.getElementById('container-produto');

// document olha pro HTML inteiro, mas dá pra fazer buscas mais específicas

function exibirTodos(){
    const produtosEscondidos = Array.from(catalogoProdutos.getElementsByClassName('hidden'));

    for(const produto of produtosEscondidos){
        produto.classList.remove('hidden');
    }
}

function esconderMasculinos(){
    exibirTodos();
    const produtosMasculinos = Array.from(catalogoProdutos.getElementsByClassName('masculino'));

    for (const produto of produtosMasculinos){
        produto.classList.add('hidden');
    }
}

function esconderFemininos(){
    exibirTodos();
    const produtosFemininos = Array.from(catalogoProdutos.getElementsByClassName('feminino'));

    for (const produto of produtosFemininos){
        produto.classList.add('hidden');
    }
}

export function inicializarFiltros(){
    document.getElementById('exibir-todos').addEventListener('click', exibirTodos);
    document.getElementById('exibir-femininos').addEventListener('click', esconderMasculinos);
    document.getElementById('exibir-masculinos').addEventListener('click', esconderFemininos);
}