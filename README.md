# controle-Poluicao-Ar
 API que mostra a quantidade de poluição nociva a saúde 

## Descrição
API criada com Node.js e Express para monitoramento de qualidade do ar. O projeto inclui endpoints para buscar dados, criar novos registros, visualizar estatísticas e deletar informações.

## Funcionalidades
- **GET `/controle-ar/dados`**: Retorna os dados disponíveis sobre qualidade do ar.
- **POST `/controle-ar/dados`**: Cria um novo registro com informações fornecidas.
- **GET `/controle-ar/estatisticas`**: Retorna estatísticas sobre os dados.
- **DELETE `/controle-ar/dados/:id`**: Remove um dado específico com base no ID.

## Tecnologias
- Node.js
- Express
- Insomnia (para teste de APIs)
- Cors
- Body-parser

## Instalação
1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/controle-ar-api.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd controle-ar-api
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Inicie o servidor:
    ```bash
    npm run dev
    ```

## Testando com Insomnia
### Requisição GET `/dados`
1. Configure o método como **GET**.
2. Use a URL: `http://localhost:3000/controle-ar/dados`.

### Requisição POST `/dados`
1. Configure o método como **POST**.
2. Use a URL: `http://localhost:3000/controle-ar/dados`.
3. No corpo da requisição (JSON), insira:
    ```json
    {
      "local": "Centro",
      "qualidade": "Boa",
      "temperatura": 25,
      "umidade": 60,
      "data": "2025-04-23"
    }
    ```

### Requisição GET `/estatisticas`
1. Configure o método como **GET**.
2. Use a URL: `http://localhost:3000/controle-ar/estatisticas`.

### Requisição DELETE `/dados/:id`
1. Configure o método como **DELETE**.
2. Use a URL, substituindo `:id` pelo valor do ID:
    ```bash
    http://localhost:3000/controle-ar/dados/123
    ```

## Estrutura do Projeto
