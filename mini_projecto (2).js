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
    reporStock(quantidade) {
        this.stock = this.stock + quantidade; 
    };
    validacaoNivelStock () {
        let mensagemReposicao = (`Alerta: ${this.nome} fora de stock. Automatizada reposição de níveis para valor mínimo de 5 unidades`); 
        if (this.stock == 0) {
            console.warn("FORA DE STOCK")
            this.reporStock(5); 
            return mensagemReposicao; 
        } else {
            return this.stock; 
        }
    }
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

// Criação da classe das Vendas

class Vendas {
    constructor (produto) {
        this.produto = produto,
        this.historico = []
    }
    diminuirStock (unidades) {
        let unidadesVendidas = 0; 
        let stockAnterior = this.produto.stock;
        let dataDeVenda = 0; 
        if ((this.produto.stock != 0) && (unidades <= this.produto.stock)) {
                this.produto.stock = this.produto.stock - unidades;
                dataDeVenda = new Date (); 
        }
        let flutuacoesStock = (`Produto ${this.produto.nome} anteriormente com stock de ${stockAnterior} unidades tem atualmente ${this.produto.stock} unidades em stock`)
        let totalUnidades = (`Unidades totais vendidas do produto ${this.produto.nome} foi/foram ${unidades}`)
        let data = (`Venda do ${this.produto.nome} ocorreu na data ${dataDeVenda}`); 
        this.historico.push(flutuacoesStock, totalUnidades, data); 
    }
    relatorio () {
        console.log(this.historico); 
    }
}


const vendasEarbuds = new Vendas(earbuds)
const vendasRadio = new Vendas(radio); 
const vendasMaquinaFotografica = new Vendas(maqFoto);
const vendasCartaoMemoria = new Vendas (cartMemoria); 

const historicoVendas = []; 

historicoVendas.push(earbuds, radio, maqFoto, cartMemoria); 

// Ponto 3. Valor Total do Inventário:

function valorTotalInventario() {
    let valorTotal = 0;
    for (let i=0; i<inventario.length; i++) {
       let precoProduto = inventario[i].preco * inventario[i].stock;
       valorTotal += precoProduto;
    }
    console.log(`O valor total de investimento em stock é de ${valorTotal} euros.`);
    return valorTotal.toFixed(2);
};

// Ponto 4. Limpeza de Stock:

function limpezaStock() {
    for (let i=0; i<inventario.length; i++) {
         if (inventario[i].stock == 0) {
            inventario.splice(i, 1);
            }
    }
};

// Ponto 5. Filtro de Categoria:

function filtroCategoria(categoria) {
    for (let i=0; i<inventario.length; i++) {
        if (inventario[i].categoria === categoria) {
            console.log(`Produtos da categoria "${categoria}":\n`);
            console.log(inventario[i]);
        }
    }
};

// Ponto 6. Produto "Premium":
function produtoPremium() {
    let precoMaximo = 0;
    let produtoPremium;
    for (let i=0; i<inventario.length; i++) {
    
        if (inventario[i].preco > precoMaximo) {
            precoMaximo = inventario[i].preco;
            produtoPremium = inventario[i];
        }
    }
    console.log(`O produto premium é:\n`);
    console.log(produtoPremium);
};

// Ponto 7. Repor Stock:
// como método

// Verificação do inventário completo

console.log(inventario);

// Ponto 1. Actualizar preço de um produto específico

earbuds.actualizarPreco(21.99);

//Ponto 2. Registar Venda 

vendasCartaoMemoria.diminuirStock(5); 
vendasCartaoMemoria.relatorio(); 

// Ponto 3. Mostrar o valor total do Inventário

valorTotalInventario();

// Ponto 4. Mostrar o total do Inventário sem o produto a zeros (rádio);

limpezaStock();
console.log(inventario);

// Ponto 5. Mostrar os produtos da categoria "som e vídeo";

filtroCategoria("som e vídeo");

// Ponto 6. Mostrar o produto premium do inventário;

produtoPremium();

// Ponto 8. Criatividade: Definir e implementar 3 operações adicionais 

// Primeira operação: Notificar se stock atingir 0; 
    radio.validacaoNivelStock(); 

// Segunda operação: Adicionar novo produto ao Inventário
const giraDiscosLenco = new Produto (113680, "Gira Discos LENCO", "Som e Vídeo", 114.99, 10);

function atualizacaoInventarioLoja (listaProdutos, produtoNovo) {
    listaProdutos.push(produtoNovo); 
    return listaProdutos; 
}

atualizacaoInventarioLoja(inventario, giraDiscosLenco); 

//Método Promoção (nome, desconto) para alturas de saldos exBlackFriday