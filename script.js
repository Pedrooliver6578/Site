// Simulação de um carrinho de compras
let carrinho = [];

// Função para atualizar o ícone do carrinho com o número de itens
function atualizarCarrinho() {
    const carrinhoIcone = document.querySelector('#carrinho-icon');
    carrinhoIcone.innerText = `Carrinho (${carrinho.length})`;
}

// Adiciona interatividade aos botões de compra
document.querySelectorAll('.btn-comprar').forEach(button => {
    button.addEventListener('click', (event) => {
        const produtoElement = event.target.closest('.produto');
        const nomeProduto = produtoElement.querySelector('h3').innerText;
        const precoProduto = produtoElement.querySelector('p').innerText;

        // Adiciona o produto ao carrinho
        carrinho.push({ nome: nomeProduto, preco: precoProduto });
        alert(`${nomeProduto} foi adicionado ao carrinho!`);

        // Atualiza o carrinho
        atualizarCarrinho();
    });
});

// Exibe detalhes do produto ao clicar
document.querySelectorAll('.produto img').forEach(image => {
    image.addEventListener('click', (event) => {
        const produtoElement = event.target.closest('.produto');
        const nomeProduto = produtoElement.querySelector('h3').innerText;
        const precoProduto = produtoElement.querySelector('p').innerText;

        // Mostra uma janela modal com detalhes do produto
        const modal = document.querySelector('#modal');
        modal.querySelector('.modal-content h3').innerText = nomeProduto;
        modal.querySelector('.modal-content p').innerText = precoProduto;
        modal.style.display = 'block';
    });
});

// Fecha a janela modal ao clicar no botão de fechar
document.querySelector('.modal-close').addEventListener('click', () => {
    const modal = document.querySelector('#modal');
    modal.style.display = 'none';
});

// Função de filtro por categoria (simulação simples)
document.querySelector('#filtro').addEventListener('change', (event) => {
    const filtroSelecionado = event.target.value;
    document.querySelectorAll('.produto').forEach(produto => {
        const categoria = produto.dataset.categoria;
        if (filtroSelecionado === 'todos' || filtroSelecionado === categoria) {
            produto.style.display = 'block';
        } else {
            produto.style.display = 'none';
        }
    });
});