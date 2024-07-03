# API Blog

## Do que se trata esse projeto

Este projeto foi desenvolvido durante minha formação no módulo de back-end na [Trybe](https://www.betrybe.com/). A aplicação se trata de uma API e um banco de dados para produção de conteúdos para um Blog ou outra aplicação web similar. A API conta com as principais funções de CRUD: Create (criar), Read (ler), Update (atualizar) e Delete (apagar).

## Principais linguagens e tecnologias utilizadas

- **JavaScript**: por sua robustez, flexibilidade e lidar com operações assíncronas de maneira eficiente.
- **Docker**: grande facilidade na utilização de vários serviços de forma simultânea utilizando contêineres.
- **Sequelize**: fácil configuração e trouxe grandes benefícios ao trabalhar com banco de dados relacional.
- **JWT**: simplicidade no uso e grande utilidade no uso do payload para passar informações não sensíveis.
- **express**: Muito útil pela facilidade de gerenciar rotas e facilidade de integração com outras ferramentas.

## Instruções de instalação e uso

### Pré-requisitos

- **Node.js** (versão X.X.X)
- **npm** (versão X.X.X)
- **Docker**

### Instalação

#### Docker

1. Baixe e instale o Docker do site oficial:[Docker](https://www.docker.com/get-started/)

2. Verifique a instalação do Docker:
   ```bash
   docker --version
   docker-compose --version
   ```

#### Ubuntu

1. Atualize o sistema e instale Node.js e npm:

   ```bash
   sudo apt update
   sudo apt install nodejs npm
   ```

2. Clone o repositório:

   ```bash
   git clone https://github.com/Henriquekrs/API-Blog
   ```

3. Navegue até o diretório do projeto:

   ```bash
   cd nome-do-repositório
   ```

4. Instale as dependências:
   ```bash
   npm install
   ```

#### Windows

1. Baixe e instale o Node.js e npm do site oficial: [Node.js](https://nodejs.org/)

2. Clone o repositório:

   ```bash
   git clone https://github.com/Henriquekrs/API-Blog
   ```

3. Navegue até o diretório do projeto:

   ```cmd
   cd nome-do-repositório
   ```

4. Instale as dependências:
   ```cmd
   npm install
   ```

#### macOS

1. Instale o Homebrew (se ainda não tiver):

   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. Use o Homebrew para instalar Node.js e npm:

   ```bash
   brew install node
   ```

3. Clone o repositório:

   ```bash
   git clone https://github.com/Henriquekrs/API-Blog
   ```

4. Navegue até o diretório do projeto:

   ```bash
   cd nome-do-repositório
   ```

5. Instale as dependências:
   ```bash
   npm install
   ```

### Uso

Passos para iniciar e usar o projeto:

1. Inicie o servidor de desenvolvimento:
   ```bash
   docker-compose up -d --build
   ```

- Esses serviços irão inicializar um contêiner chamado `blogs_api` e outro chamado `blogs_api_db`;

- A partir daqui você pode rodar o contêiner `blogs_api` via CLI ou abri-lo no VS Code;

> :information_source: Use o comando `docker exec -it blogs_api bash`.

- Ele te dará acesso ao terminal interativo do contêiner criado pelo compose, que está rodando em segundo plano.

### Exemplos de uso

- Para utilização usando o Docker, no terminal interativo rode os seguintes comandos:
  ```bash
  npm run drop     <!--garante que o bando de dados será criado do zero-->
  npm run predev   <!--cria o banco de dados-->
  npm run seed     <!--popula o banco de dados com dados básicos para demonstração-->
  npm run dev      <!--coloca a API no ar-->
  ```
- Para utilizar de forma localmente basta rodar os seguintes comandos no terminal. Todos os comandos estão contidos no package.json:
- ⚠️ Lembre-se de parar o contêiner com nome de blogs_api para não dar conflito das portas serem usadas ao mesmo tempo
  ```bash
  npm run drop                  <!-- garante que o bando de dados será criado do zero -->
  npm run predev                <!-- cria o banco de dados -->
  npm run seed                  <!-- popula o banco de dados com dados básicos para demonstração -->
  env $(cat .env) npm run dev   <!-- coloca a API no ar -->
  ```
- Por se tratar de uma API sem front-end desenvolvido, as funcionalidades podem ser utilizadas através da extensão do VSCode ThunderClient ou similar.

## Contato

Se você tiver alguma dúvida, entre em contato:

- **Gustavo Henrique**
- E-mail: [ghrduarte@hotmail.com](mailto:ghrduarte@hotmail.com)
- GitHub: [henriquekrs](https://github.com/Henriquekrs)
