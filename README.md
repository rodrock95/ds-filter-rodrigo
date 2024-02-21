# Projeto DSFilter

O projeto DSFilter foi desenvolvido exclusivamente por mim durante o bootcamp ReactJS da escola DevSuperior. Neste projeto a ideia era implementar uma base de dados de produtos, bem como a função que filtra os produtos por preço.

## Caso de uso: listar produtos
1. [OUT] O sistema informa nome e preço de todos produtos, ordenados por preço.
2. [IN] O usuário informa, opcionalmente, preço mínimo e preço máximo dos produtos.
3. [OUT] O sistema informa nome e preço dos produtos, ordenados por preço, conforme critérios.
   
Informações complementares:
- Se o valor do preço mínimo não for informado, usar por padrão o valor 0 (zero).
- Se o valor do preço máximo não for informado, usar por padrão o valor Number.MAX_VALUE

## Arquitetura do sistema

O corpo da tela deve ser um componente (na imagem abaixo: ListingBody) que possui dois filhos: o card de filtro, e o card de listagem. Você DEVE implementar um evento para fazer o componente de filtro notificar os parâmetros de filtragem dos produtos:

![systemFilter](https://github.com/rodrock95/filter-price/assets/79290866/48fe7221-5958-4fe2-8082-91de4530232f)

No cabeçalho DEVE aparecer o número de produtos listados. Esse número DEVE observar e reagir às mudanças na listagem. Para isto, mantenha um estado global utilizando a Context API.

![eventoGlobal](https://github.com/rodrock95/filter-price/assets/79290866/3fbf5362-bade-4ac6-8ee9-b232ebcd0c89)

Os critérios a seguir foram devidamente contemplados:

1) O projeto conteve os componentes principais:
- Cabeçalho
- Corpo da tela de listagem
- Card de filtro
- Card de listagem
 
2) A lista de produtos deve ser passada como Prop para o card de listagem.
  
3) O card de filtro emite um evento onFilter(min, max). Este evento serve para comunicar os preços mínimo
e máximo sempre que o formulário for submetido.

4) Context API utilizada para manter o estado global do número de produtos mostrados na tela. Sempre que
for feita uma nova filtragem e o número de produtos listados mudar, o número é atualizado no cabeçalho.
