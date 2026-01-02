

const bebidasQuentes = document.getElementById("quentes")
const bebidasFrias = document.getElementById("frias")
const pastelaria = document.getElementById("pastelaria")

const listaBebidasQuentes = document.getElementById("listaQuentes")
const listaBebidasFrias = document.getElementById("listaFrias")
const listaPastelaria = document.getElementById("listaPastelaria")

bebidasQuentes.addEventListener("click", filtrarQuentes)

let basket = []; 

function updateBasketDisplay () {
    let conteudoBasketzinho = document.getElementById("cartcontent")
    conteudoBasketzinho.innerHTML = ""
    let total = 0
    console.log("este é o basket", basket); 
    if (basket.length == 0) {
        conteudoBasketzinho.innerText = "Carrinho está vazio"
    } else {
        for (i=0; i<basket.length; i++) {
            let nome = basket[i].nome
            let preco = basket[i].preco
            let quantidade = basket[i].quantidade
            let subtotal = preco*quantidade
            total = total + subtotal
            let frase = quantidade + "x " + nome + " - " + subtotal.toFixed(2) + "€"
            let p = document.createElement("p")
            p.innerText = frase; 
            conteudoBasketzinho.appendChild(p);
    }
        } 
        let hr = document.createElement("hr")
        conteudoBasketzinho.appendChild(hr)
        let pTotal = document.createElement("p")
        pTotal.innerText = "Total = " +  total.toFixed(2) + "€"
        conteudoBasketzinho.appendChild(pTotal)
}

updateBasketDisplay(); 

function filtrarQuentes(e) {
    e.preventDefault(); 
    listaBebidasQuentes.classList.add("active")
    listaBebidasFrias.classList.remove("active")
    listaPastelaria.classList.remove("active")
    bebidasQuentes.parentElement.classList.add("selectedMenuItem")
    bebidasFrias.parentElement.classList.remove("selectedMenuItem")
    pastelaria.parentElement.classList.remove("selectedMenuItem")
}


bebidasFrias.addEventListener("click", filtrarFrias)

function filtrarFrias(e) {
    e.preventDefault();
    listaBebidasFrias.classList.add("active")
    listaBebidasQuentes.classList.remove("active")
    listaPastelaria.classList.remove("active")
    bebidasQuentes.parentElement.classList.remove("selectedMenuItem")
    bebidasFrias.parentElement.classList.add("selectedMenuItem")
    pastelaria.parentElement.classList.remove("selectedMenuItem")
}

pastelaria.addEventListener("click", filtrarPastelaria)

function filtrarPastelaria(e) {
    e.preventDefault();
    listaBebidasFrias.classList.remove("active")
    listaBebidasQuentes.classList.remove("active")
    listaPastelaria.classList.add("active")
    bebidasQuentes.parentElement.classList.remove("selectedMenuItem")
    bebidasFrias.parentElement.classList.remove("selectedMenuItem")
    pastelaria.parentElement.classList.add("selectedMenuItem")
}


const carrinho = document.getElementById("basket")
const painelCarrinho = document.getElementById("painelCarrinho")
const fechar = document.getElementById("closeCart")

carrinho.addEventListener("click", mostrarPainel)
fechar.addEventListener("click", fecharPainel);

function mostrarPainel () {
    painelCarrinho.classList.add("open")
}

function fecharPainel () {
    painelCarrinho.classList.remove("open")
}



const botoes = document.querySelectorAll(".icon-addCart"); 

botoes.forEach (botao => {
    botao.addEventListener("click", () => addToCart(botao))
}); 

// let basket = []; 
function addToCart (botao) {
    const card = botao.parentElement.parentElement
    const produto = {
        id: card.dataset.id,
        nome: card.dataset.name,
        preco: Number(card.dataset.price),
        quantidade: 1
    }
    let produtoExistente = procurar(produto.id); 
    if (produtoExistente) {
        produtoExistente.quantidade = produtoExistente.quantidade + 1
    } else {
        basket.push(produto); 
    }
    updateBasketDisplay() 
}


function procurar(id) {
    for (i=0; i<basket.length;  i++) {
        if (id == basket[i].id) {
            return basket[i]
        } 
    }
}

