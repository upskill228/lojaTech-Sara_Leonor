


class Produto {
    constructor(id, nome, categoria, preco, stock){
        this.id = id,
        this.nome = nome,
        this.categoria = categoria,
        this.preco = preco, 
        this.stock = stock
    };
    actualizarPreco(novoPreco) {
        this.preco = novoPreco;
        console.log(`O preço actualizado do produto ${this.nome} é ${this.preco} euros.`);
    };
    reporStock(quantidade) {
        this.stock = this.stock + quantidade; 
        console.log(this.nome, "fica com", this.stock, "unidades"); 
    };
    validacaoNivelStock () {
        let mensagemReposicao = ""; 
        let mensagemStock = "";
        if (this.stock == 0) {
            console.warn("FORA DE STOCK")
            mensagemReposicao = (`Alerta: ${this.nome} fora de stock.`); 
            return mensagemReposicao; 
        } else {
            mensagemStock = ("Stock atual é de", this.stock, "unidade(s)");
            return mensagemStock; 
        }
    };
    alteracaoPrecoSaldos(desconto) {
        let informacaoSaldos = ""; 
        if (desconto > 0 && desconto < 1) { 
            this.preco = this.preco - (this.preco*desconto); 
            desconto = desconto*100; 
            informacaoSaldos = (`Produto ${this.nome} encontra-se em saldos de ${desconto}%. Valor actual é de ${this.preco.toFixed(2)}€`)
            console.log(informacaoSaldos); 
        } if (desconto > 0 && desconto < 100) { 
            this.preco = this.preco - (this.preco*(desconto/100)); 
            informacaoSaldos = (`Produto ${this.nome} encontra-se em saldos de ${desconto}%. Valor actual é de ${this.preco.toFixed(2)}€`)
            console.log(informacaoSaldos); 
        }
    } 
}



let earbuds = new Produto (984879, "Earbuds", "Som e Vídeo", 19.99, 10);
let radio = new Produto (813524, "Rádio", "Som e Vídeo", 24.99, 0);
let maquinaFotografia = new Produto (763595, "Máquina fotográfica", "Fotografia e Drones", 74.99, 10);
let cartaoMemoria = new Produto (666027, "cartão de memória 256GB", "Acessórios", 59.99, 20);
let giraDiscosLenco = new Produto (113680, "Gira Discos LENCO", "Som e Vídeo", 114.99, 10);


inventario = [];


class Venda {
    constructor (produto) {
        this.produto = produto,
        this.historico = []
    }
    diminuirStock (historico, unidades) {
        let unidadesVendidas = 0; 
        let stockAnterior = this.produto.stock;
        let dataDeVenda = 0; 
        if ((this.produto.stock != 0) && (unidades <= this.produto.stock)) {
                this.produto.stock = this.produto.stock - unidades;
                dataDeVenda = new Date (); 
                let flutuacoesStock = (`Produto ${this.produto.nome} anteriormente com stock de ${stockAnterior} unidades tem atualmente ${this.produto.stock} unidades em stock`)
                let totalUnidades = (`Unidades totais vendidas do produto ${this.produto.nome} foi/foram ${unidades}`)
                let data = (`Venda do ${this.produto.nome} ocorreu na data ${dataDeVenda}`); 
                this.historico.push(flutuacoesStock, totalUnidades, data); 
                historico.push(this.produto); 
                console.table(historico); 
        } else {
            let mensagem = this.produto.validacaoNivelStock(); 
            console.log(mensagem); 
        }
    }
    relatorio () {
        console.log(this.historico); 
    }
}


let vendaEarbuds = new Venda(earbuds)
let vendaRadio = new Venda (radio); 
let vendaMaquinaFotografica = new Venda (maquinaFotografia);
let vendaCartaoMemoria = new Venda (cartaoMemoria); 

historicoVendas = []; 



function valorTotalInventario() {
    let valorTotal = 0;
    let precoProduto = 0; 
    for (let i=0; i<inventario.length; i++) {
       precoProduto = inventario[i].preco * inventario[i].stock;
       valorTotal += precoProduto;
    }
    console.log(`O valor total de investimento em stock é de ${valorTotal.toFixed(2)} euros.`);
    return valorTotal.toFixed(2);
};


function limpezaStock() {
    for (let i = 0; i < inventario.length; i++) {
         if (inventario[i].stock == 0) {
            inventario.splice(i, 1);
            }
    }
    console.table(inventario); 
};


function filtroCategoria(categoria) {
    inventarioCategoria = []; 
    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].categoria == categoria) {
            inventarioCategoria.unshift(inventario[i])
        }
    }
    console.log("Produtos da categoria", categoria,": \n", inventarioCategoria); 
    console.table(inventarioCategoria); 
};


function produtoPremium() {
    let precoMaximo = 0;
    let produtoPremium = 0;
    for (let i = 0; i<inventario.length; i++) {
    
        if (inventario[i].preco > precoMaximo) {
            precoMaximo = inventario[i].preco;
            produtoPremium = inventario[i];
        }
    }
    console.log(`O produto premium é:\n`, produtoPremium);
    return produtoPremium; 
};


function atualizacaoInventarioLoja (produtoNovo) {
    inventario.push(produtoNovo); 
    console.table(inventario); 
    return inventario; 
}



function main () {
    inventario.push(earbuds, radio, maquinaFotografia,cartaoMemoria); 
    console.table(inventario); 
    earbuds.actualizarPreco(25.99); 
    radio.actualizarPreco (29.99); 
    cartaoMemoria.alteracaoPrecoSaldos(10); 
    valorTotalInventario(); 
    vendaCartaoMemoria.diminuirStock(historicoVendas, 5); 
    vendaCartaoMemoria.relatorio(); 
    vendaEarbuds.diminuirStock(historicoVendas, 9);
    vendaRadio.diminuirStock(historicoVendas, 1);
    vendaRadio.relatorio(); 
    atualizacaoInventarioLoja(giraDiscosLenco); 
    produtoPremium(); 
    valorTotalInventario(); 
    limpezaStock(); 
    filtroCategoria("Som e Vídeo"); 
    radio.reporStock(10); 
}

main(); 