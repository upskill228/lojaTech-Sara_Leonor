
# Projecto realizado por: Leonor Pereira e Sara Pina

## Tema escolhido - Opção 1: TechStore (Gestão de Inventário)

"És o developer de uma loja de tecnologia. Precisas de construir o sistema que gere o armazém."

## Link repositório WEB 

# Escolha das Estruturas (Inventário e Histórico de Vendas)
## O Inventário 
   O inventário é um array que é composto por diferentes objectos que são por sua vez os produtos da loja. 
   O inventário inicial da TechStore era composto por cinco produtos.
   Cada produto é um objeto da Classe Produto. As propriedades definidas foram atribuidas consoante o solicitado no enunciado. Desta forma atribuimos as seguintes propriedades: id (atribuição feita aleatoriamente de seis digitos), nome, categoria, preco, stock - e os seguintes métodos: actualizar preço, repor stock e validação do nível de stock. 

   Escolha das estruturas:
   Array: O inventário é uma estrutura organizada composta por sua vez por diferentes estruturas (objectos). Pode-se "percorrer o inventário" (array) e fazer as alterações necessárias ao mesmo (como remoção e adição de produtos). 

   Produtos: São objectos - da Classe Produto (genérica/molde) - que são estruturas que reúnem certas propriedades (desde um conjunto de chaves de identificação, preço e ações - métodos - associados a cada objecto/produto). 
   É possível assim fazer também alterações directas nestas estrututas que por sua vez são automaticamente actualizadas, sendo o inventário actualizado também. 

## O Histórico de Vendas
   O histórico de Vendas, optamos também por criar como um array, constituido por diferentes estruturas sendo estas os objetos venda de cada produto.

   O histórico de Vendas é, assim constituido, pelo histório de venda de cada produto (objecto). Iniciamos sem registo de vendas, e fomos posteriormente adicionado à medida que os diferentes produtos foram vendidos. (No corpo da função main())

   Para a criação do histórico de venda (por produto), como objecto, levou-nos à criação inicial da Classe Venda. Como propriedades definimos "this.produto" ao qual associamos um produto (no fundo, cada um daqueles objectos anteriormente criados) e um histórico (de transacções) que por sua vez definimos como uma lista (adicionadas variáveis - strings - que "imprimiam" as transações realizadas à medida que iam acontecendo, nomeadamente diminuição do stock, quantidade atualizada e data de compra).
   Para a realização de data de compra usamos a função newDate() que permite a atribuição da data actual Western Time. 
   (Cada vez que existia diminuição de stock - era guardada a data para posteriormente ser acrescentada ao relatório - ver métodos). 

   Como métodos definimos a diminuição do stock (que era possível ser associada a cada produto pela propriedade anterior e acedermos ao stock directamente deste). O segundo método, foi nomeado de relatório pois consistia na "impressão" do histórico de vendas do produto. 

   Escolha das estruturas:
   Array: Novamente, esta estrutura fez sentido para o Histórico de Vendas, uma vez que é uma estrutura tipo "lista" que reúne por sua vez outras estruturas, nomeadamente, histório de cada venda (de cada produto)

   Objetos: Cada histórico de venda de cada produto é em si uma outra estrutura que reúne propriedades e métodos (acções) associadas, daí a escolha desta estrutura neste caso. 
    

# Passos para correr os ficheiros JS 

## Primeiro Passo: Criação das Estruturas Definidas
## Inventário, Classe Produto, Objectos do tipo produto

   Criamos inicialmente a Classe produto com as propriedades e métodos definidos em cima.
   Daqui, posteriormente criamos cinco objetos do tipo produto à escolha (Earbuds; Radio; Máquina de Fotografia, Cartão de Memória, Gira Disco Lenco)
   Criamos como "let" para ser possível realizar atualizações ao longo do código. 

   Seguidamente vê-se a criação do Inventário, como um array vazio.
   Ao qual adicionamos os objetos produtos criados anteriormente (primeira ação do corpo da função main).


## Histórico de Vendas, Classe Venda, Objectos do tipo venda
   Criamos seguidamente a Classe de Venda com as propriedades e métodos descritos acima. 
   Optamos por criar como propriedades um produto associado e um histórico de vendas. 
   Para o método de diminuir stock optamos por ser transferível um parâmetro (unidades) - em vez de ter isto como propriedade - a serem deduzidas no stock actual. 

   O array histórico de vendas foi criado seguidamente e mantido vazio até instrução de venda ser realizada (posteriormente no código). 

## Segundo Passo: Pontos do Enunciado - Formulação

### Ponto 1: Atualizar Preço - Alterar o preço de um produto específico através do seu identificador.

   A atualização do preço por produto é feito como método na classe produto. Neste método é passado como parâmetro o novo preço e este é atualizado nas propriedades do objeto. 

### Ponto 2: Registar Venda - Diminuir o stock E registar a transação no Histórico de Vendas.

   Diminuição do stock foi colocado como método na classe venda (associado a cada produto). 
   É passado como parâmetro as unidades a serem deduzidas ao stock do produto. Abrimos uma condição para ser só possível deduzir caso o stock seja diferente de zero e o número de unidades a retirar seja inferior ou igual ao nível de stock.
   Minimizando eventuais erros de stock negativo, por exemplo. 
    
   Neste método, e se o número de unidades reunir ambas as condições, criamos uma variável data que permite o registo da data de compra. Usamos uma função newDate() que associa a data actualizada.

   Tanto a data, como stock atualizado do produto e unidades deduzidas foram registados como mensagens (variáveis do tipo strings) que são posteriormente "imprimidas" quando se chama o método relatório (produz o histórico do produto em questão).

### Ponto 3: Valor Total do inventário - Calcular quanto dinheiro está investido em stock.

   Para calcular o dinheiro total investido em stock, criamos uma função que calcula o preço total de stock por produto (quantidade/stock*preço por unidade) e fizemos o somatório de todos os produtos. 
   Usamos um ciclo que percorre o inventário atual, garantido o cálculo dos produtos em stock no momento que se faz a chamada a essa função.
   Devolvemos o valor total com 2 casas decimais (para maior legibilidade de leitura)

   Alternativamente podíamos ter criado como método da Classe Produto o somatório do preço em stock de cada produto, e depois na função main() somar tudo.

### Ponto 4: Limpeza de Stock - Remover automaticamente produtos com 0 unidades.

   Para remover produtos do inventário com esta condicionante (stock == 0), criamos uma função que identifica produtos no inventário cuja stock seja igual a zero e aplicamos array.splice atribuindo o índice daquele objeto e removendo só um (o objeto em questão). 


### Ponto 5: Filtro de Categoria - Listar apenas os produtos de uma categoria específica.

   Utilizamos uma função que recebe como parâmetro uma categoria e fltra no inventário produtos dentro dessa categoria. Ao o fazer optamos por colocar os respetivos produtos desta categoria num array criado na função, para efeitos de visualização posterior, conseguindo ver todos os produtos da categoria selecionado juntos. 
   Ao invés de ver um produto de cada vez (cumprindo o ciclo que percorre o array do inventário). 

### Ponto 6: Produto "Premium" - Identificar e devolver os dados do produto mais caro.

   Estabelecemos uma função que percorre o inventário e compara o preço de cada produto do array frente ao preço máximo anteriormente atribuido (iniciamos a zero e é a cada volta do ciclo substituido pelo maior valor do preço)
   Determinamos qual o produto premium através do índice do produto com maior preço (definido antes). 
   Fizemos console.log/impressão no ecrã do produto premium e acima de tudo retornamos esses dados como solicitado. 

### Ponto 7: Repor Stock - Adicionar unidades a um produto já existente.

   Neste ponto optamos por criar esta função como método da classe Produto. Assim, passamos ao método a quantidade de unidades a repor e neste faz a soma às existente daquele produto atualizando o stock do mesmo. 


### Ponto 8: Criatividade: Definam e implementem 3 operações adicionais úteis.

   Primeira operação: Validar nível de stock de produto

   A primeira operação que definimos foi a criação do método de validação do nível de stock dentro da classe Produto.

   Neste método, fizemos a opção por duas ações:
   - Saber se o stock do produto é nulo ou existe stock do produto
   - Devolução de uma mensagem a reportar qualquer uma das duas alternativas
   No caso, de stock ser nulo, optamos por transmitir uma mensagem usando (console.warm) para reforçar alerta de nível de stock
          
   Consideramos uma terceira ação que seria a reposição automática dos níveis de stock para um nível mínimo (pre-estabelecido de X unidades). Contudo, optamos por não adicionar esta possibilidade, pois teria impacto imediato nos níveis de stock do produto e em contexto real, teria que haver um período de espera entre pedido realizado, chegada à loja e reposição do inventário do produto. 


   Segunda operação: Atualização do Inventário da Loja

   Nesta função que criamos permitimos a inclusão de produtos novos ao inventário da loja e o retorno do inventário atualizado à chamada da função. 

   Antes do retorno do inventário optamos por fazer console.table para permitir melhor visualização do inventário. 
        
┌─────────┬────────┬───────────────────────────┬───────────────────────┬────────┬───────┐
│ (index) │ id     │ nome                      │ categoria             │ preco  │ stock │
├─────────┼────────┼───────────────────────────┼───────────────────────┼────────┼───────┤
│ 0       │ 984879 │ 'Earbuds'                 │ 'Som e Vídeo'         │ 19.99  │ 10    │
│ 1       │ 813524 │ 'Rádio'                   │ 'Som e Vídeo'         │ 24.99  │ 0     │
│ 2       │ 763595 │ 'Máquina fotográfica'     │ 'Fotografia e Drones' │ 74.99  │ 10    │
│ 3       │ 666027 │ 'cartão de memória 256GB' │ 'Acessórios'          │ 59.99  │ 20    │
│ 4       │ 113680 │ 'Gira Discos LENCO'       │ 'Som e Vídeo'         │ 114.99 │ 10    │
└─────────┴────────┴───────────────────────────┴───────────────────────┴────────┴───────┘


   Terceira operação: Alterar preço do produto em altura de Saldos 

   A considerar opções de épocas de saldos (Black Friday, etc) fizemos a opção de adicionar este método à classe Produto.
   Neste método um desconto é aplicado sobre o preço do produto. 
    
   Deixamos em aberto duas opções: 
   - Na primeira se o desconto (como parâmetro) é passado como percentagem (p.e: 10%)
   - Na segunda, se é passado como número decimal (p.e: 0.01)
   (Não é necessário, sendo que temos controlo sobre o parâmetro a aplicar mas permitiu considerar diferentes alternativas e como estruturamos o código frente às mesmas)

   Em ambas imprimimos uma mensagem com o preço atualizado do produto.


# Descrição do bug escolhido, justificação da relevância e de como solucionar

   O bug escolhido por nós foi para o ponto 3 - Valor Total do Inventário - em que optamos por colocar erro no ciclo ao percorrer o array (inventário) ao colocar "i menor e IGUAL ao tamanho do array".
   Ao fazermos isto dá erro, que validamos com o uso do debugger pois acaba por tentar cumprir um ciclo cujo índice atribuido (pela variável i do ciclo) não existe no array. 
   O tamanho do array é superior em um pelo facto que on índices iniciam-se em 0. 
   Ou seja um array de tamanho 4 (elementos), pressupõe elementos nos índices 0, 1, 2 e 3. 
   Ao tentar entrar no ciclo com o índice 4 dá erro.
    
   Assim, a retificação seria limitar com exclusivo menor que o tamanho (< array.length). 

# Função principal

   Na aplicação está a função main na qual articulamos cada uma das funções desenvolvidas, mostrando a variabilidade do uso das mesmas. 
   A única função a ser chamada na aplicação é a principal. 

   function main () {
   let earbuds = new Produto (984879, "Earbuds", "Som e Vídeo", 19.99, 10);
   let radio = new Produto (813524, "Rádio", "Som e Vídeo", 24.99, 0);
   let maquinaFotografia = new Produto (763595, "Máquina fotográfica", "Fotografia e Drones", 74.99, 10);
   let cartaoMemoria = new Produto (666027, "cartão de memória 256GB", "Acessórios", 59.99, 20);
   let giraDiscosLenco = new Produto (113680, "Gira Discos LENCO", "Som e Vídeo", 114.99, 10);

   inventario = [];
   inventario.push(earbuds, radio, maquinaFotografia,cartaoMemoria); 
   console.table(inventario); 
   
   let vendaEarbuds = new Venda(earbuds)
   let vendaRadio = new Venda (radio); 
   let vendaMaquinaFotografica = new Venda (maquinaFotografia);
   let vendaCartaoMemoria = new Venda (cartaoMemoria); 

   historicoVendas = []; 

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




# Fluxogramas

Fluxograma 1 - Com Tomada de Decisão ("Se")
![actualizarPreco-cores](https://github.com/user-attachments/assets/79c41a5c-e78f-43bf-ab0e-b3fcca3161de)




Fluxograma 2 - Sem Tomada de Decisão
![valorInventario-cores](https://github.com/user-attachments/assets/1db68f9e-2bf0-4f73-8e10-c02bd8d6825c)





