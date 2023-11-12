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

    listar() {
        this.itens.forEach(item => {
            console.log(item);
        });
    }
}

export default Lista;
