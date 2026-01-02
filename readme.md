# Projecto realizado por: Leonor Pereira e Sara Pina

## Tema escolhido - Opção 3: O Menu Digital

## Link repositório WEB 


# Página "Coffee Break"

Nesta página, o nosso objectivo foi criar um template de como seria a interface para o utilizador num cenário real de restauração. Usamos como referência a app Uber Eats para algumas das coisas que gostariamos de disponibilizar e da interatividade que seria necessária construir.

Note-se que muitas coisas funcionam como uma template e que poderiam ser mais exploradas e desenvolvidas. 
Tentamos nomear as mesmas na sequência deste documento. 

## Apresentação da página
 
A apresentação da página, de uma forma generalizada, é a seguinte: 

<img src="/img/readme_pag1" width="1061" height="195" alt="elementos da pagina coffee break">

- Cabeçalho com menu "hambúrguer", nome do utilizador (pressupõe que foi feito Log In), nome do café e ícon do basket.
- Uma imagem decorativa alusiva à restauração selecionada ("café")
- Conteúdo principal com duas secções:
    - Primeiramente, informação descritiva do cafe nomeadamente morada
    - Cotação do café (4.7 likes - 251 reviews)
    - Opção "radio-type" entre entrega ao domicilio ou recolha no estabelecimento 
    - Conteúdo informativo sobre taxas associadas à entrega ao domicilio 
    - Finalmente, conteúdo informativo sobre médio do tempo de entrega 

<img src="/img/readme_pag2" width="1061" height="195" alt="elementos da pagina coffee break">

- Seguidamente, a outra secção:
    - Menu navegação (bebidas quentes, bebidas frias e pastelaria)
    - Apresentação da categoria selecionada (ou do default - bebidas quentes) com apresentação dos respetivos produtos da categoria em "tenplate" cards

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
