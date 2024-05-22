![Pokémon TCG API Logo](https://docs.pokemontcg.io/img/cards-banner2.png)

# DeckBuilder - Gerenciador de Decks de Pokémon TCG

## Sobre o Projeto

DeckBuilder é uma aplicação web desenvolvida para ajudar jogadores de Pokémon Trading Card Game (TCG) a gerenciar seus decks de forma eficiente. Utilizando Angular 16 e Nx Workspace, a aplicação oferece uma experiência de usuário fluida e responsiva, com gerenciamento de estado em memória através do RxJS, permitindo reatividade e performance otimizadas.

## Arquitetura

- **Frontend**: Desenvolvido com Angular 16, aproveitando as funcionalidades modernas do framework para SPA (Single Page Applications).
- **Gerenciamento de Estado**: Utilização do RxJS para gerenciar o estado da aplicação de forma reativa, facilitando o fluxo de dados entre os componentes.
- **Workspace**: Nx Workspace é utilizado para organizar o projeto e facilitar a escalabilidade e manutenção do código.

## Funcionalidades Principais

- **Listagem de Decks**: Visualize todos os seus decks cadastrados de forma dinâmica.
- **Criação de Decks**: Crie decks com um nome e adicione cartas, respeitando os limites e restrições.
- **Edição de Decks**: Modifique o nome do deck ou adicione/remova cartas conforme necessário.
- **Remoção de Decks**: Remova decks de forma simples e intuitiva.
- **Visualização de Detalhes de Decks**: Acesse detalhes como a quantidade de pokémons e treinadores, e as cores e tipos únicos presentes.

## Funcionalidades Planejadas

- **Route Guards**: Implementar guards nas rotas para melhorar a segurança e o controle de acesso às diferentes partes da aplicação.
- **Alertas de Restrições de Baralho**: Adicionar alertas dinâmicos que informem o usuário sobre restrições de baralho, como limites de cartas específicas, ajudando a manter a conformidade com as regras oficiais do jogo.

## Ambiente de Desenvolvimento

- **Framework**: Angular 16+ através do Nx Console para uma integração e desenvolvimento eficientes.
- **Estilização**: Tailwind CSS para um design moderno e responsivo.
- **Interface de Usuário Avançada**: Utilização da biblioteca UI Infragistics para componentes de interface ricos e interativos.
- **Integração com API**: Comunicação com a API de Pokémon TCG realizada através do HttpClient do Angular, proporcionando uma integração robusta e eficiente.
- **Requisitos de Sistema**: É necessário ter o Node.js instalado na versão v18.20.2.

## Como Usar

1. **Instalação do NVM**:
   - **Windows**: Instale o NVM para Windows seguindo as instruções disponíveis em [NVM Windows](https://github.com/coreybutler/nvm-windows).
   - **Linux**: Instale o NVM para Linux usando o comando `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`.
   - Após a instalação do NVM, você pode instalar e usar a versão específica do Node.js definida no arquivo `.nvmrc` executando `nvm install` e `nvm use`.
2. **Instalação das Dependências**: Clone o repositório e instale as dependências necessárias usando o comando `npm install`.
3. **Execução Local**: Execute o servidor de desenvolvimento Angular com `npx nx run deckbuilder:start`.
4. **Navegação**: Acesse `http://localhost:4200` no navegador para iniciar a aplicação.

## Contexto do Projeto

Este projeto foi desenvolvido como parte do processo seletivo para uma vaga de emprego na Stefanini. Ele demonstra minhas habilidades técnicas e capacidade de construir uma aplicação completa e funcional dentro de um contexto profissional.
