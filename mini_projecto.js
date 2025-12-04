
class Produto {
    constructor(id, nome, categoria, preco, stock){
        this.id = id,
        this.nome = nome,
        this.categoria = categoria,
        this.preco = preco, // em euros
        this.stock = stock
    };
    actualizarPreco() {
       this
    }
}

const earbuds = new Produto (984879, "Earbuds", "som e vídeo", 19.99, 10);
const radio = new Produto (813524, "Rádio", "som e vídeo", 24.99, 5);
const maqFoto = new Produto (763595, "Máquina fotográfica", "fotografia e drones", 74.99, 10);
const cartMemoria = new Produto (666027, "cartão de memória 256GB", "acessórios", 59.99, 20);

const inventario = [];

inventario.push(earbuds, radio, maqFoto, cartMemoria);

console.log(inventario);