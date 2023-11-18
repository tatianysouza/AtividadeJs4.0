class Lista {
    constructor() {
        this.itens = [];
    }

    adicionarItem(item) {
        this.itens.push(item);
    }

    removerItem(item) {
        const index = this.itens.findIndex(i => i.codigoBarras === item.codigoBarras);
        if (index !== -1) {
            this.itens.splice(index, 1);
        }
        localStorage.setItem('itens', JSON.stringify(this.itens));
    }        

    marcarItem(item) {
        const itemLista = this.itens.find(i => i.codigoBarras === item.codigoBarras);
        if (itemLista) {
            itemLista.comprado = true;
        }
        localStorage.setItem('itens', JSON.stringify(this.itens));
    }

    desmarcarItem(item) {
        const itemLista = this.itens.find(i => i.codigoBarras === item.codigoBarras);
        if (itemLista) {
            itemLista.comprado = false;
        }
        localStorage.setItem('itens', JSON.stringify(this.itens));
    }

    listarconsole() {
        this.itens.forEach(item => {
            console.log(item);
        });
    }

    listar() {
        let tabela = document.getElementById('tabelaCompras').getElementsByTagName('tbody')[0];
        tabela.innerHTML = '';
        for (let compras of this.itens) {
            let linha = tabela.insertRow();
            let produto = linha.insertCell(0);
            let preco = linha.insertCell(1);
            let checkboxCell = linha.insertCell(2); 

            let { checkbox, label } = this.criarCheckbox(tabela);
            checkbox.checked = compras.comprado;
            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    this.marcarItem(compras);
                } else {
                    this.desmarcarItem(compras);
                }
            });
            checkboxCell.appendChild(checkbox);
            checkboxCell.appendChild(label);

            let botaoCell = linha.insertCell(3);
            let botao = this.criarBotao();
            botao.dataset.id = compras.codigoBarras;
            botao.addEventListener('click', () => {
                this.removerItem(compras);
                this.listar();
            });        
        
            botaoCell.appendChild(botao);

            produto.textContent = compras.nome;
            preco.textContent = compras.valor.toFixed(2);
        }
    }

    criarBotao() {
        let botao = document.createElement('button');
        botao.textContent = "Remover";
        botao.classList.add('botaoRemover');
        return botao;
    }

    criarCheckbox(tabela) {
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'meuCheckbox' + tabela.rows.length; 
        let label = document.createElement('label');
        label.htmlFor = checkbox.id;
        return { checkbox, label };
    }
}

export default Lista;