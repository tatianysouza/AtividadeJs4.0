import Lista from './lista.js';

const minhaLista = new Lista();

window.addEventListener("load", function (event) {
    let itensSalvos = localStorage.getItem('itens');
    if (itensSalvos) {
        minhaLista.itens = JSON.parse(itensSalvos);
        minhaLista.listar();
    }
});

document.getElementById('adicionar').addEventListener('click', function(event) {
    event.preventDefault();    
    let nome = document.getElementById('nome').value;
    let valor = parseFloat(document.getElementById('valor').value);
    let item = {codigoBarras: Date.now(), nome: nome, valor: valor, comprado: false};
    minhaLista.adicionarItem(item);
    localStorage.setItem('itens', JSON.stringify(minhaLista.itens));

    document.getElementById('nome').value = '';
    document.getElementById('valor').value = '';
    minhaLista.listarconsole();
    minhaLista.listar();
});