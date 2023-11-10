class Lista {
    constructor() {
        this.itens = [];
    }

    adicionarItem(item) {
        this.itens.push(item);
    }

    removerItem(item) {
        const index = this.itens.indexOf(item);
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