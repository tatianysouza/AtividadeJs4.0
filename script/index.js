import Lista from './lista.js';

const minhaLista = new Lista();

document.getElementById('adicionar').addEventListener('click', function(event) {
    event.preventDefault();    
    let nome = document.getElementById('nome').value;
    let valor = parseFloat(document.getElementById('valor').value);
    let item = {codigoBarras: Date.now(), nome: nome, valor: valor, comprado: false};
    minhaLista.adicionarItem(item);

    document.getElementById('nome').value = '';
    document.getElementById('valor').value = '';
    minhaLista.mostrarLista();
    AtualizarTabela();
});

function AtualizarTabela() {
    let tabela = document.getElementById('tabelaCompras').getElementsByTagName('tbody')[0];
    tabela.innerHTML = '';
    for (let compras of minhaLista.itens) {
        let linha = tabela.insertRow();
        let produto = linha.insertCell(0);
        let preco = linha.insertCell(1);
        let checkboxCell = linha.insertCell(2); 

        let { checkbox, label } = criarCheckbox(tabela);
        checkbox.checked = compras.comprado;
        checkbox.addEventListener('change', function() {
            compras.comprado = this.checked;
        });
        checkboxCell.appendChild(checkbox);
        checkboxCell.appendChild(label);

        let botaoCell = linha.insertCell(3);
        let botao = criarBotao();
        botao.dataset.id = compras.codigoBarras;
        botao.addEventListener('click', function() {
            minhaLista.removerItem(compras);
            AtualizarTabela();
        });        
        
        botaoCell.appendChild(botao);

        produto.textContent = compras.nome;
        preco.textContent = compras.valor.toFixed(2);
    }
}

function criarBotao() {
    let botao = document.createElement('button');
    botao.textContent = "Remover";
    botao.classList.add('botaoRemover');
    return botao;
}

function criarCheckbox(tabela) {
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'meuCheckbox' + tabela.rows.length; 
    let label = document.createElement('label');
    label.htmlFor = checkbox.id;
    return { checkbox, label };
}
