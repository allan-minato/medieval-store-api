
    <title>Medieval Store API</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }

        h1 {
            color: #4CAF50;
        }

        h2 {
            color: #2196F3;
        }

        code {
            background-color: #f2f2f2;
            padding: 2px;
            border-radius: 4px;
        }

        pre {
            background-color: #f5f5f5;
            padding: 10px;
            border-radius: 5px;
            overflow: auto;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        li {
            margin-bottom: 10px;
        }
    </style>
</head>

<body>

    <h1>Medieval Store API</h1>
    <p>Bem-vindo à Medieval Store API, uma aplicação desenvolvida em Typescript e Sequelize para gerenciar itens medievais, como espadas feitas sob encomenda. Este projeto inclui autenticação JWT para proteger rotas sensíveis, além de testes para garantir o funcionamento correto das operações.</p>

    <h2>Estrutura do Projeto</h2>
    <pre>
./src
|-- controllers
|-- services
|-- models
|-- routes
|-- config
|-- middleware
|-- utils
    </pre>

    <ul>
        <li><strong>controllers:</strong> Contém os controladores responsáveis por gerenciar as requisições HTTP.</li>
        <li><strong>services:</strong> Agrupa a lógica de negócios da aplicação, separando-a dos controladores.</li>
        <li><strong>models:</strong> Armazena os modelos Sequelize que representam as entidades do banco de dados.</li>
        <li><strong>routes:</strong> Define as rotas da API.</li>
        <li><strong>config:</strong> Configurações da aplicação, como conexão com o banco de dados.</li>
        <li><strong>middleware:</strong> Middleware para autenticação JWT.</li>
        <li><strong>utils:</strong> Funções utilitárias.</li>
    </ul>

    <h2>Funcionalidades</h2>
    <ul>
        <li>Autenticação</li>
        <ul>
            <li>Rota para login, retornando um token JWT para autenticação em rotas protegidas.</li>
        </ul>
        <li>Itens Medievais</li>
        <ul>
            <li>Criação de itens medievais personalizados.</li>
            <li>Recuperação de informações sobre um item medieval específico.</li>
            <li>Atualização de detalhes de um item medieval.</li>
        </ul>
    </ul>

    <h2>JWT Authentication</h2>
    <p>Para acessar rotas protegidas, inclua o token JWT na header da requisição:</p>
    <pre>
Authorization: Bearer <seu_token_jwt>
    </pre>

    <h2>Como Executar</h2>
    <ol>
        <li>Instale as dependências:</li>
        <pre>npm install</pre>
        <li>Configure o banco de dados no arquivo <code>./src/config/database.ts</code>.</li>
        <li>Execute as migrations:</li>
        <pre>npm run migrate</pre>
        <li>Inicie a aplicação:</li>
        <pre>npm start</pre>
    </ol>

    <h2>Testes</h2>
    <p>Os testes da aplicação estão localizados no diretório <code>./tests</code>. Execute os testes com o seguinte comando:</p>
    <pre>npm test</pre>

    <h2>Contribuição</h2>
    <p>Sinta-se à vontade para contribuir ou abrir problemas. Se encontrar algum bug ou tiver sugestões de melhoria, por favor, relate no <a href="https://github.com/seu-usuario/medieval-store-api/issues">GitHub Issues</a>.</p>

    <p>Divirta-se explorando o mundo medieval através da nossa loja API!</p>

</body>

</html>
