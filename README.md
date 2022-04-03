# Boas vindas ao shopping-cart!

## Tecnologias: 
  Para este projeto foram usadas as seguintes técnolgias:
  - JS;
  - CSS;
  - JSX;
  - React;
  - React-Router;
  - React-Hooks;

## Objetivos:
  - Desenvolver um “Carrinho de compras” usando uma API.
  - Listar os produtos, exibir o total da compra e exibir uma mensagem informando se o pedido possui frete grátis.

## Requisitos:
  - Listar os produtos provenientes da API.
  - Os produtos devem ter imagem, nome e preço.
  - Exibir ao fim da lista o valor total de todos os produtos.
  - Exibir o texto de frete grátis dependendo do valor do carrinho.
  - O texto de frete grátis deverá aparecer apenas se o valor for acima de R$ 10,00.
  - Seguir o layout.
  - Usar Flex-Box CSS.

## Como começar:
  1. Clone o repositório:
   * `git clone git@github.com:marinafischer/shopping-cart.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd shopping-cart`

  2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start` (uma nova página em branco deve abrir no seu navegador)
  * Direcione para o carrinho desejado:
    - Para o carrinho consumindo a API abaixo-10-reais: http://localhost:3000/cartLess
    - Para o carrinho consumindo a API acima-10-reais: http://localhost:3000/cartMore
