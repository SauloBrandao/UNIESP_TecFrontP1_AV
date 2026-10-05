# Estrutura da Página Principal

Este documento explica como o HTML da página principal foi organizado, quais tags foram utilizadas e o motivo de cada escolha.

## Sumário

1. [Header](#1-header)
2. [Main](#2-main)
   - [2.1 Section "Hero"](#21-section-hero-ou-apresentação)
   - [2.2 Section "Sobre mim"](#22-section-sobre-mim)
   - [2.3 Section "Tecnologias"](#23-section-tecnologias)
   - [2.4 Section "Projetos"](#24-section-projetos)
   - [2.5 Section "Contato"](#25-section-contato)

---

## 1. Header

O `<header>` contém a **navbar**, cujos elementos são clicáveis. Cada um redireciona para uma parte específica da página:

| Elemento | Destino |
|---|---|
| Logo | Hero |
| Sobre | "Sobre mim" |
| Stack | Tecnologias que conheço |
| Projetos | Projetos do meu GitHub |
| Contato | Parte de contatos |

---

## 2. Main

O `<main>` representa o conteúdo principal e único da página, assim como o `<header>` representa o cabeçalho e o `<footer>` o rodapé. Dentro dele, o conteúdo costuma ser organizado em `<section>`, que são agrupamentos temáticos de conteúdo relacionado, geralmente acompanhados de um título. Ambas as tags são **semânticas**, pois seus nomes descrevem o significado do conteúdo.

As tags `<main>` e `<section>` não possuem função visual: assim como a `<div>`, elas apenas criam blocos, e o layout depende do CSS. A diferença é que carregam **significado**. O `<main>` indica o conteúdo principal da página e a `<section>` indica um agrupamento temático, o que beneficia a acessibilidade, o SEO e a organização do código.

O código foi separado em **5 sections**. A seguir, cada uma é abordada individualmente, com seus elementos e o motivo das escolhas.

### 2.1 Section "Hero" (ou "Apresentação")

Esta seção apresenta, primariamente, uma introdução sobre mim. Ela contém os seguintes elementos:

- Um `<h1>` com o meu nome;
- Um parágrafo (`<p>`) com o meu cargo, que inclui um `<span>` com uma classe essencial para o funcionamento do efeito de máquina de escrever feito em JavaScript;
- Outro parágrafo com a introdução propriamente dita;
- Uma `<div>` que funciona como contêiner dos botões, permitindo ajustar melhor o tamanho deles e mantê-los agrupados dentro da própria seção, em vez de soltos entre seções diferentes.

Esses botões levam às seções de projetos e de contato, de forma semelhante à navbar, utilizando links âncora.

### 2.2 Section "Sobre mim"

Esta seção tem como objetivo mostrar um pouco mais sobre mim, meus gostos e minhas experiências passadas. Provavelmente é a mais simples do site, pois utiliza um padrão de layout definido por mim: os textos introdutórios de cada seção são agrupados em `<div>` com a classe `rotulo-secao`. Dessa forma, o início de todas as seções fica padronizado e, no CSS, é possível estilizar todos os rótulos de seção de uma só vez.

Além dessa `<div>`, há apenas um parágrafo (`<p>`) com a descrição escrita.

### 2.3 Section "Tecnologias"

Esta seção contém uma `<div>` e, dentro dela, três `<div>`, cada uma com uma lista não ordenada (`<ul>`). As listas compartilham a mesma classe, `grupo-tecnologias`, para padronizar a posição e a estilização.

### 2.4 Section "Projetos"

Esta seção apresenta os projetos desenvolvidos por mim e é organizada em cartões, cada um representado por uma tag `<article>`, já que cada projeto é um conteúdo independente, que faria sentido mesmo fora da página.

Os projetos seguem uma hierarquia visual:

- O primeiro, o **Custom Media Downloader**, é o projeto em destaque, identificado pelas classes `projeto` e `projeto--destaque`. Ele possui duas áreas internas: `projeto-info`, com as informações, e `projeto-visual`, uma `<div>` reservada para a parte visual, marcada com `aria-hidden="true"` para ser ignorada por leitores de tela, já que é puramente decorativa.
- Os demais projetos são agrupados na `<div>` `projeto-linha`, que serve como contêiner para organizá-los lado a lado via CSS, e usam a classe `projeto--pequeno`.

Todos os cartões seguem a mesma estrutura interna:

| Elemento | Função |
|---|---|
| `<span class="projeto-etiqueta">` | Etiqueta de identificação |
| `<h3>` | Nome do projeto |
| `<p>` | Descrição |
| `<ul class="projeto-detalhes">` | Tecnologias utilizadas |
| `<div class="projeto-links">` | Links para ver o projeto e acessar o código |

Essa padronização permite estilizar todos os projetos de uma só vez no CSS, enquanto as classes modificadoras (`--destaque` e `--pequeno`) diferenciam apenas o que muda entre eles.

### 2.5 Section "Contato"

Esta seção apresenta os meus contatos, agrupados dentro de uma `<div>` e acessados por meio de links (`<a>`).
