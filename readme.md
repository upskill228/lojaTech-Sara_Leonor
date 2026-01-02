# Projecto realizado por: Leonor Pereira e Sara Pina

## Tema escolhido - Opção 3: O Menu Digital

"Site moderno para um restaurante, café ou food truck.

Foco:
Grelhas de produtos apetitosos (cards), tipografia elegante, formulário de reservas.

Interatividade:
Filtrar menu (Entradas/Pratos/Sobremesas); Modal de reserva; Galeria de fotos."

## Link repositório WEB 


# Página principal

# Página "Coffee Break"

Nesta página, o nosso objectivo foi criar um template de como seria a interface para o utilizador num cenário real de restauração. Usamos como referência a app Uber Eats para algumas das coisas que gostariamos de disponibilizar e da interatividade que seria necessária construir.

Note-se que muitas coisas funcionam como uma template e que poderiam ser mais exploradas e desenvolvidas. 
Tentamos nomear as mesmas na sequência deste documento. 

## Apresentação da página
 
A apresentação da página, de uma forma generalizada, é a seguinte: 

<img src="/img/readme_pag1" width="1061" height="195" alt="elementos da pagina coffee break">

- Cabeçalho com menu "hambúrguer", nome do utilizador (pressupõe que foi feito Log In), nome do café, barra de pesquisa e e ícon do basket.
- Uma imagem decorativa alusiva à restauração selecionada ("café")
- Conteúdo principal com duas secções. Primeiramente:
    - Informação descritiva do café nomeadamente morada
    - Cotação do café (4.7 likes - 251 reviews)
    - Opção "radio-type" entre entrega ao domicilio ou recolha no estabelecimento 
    - Conteúdo informativo sobre taxas associadas à entrega ao domicilio 
    - Finalmente, conteúdo informativo sobre médio do tempo de entrega 

<img src="/img/readme_pag2" width="1061" height="195" alt="elementos da pagina coffee break">

- Seguidamente, a outra secção:
    - Menu navegação (bebidas quentes, bebidas frias e pastelaria)
    - Apresentação da categoria selecionada (ou do default - bebidas quentes) com apresentação dos respetivos produtos da categoria em "template" cards

## Acesso ao menu

Assim, nesta página, o principal foco é o acesso ao menu por parte do utilizador. 
No caso, de termos feito a opção por um café, optamos por categorizar os produtos em três categorias (seis produtos por cada):
 - bebibas quentes
 - bebidas frias
 - pastelaria

Estas são as categorias principais, mas num contexto real, faria sentido ter mais categorias e mais produtos. 
O que foi desenvolvido foi neste contexto como template (como referenciado acima).

Este acesso é apresentado num menu de navegação lateral (à esquerda na página), em categorias, e como solicitado, permite também ao utilizador filtrar os produtos que quer ver.
Ou seja, o default da nossa página apresenta a primeira categoria (neste caso bebidas quentes), com a característica de poder ser selecionado e apresentado cada categoria individualmente através do "click" nessa mesma categoria por parte do utilizador.

Mais ainda, cada produto, é apresentado num template card, que apresenta as seguintes informações:
 - fotografia do produto
 - Nome do produto
 - preço (em euros). A apresentação nesta unidade deve-se à localização central do café escolhida (Portugal).
 - Percentagem de likes (reviews) do produto associado ao número de clientes que fez a review ao mesmo
 (Isto pressupõe um sistema interativo em que o utilizador poderia deixar uma review e haveria uma contabilização total das reviews deixadas e uma média calculada automaticamente e atualizada na página.
 Este poderia ser um ponto a ser futuramente desenvolvido e articulado com cada produto.)
 - Descrição do produto
 - Ícon de "mais" (adicção do produto ao basket - ver mais à frente)


## Filtro das categorias/Interatividade JS

Para permitir filtrar categorias apresentadas foram necessárias duas coisas: criação de variáveis e associação de evento (click) a variável.

Associado a cada categoria tivemos que criar duas variáveis. 

A do menu de navegação que exibe o nome da categoria (bebidas quentes, bebidas frias e pastelaria).
Fizemo-lo por associação do pseudo-selector id atribuido.
Ex: const bebidasQuentes = document.getElementById("quentes")

Criamos também a variável que contêm a lista a ser apresentada (todos os produtos de determinada categoria).
Ex: const listaBebidasQuentes = document.getElementById("listaQuentes")

Associamos o evento click à primeira vriável, menu de selecção, ao qual atribuimos uma função.

Esta função, realiza 3 coisas:
 - e.preventDefault() 
 Impede o comportamento padrão do browser (reload da página)
 - atribuição de uma classe (add) à categoria seleccionada e eliminação da mesma às restantes (remove)
 Esta classe em CSS permite a visibilidade dos produtos (ex: display: grid)
 - atribuição e remoção de outra classe às categorias (selecionada versus restantes)
 Que atribui "background-color" à categoria selecionada (optamos por light grey)



## Adcionar ao basket/Interatividade JS

Primeiramente criámos um array vazio (basket) associado ao "carrinho de compras". 
De seguida, criamos outro array, que associamos todos os "botões de adição" que se encontram associados a cada produto.
Desta vez, fizemo-lo pelo pseudo-selector classe. 

Ex: const botoes = document.querySelectorAll(".icon-addCart"); 

Para cada um destes botões associamos um evento (click) que gerou uma função.
Esta função em si tem várias finalidades (criação de variável e objeto) e recorre a funções de suporte (para aumentar quantidade do produto no basket; adicionar novos produtos; atualizar informação na interface)

A primeira variável a ser criada é, o elemento HTML que atribuimos dataset atributos (id, nome, preço e quantidade).
A segunda é um objecto (produto) com essas mesmas propriedades. 
Seguidamente, chamámos outra função de suporte que nos devolvia o produto em si (se existente no array basket - quando criado vazio).
Se existente, aumentava a quantidade em 1, senão adicionava o produto ao array basket ("basket.push(produto)")
Finalmente, chama outra função de suporte ("updateBasketDisplay). 
Nesta função, é percorrido o array basket. Se existirem produtos no array são criadas variáveis (nome, preço, quantidade, subtotal e total).
É ainda criado elemento html ("p") e adicionado ao elemento html "pai" que é o painel do carrinho de compras.
Ao sair do ciclo for, é criado outro elemento HTML "p" e adicionado ao elemento HTML pai em questão, que contêm a informação do preço total (que será visto no carrinho de compras). 
Ao iniciar esta função, garantimos que o total é zero e não existe conteúdo neste elemento HTML (ou sejá não é exibido nada no carrinho, na interface).

Associamos a abertura/fecho do "painel carrinho de compras" ao associarmos o evento clique, através de atribuição/remoção de classe CSS que representa o display do mesmo ou não, respectivamente.


## Aspectos que podem futuramente ser trabalhados (interactividade)

1. A subtração de produtos ao basket
2. Menu Hambúrguer (no cabeçalho, que poderia dispôr de opções como iniciar sessão e terminar sessão, por exemplo)
3. Ícon informativo (ao clicar apresentar um painel informativo com mais detalhes sobre o assunto em questão)
4. Reviews serem geradas e automatizadas a sua actualização na página (de cada produto e do café)
5. Num contexto real, após a seleção dos produtos a serem comprados e a forma (delivery ou pick-up), permitir a compra online e gerar o evento 