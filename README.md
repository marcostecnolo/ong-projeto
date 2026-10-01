# ONG Recomeçar

Projeto web da **ONG Recomeçar**, desenvolvido para apresentar a organização, seus projetos e possibilitar o cadastro de interessados.

## Estrutura do projeto

```text
Projeto.ONG/
├── css/
│   └── style.css
├── html/
│   ├── cadastro.html
│   ├── index.html
│   └── projetos.html
├── img/
│   ├── logo.webp
│   ├── projeto-educacao.webp
│   ├── projeto-familias.webp
│   └── projeto-voluntariado.webp
├── js/
│   ├── forms.js
│   ├── interactions.js
│   ├── main.js
│   ├── masks.js
│   ├── storage.js
│   └── views.js
├── package.json
├── package-lock.json
├── vite.config.mjs
└── README.md
```

## Tecnologias

* HTML5
* CSS3
* JavaScript
* Vite
* Git e GitHub
* GitHub Actions
* GitHub Pages
* Imagens no formato WebP

## Páginas

* `index.html` — página inicial
* `projetos.html` — apresentação dos projetos sociais
* `cadastro.html` — página de cadastro de interessados

## Instalação

Clone o repositório e acesse a pasta do projeto:

```bash
git clone https://github.com/marcostecnolo/ong-projeto.git
cd ong-projeto
```

Instale as dependências:

```bash
npm install
```

## Execução em desenvolvimento

Para iniciar o servidor de desenvolvimento do Vite:

```bash
npm run dev
```

Depois, abra no navegador o endereço informado pelo Vite.

## Build de produção

Para gerar a versão otimizada para produção:

```bash
npm run build
```

O resultado do build é gerado na pasta `dist/`.

Para visualizar localmente a versão de produção:

```bash
npm run preview
```

A pasta `dist/` não é versionada no Git. Ela é gerada durante o processo de build e utilizada no fluxo de publicação.

## Deploy

O projeto está configurado para publicação no **GitHub Pages** por meio do **GitHub Actions**.

O fluxo de deploy:

1. instala as dependências;
2. executa o build do Vite;
3. gera os arquivos de produção na pasta `dist/`;
4. publica o conteúdo gerado no GitHub Pages.

O deploy de produção é realizado a partir da branch `master`.

## Acessibilidade

O projeto possui recursos voltados à acessibilidade, incluindo:

* destaque visual para navegação por teclado;
* uso de elementos semânticos;
* identificação adequada dos campos de formulário;
* recursos de acessibilidade na navegação e interação;
* ajustes de contraste de cores;
* preocupação com navegação por teclado e leitores de tela;
* textos alternativos (`alt`) nas imagens.

Essas práticas foram utilizadas para atender aos princípios de acessibilidade aplicáveis à interface do projeto e às diretrizes da WCAG 2.1.

## Otimização de imagens

As imagens utilizadas no projeto foram convertidas para o formato **WebP**, reduzindo o tamanho dos arquivos e contribuindo para o desempenho da aplicação.

Durante o build do Vite, os arquivos de imagem são processados e recebem nomes próprios na pasta `dist/assets/`.

## Funcionamento do JavaScript

O arquivo `js/main.js` coordena a renderização das páginas e integra os módulos de navegação, formulário e máscaras.

As views são definidas em `js/views.js` e renderizadas dentro do elemento principal da aplicação.

Os dados de cadastro são armazenados localmente no navegador por meio do `localStorage`.

## Controle de versões

O projeto utiliza Git com organização baseada em **GitFlow**, incluindo:

* `master` — versão principal e código de produção;
* `develop` — integração do desenvolvimento;
* `feature/*` — novas funcionalidades;
* `fix/*` — correções;
* `release/*` — preparação de versões.

O desenvolvimento utiliza branches separadas e integração por meio de **Pull Requests**, mantendo o histórico do projeto organizado.

## Versões

As versões importantes do projeto são identificadas por tags Git:

```text
v1.0.0
v1.1.0
v1.1.1
v1.1.2
```

## Manutenção

Para realizar alterações no projeto:

1. Atualize a branch `develop`.
2. Crie uma branch apropriada, como `feature/nome-da-funcionalidade` ou `fix/nome-da-correcao`.
3. Faça as alterações e teste o projeto localmente.
4. Execute `npm run build` para validar o build de produção.
5. Crie um commit claro e objetivo.
6. Envie a branch para o GitHub.
7. Abra uma Pull Request para `develop`.
8. Após a validação e integração, leve as alterações para `master` por meio de uma Pull Request.
9. O GitHub Actions realiza o deploy da versão publicada.

## Repositório

**GitHub:**

https://github.com/marcostecnolo/ong-projeto

## Licença

Este projeto foi desenvolvido para fins acadêmicos como parte da disciplina de Desenvolvimento front-end.
