# Medieval Store API

Bem-vindo à Medieval Store API, uma aplicação desenvolvida em Typescript e Sequelize para gerenciar itens medievais, como espadas feitas sob encomenda. Este projeto inclui autenticação JWT para proteger rotas sensíveis, além de testes para garantir o funcionamento correto das operações.

## Estrutura do Projeto

```plaintext
./src
|-- controllers
|-- services
|-- models
|-- routes
|-- config
|-- middleware
|-- utils

controllers: Contém os controladores responsáveis por gerenciar as requisições HTTP.
services: Agrupa a lógica de negócios da aplicação, separando-a dos controladores.
models: Armazena os modelos Sequelize que representam as entidades do banco de dados.
routes: Define as rotas da API.
config: Configurações da aplicação, como conexão com o banco de dados.
middleware: Middleware para autenticação JWT.
utils: Funções utilitárias.

Funcionalidades:

Autenticação
Rota para login, retornando um token JWT para autenticação em rotas protegidas.

Itens Medievais
Criação de itens medievais personalizados.
Recuperação de informações sobre um item medieval específico.
Atualização de detalhes de um item medieval.

JWT Authentication:
Para acessar rotas protegidas, inclua o token JWT na header da requisição:

Authorization: Bearer <seu_token_jwt>

Como Executar:

Instale as dependências utilizando npm install.

Configure o banco de dados no arquivo ./src/config/database.ts.

Execute as migrations utilizando npm run migrate.

Inicie a aplicação utilizando npm start.

Testes:

Os testes da aplicação estão localizados no diretório ./tests. Execute os testes com o seguinte comando npm test.






