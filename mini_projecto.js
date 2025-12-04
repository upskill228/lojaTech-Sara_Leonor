// Criação da classe dos produtos do inventário

class Produto {
    constructor(id, nome, categoria, preco, stock){
        this.id = id,
        this.nome = nome,
        this.categoria = categoria,
        this.preco = preco, // em euros
        this.stock = stock
    };
    // Ponto 1. Actualizar Preço:
    actualizarPreco(novoPreco) {
        this.preco = novoPreco;
        console.log(`O preço actualizado do produto ${this.nome} é ${this.preco} euros.`);
    };
}

// Definir quais os produtos e propriedades

const earbuds = new Produto (984879, "Earbuds", "som e vídeo", 19.99, 10);
const radio = new Produto (813524, "Rádio", "som e vídeo", 24.99, 0);
const maqFoto = new Produto (763595, "Máquina fotográfica", "fotografia e drones", 74.99, 10);
const cartMemoria = new Produto (666027, "cartão de memória 256GB", "acessórios", 59.99, 20);

// Criacção do inventário (vazio)
const inventario = [];

// Adicionar ao inventário os produtos criados

inventario.push(earbuds, radio, maqFoto, cartMemoria);

// Ponto 3. Valor Total do Inventário:

function valorTotalInventario() {
    let valorTotal = 0;
    for (let i=0; i<inventario.length; i++) {
       let precoProduto = inventario[i].preco * inventario[i].stock;
       valorTotal += precoProduto;
    }
    console.log(valorTotal);
    return valorTotal.toFixed(2);
}

function limpezaStock() {
    for (let i=0; i<inventario.length; i++) {
       if (inventario[i].stock == 0) {
            inventario.splice(inventario[i], 1);
       }
    }
}

function filtroCategoria(categoria) {
    for (let i=0; i<inventario.length; i++) {
        
        console.log(inventario[i]);
    }
};

// Verificação do inventário completo

console.log(inventario);

// Ponto 1. Actualizar preço de um produto específico

earbuds.actualizarPreco(21.99);

// Ponto 3. Mostrar o valor Total do Inventário

valorTotalInventario();

limpezaStock();
console.log(inventario);

filtroCategoria("acessórios");