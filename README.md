# Lista de Produtos

Este é um projeto simples de cadastro e exibição de produtos, desenvolvido com HTML, CSS, JavaScript e integrado ao **JSON Server** para simulação de um banco de dados.

## Funcionalidades

- **Cadastro de Produto**: Permite adicionar novos produtos com nome, descrição, preço e disponibilidade.
- **Exibição de Produtos**: Exibe a lista de produtos cadastrados, ordenada do menor para o maior preço.
- **Redirecionamento**: Ao cadastrar um novo produto, a página é automaticamente redirecionada para a lista de produtos.
  
## Como Rodar o Projeto

1. **Instalar o JSON Server**:

   Se você não tiver o **JSON Server** instalado, você pode instalá-lo globalmente usando o seguinte comando:

   ```bash
   npm install -g json-server

  Ou dentro do diretório do projeto, executando:

    npm install json-server

2. No terminal, dentro da pasta do projeto, execute:
   ```bash
   json-server --watch db.json --port 3000
