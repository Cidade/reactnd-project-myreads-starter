# MyReads Project

Esse projeto faz parte do **Programa Nanodegree React** como parte do aprendizado.
Esse projeto consiste em mover livros da pagina de busca para a estante e ordenalos.

Esse projeto foi creado com a base do  [Create React App](https://github.com/facebookincubator/create-react-app).

## TL;DR

Para começar a utilizar:

* instale todas as dependências do projeto com `npm install`
* inicie o servidor de desenvolvimento com `npm start`

## O que contém nesse projeto
```
bash
├── CONTRIBUTING.md
├── README.md - # Informações do projeto
├── SEARCH_TERMS.md # Ele estabelece uma coleção curta de termos de pesquisa disponíveis para você usar com seu aplicativo.
├── package.json # npm arquivo do gerenciador de pacotes.
├── public
│   ├── favicon.ico #  Ícones utilizados.
│   └── index.html #  Pagina de entrada.
└── src
    └──  Util
        └── BooksAPI.js # API de backend fornecida pela Udacity.
    ├── App.css # Folha de estilo utilizada.
    ├── App1.js # Raiz do aplicativo com HTML estático de exemplo.
    ├── App.js # Raiz do aplicativo.
    ├── App.test.js # Usado para testes. Fornecido com Create React App.
    ├── BookCase.js  #  Estante de  livros.
    ├── BookSearch.js  #  Pagina de busca dos livros.
    ├── icons # Imagens utilizadas no projeto.
    |   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Estilos Globais.
    ├── index.js # Utilizado para renderizaçãod da DOM.
    └── ListBooks.js # Pagina que renderiza a lista de livros.
```


## Importante
A API do backend usa um conjunto fixo de resultados de pesquisa em cache e é limitado a um determinado conjunto de termos de pesquisa, que pode ser encontrado em [SEARCH_TERMS.md] (SEARCH_TERMS.md). Essa lista de termos são os termos _only_ que funcionarão com o backend, então não se surpreenda se suas pesquisas para Basket Weaving ou Bubble Wrap não retornarem com nenhum resultado.

## Create React App

Este projeto foi iniciado com [Create React App](https://github.com/facebookincubator/create-react-app). Você pode encontrar mais informações sobre como executar tarefas comuns [Aqui](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contribuindo

Esse repositório e material de estudo. Provavelmente não sera necessário contribuição.

Para detalhes, confira [CONTRIBUTING.md](CONTRIBUTING.md).
