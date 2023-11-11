class Lista {
    constructor() {
        this.itens = [];
    }

    adicionarItem(item) {
        this.itens.push(item);
    }

    removerItem(id) {
        const index = this.itens.findIndex(item => item.codigoBarras === Number(id));
        if (index !== -1) {
            this.itens.splice(index, 1);
        }
    }     

    mostrarLista() {
        this.itens.forEach(item => {
            console.log(item);
        });
    }
}

export default Lista;