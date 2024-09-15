# Projeto Trivia Game

<p>Este projeto é uma aplicação web de jogo de perguntas e respostas, onde os usuários podem testar seus conhecimentos sobre diversos temas. A aplicação é construída em React e utiliza Redux para gerenciamento de estado.</p>

<h3>Tecnologias Utilizadas</h3>
<ul>
    <li><strong>React</strong>: Biblioteca para construção de interfaces de usuário.</li>
    <li><strong>Redux</strong>: Para gerenciamento de estado da aplicação.</li>
    <li><strong>React Router</strong>: Para navegação entre as diferentes páginas da aplicação.</li>
    <li><strong>Jest</strong> e <strong>React Testing Library</strong>: Para testes de componentes e funcionalidades.</li>
    <li><strong>CSS</strong>: Para estilização da interface do usuário.</li>
</ul>

<h3>Funcionalidades</h3>
<ul>
    <li><strong>Página de Login</strong>: Os usuários podem inserir seu nome e email para iniciar o jogo.</li>
    <li><strong>Jogo de Perguntas</strong>: Os usuários respondem perguntas de múltipla escolha, com feedback instantâneo sobre suas respostas.</li>
    <li><strong>Feedback do Jogo</strong>: Após o término do jogo, os usuários veem suas pontuações e podem acessar um ranking.</li>
    <li><strong>Configurações</strong>: Os usuários podem acessar as configurações do jogo a partir da página principal.</li>
    <li><strong>Ranking</strong>: Visualização das melhores pontuações dos usuários.</li>
    <li><strong>Validação de Formulário</strong>: O botão de jogar só é habilitado quando o nome e o email são preenchidos corretamente.</li>
</ul>

<h3>Estrutura do Projeto</h3>
<pre>
/projeto-trivia
├── src
│   ├── components
│   │   ├── Feedback.js
│   │   ├── Game.js
│   │   ├── Login.js
│   │   ├── Ranking.js
│   │   ├── Settings.js
│   ├── redux
│   │   ├── actions.js
│   │   ├── reducers.js
│   ├── App.js
│   ├── index.js
│   ├── styles
│   │   ├── game.css
│   │   ├── login.css
│   └── helpers
│       ├── renderWithRouterAndRedux.js
└── public
    └── index.html
</pre>

<h3>Instalação</h3>
<ul>
    <li><strong>Clone o repositório</strong>:
        <pre>git clone https://github.com/seu-usuario/projeto-trivia.git</pre>
    </li>
    <li><strong>Navegue até o diretório do projeto</strong>:
        <pre>cd projeto-trivia</pre>
    </li>
    <li><strong>Instale as dependências</strong>:
        <pre>npm install</pre>
    </li>
    <li><strong>Inicie a aplicação</strong>:
        <pre>npm start</pre>
    </li>
</ul>
