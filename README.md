![Pokémon TCG API Logo](https://docs.pokemontcg.io/img/cards-banner2.png)

# DeckWeaver - Gerenciador de Decks de Pokémon TCG

## Sobre o Projeto

DeckWeaver é uma aplicação web desenvolvida para ajudar jogadores de Pokémon Trading Card Game (TCG) a gerenciar seus decks de forma eficiente. Com DeckWeaver, você pode criar, editar, listar e remover seus decks, além de visualizar detalhadamente cada deck, incluindo a quantidade de pokémons e treinadores, e as cores e tipos únicos presentes nele.

## Funcionalidades Principais

- **Listagem de Decks**: Visualize todos os seus decks cadastrados.
- **Criação de Decks**: Insira um nome para o seu deck e adicione cartas, respeitando os limites de 24 a 60 cartas e a restrição de 4 cartas com o mesmo nome.
- **Edição de Decks**: Modifique o nome do deck ou adicione/remova cartas conforme necessário.
- **Remoção de Decks**: Remova qualquer deck que não deseja mais gerenciar.
- **Visualização de Detalhes de Decks**: Veja informações detalhadas sobre cada deck, incluindo a quantidade de pokémons e treinadores, e as cores e tipos únicos presentes.

## Tecnologias Utilizadas

- **Frontend**: Angular 16+ através do Nx Console
- **Estilização**: Tailwind CSS
- **Interface de Usuário Avançada**: Biblioteca UI Infragistics
- **Integração com API**: Fetch API para comunicação com a API de Pokémon TCG

## Como Usar

1. **Instalação**: Clone o repositório e instale as dependências necessárias usando o comando `npm install`.
2. **Execução Local**: Use o comando `npx nx run deckweaver:start` para executar o servidor de desenvolvimento Angular.
3. **Navegação**: Acesse `http://localhost:4200` no navegador para iniciar a aplicação.

## Contribuições

Contribuições são sempre bem-vindas Se você encontrar algum bug ou tiver alguma sugestão de melhoria, sinta-se à vontade para abrir uma issue ou fazer um pull request.

## Licença

DeckWeaver é distribuído sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
