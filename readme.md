# Contexto do Projeto

O projeto consiste em um sistema de gerenciamento de mercado com controle de estoque, vendas, clientes, funcionários e campanhas promocionais.

Além disso, o mercado possui um sistema de fidelização por pontos, que podem ser resgatados por produtos quando houver campanhas que possuam tais produtos.

## 📋 Índice

- [Tecnologias](#tecnologias)
- [Como executar](#como-executar)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Modelagem](#modelagem)
- [Rotas da API](#rotas-da-api)
  - [Produtos](#produtos)
  - [Vendas](#vendas)
  - [Entradas](#entradas)
  - [Pessoas](#pessoas)
  - [Campanhas](#campanhas)
  - [Resgates](#resgates)

---

## Tecnologias

- **Node.js** com ES Modules (`"type": "module"`)
- **Express.js** — framework HTTP
- **MongoDB** com **Mongoose** — banco de dados e ODM
- **CORS** habilitado

---

## Como executar

> **Pré-requisito:** o arquivo `.env` foi enviado separadamente ao professor e deve ser colocado na raiz do projeto antes de rodar.

```bash
# 1. Instale as dependências
npm install

# 2. Coloque o arquivo .env na raiz do projeto
# (contém a URI de conexão com o MongoDB)

# 3. Inicie o servidor
node mercadinho.js
```

O servidor sobe em: `http://localhost:8000`

---

## Estrutura do projeto

```
├── mercadinho.js               # Entry point — configura e sobe o Express
├── Models/
│   ├── Produto.js
│   ├── Pessoa.js
│   ├── Venda.js
│   ├── Entrada.js
│   ├── Campanha.js
│   └── Resgate.js
├── controllers/
│   ├── controllers_produtos.js
│   ├── controller_venda.js
│   ├── controller_pessoa.js
│   ├── controller_campanha.js
│   ├── controller_entrada.js
│   └── controllers_resgate.js
├── services/
│   ├── services_produtos.js
│   ├── services_venda.js
│   ├── services_pessoa.js
│   ├── services_campanha.js
│   ├── services_entrada.js
│   └── services_resgate.js
├── routes/
│   ├── routes_produtos.js
│   ├── routes_venda.js
│   ├── routes_pessoa.js
│   ├── routes_campanha.js
│   ├── routes_entrada.js
│   └── routes_resgate.js
└── config/
    └── dbConnect.js
```

---
## Modelagem 
![Modelagel](modelagem.png)

---
## Rotas da API

> Base URL: `http://localhost:8000`

### Produtos

**Base:** `/produtos`

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/produtos` | Lista todos os produtos |
| `GET` | `/produtos/:id` | Busca produto por ID |
| `GET` | `/produtos/descricao/:descricao` | Busca por descrição |
| `GET` | `/produtos/barcode/:codigo_barras` | Busca por código de barras |
| `POST` | `/produtos` | Cria novo produto |
| `PATCH` | `/produtos/:id` | Atualiza produto parcialmente |
| `DELETE` | `/produtos/:id` | Remove produto |

**Body para POST/PATCH:**
```json
{
  "nome": "Arroz Tipo 1",
  "descricao": "Pacote 5kg",
  "preco_venda": 25.90,
  "preco_custo": 18.00,
  "codigo_barras": "7891234560001",
  "qtd_atual": 100,
  "qtd_minima": 20
}
```

---

### Vendas

**Base:** `/vendas`

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/vendas` | Lista todas as vendas |
| `GET` | `/vendas/:id` | Busca venda por ID |
| `POST` | `/vendas` | Registra nova venda |
| `PATCH` | `/vendas/:id` | Atualiza venda |
| `DELETE` | `/vendas/:id` | Remove venda |

**Body para POST:**
```json
{
  "data_venda": "2025-05-30T10:00:00Z",
  "valor_total": 89.50,
  "pontos_ganhos_total": 89,
  "pagamentos": [
    { "tipo": "PIX", "valor": 89.50, "data": "2025-05-30T10:00:00Z" }
  ],
  "itens": []
}
```

---

### Entradas

**Base:** `/entrada`

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/entrada` | Lista todas as entradas |
| `GET` | `/entrada/:id` | Busca entrada por ID |
| `GET` | `/entrada/produto/:nomeProduto` | Busca entrada por nome de produto |
| `POST` | `/entrada` | Registra nova entrada |
| `PATCH` | `/entrada/:id` | Atualiza entrada |
| `DELETE` | `/entrada/:id` | Remove entrada |

**Body para POST:**
```json
{
  "data_entrada": "2025-05-28T08:00:00Z",
  "valor_total": 540.00,
  "itens": []
}
```

---

### Pessoas

**Base:** `/pessoa`

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/pessoa` | Lista todas as pessoas |
| `GET` | `/pessoa/:id` | Busca por ID |
| `GET` | `/pessoa/nome/:nome` | Busca por nome |
| `POST` | `/pessoa` | Cadastra nova pessoa |
| `PATCH` | `/pessoa/:id` | Atualiza dados |
| `DELETE` | `/pessoa/:id` | Remove pessoa |

**Body para POST — Cliente:**
```json
{
  "tipo_pessoa": "Cliente",
  "nome": "Maria da Silva",
  "cpf": "123.456.789-00",
  "telefone": "(77) 99999-1234",
  "endereco": { "cidade": "Vitória da Conquista", "uf": "BA" }
}
```

**Body para POST — Funcionário:**
```json
{
  "tipo_pessoa": "Funcionario",
  "nome": "João Santos",
  "cargo": "Caixa",
  "cpf": "987.654.321-00"
}
```

---

### Campanhas

**Base:** `/campanha`

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/campanha` | Lista todas as campanhas |
| `GET` | `/campanha/:id` | Busca por ID |
| `GET` | `/campanha/descricao/:descricao` | Busca por descrição |
| `POST` | `/campanha` | Cria nova campanha |
| `PATCH` | `/campanha/:id` | Atualiza campanha |
| `DELETE` | `/campanha/:id` | Remove campanha |

**Body para POST:**
```json
{
  "data_inicio": "2025-06-01T00:00:00Z",
  "data_termino": "2025-06-30T23:59:59Z",
  "descricao": "Promoção Junho",
  "tipo_desconto": "percentual"
}
```

---

### Resgates

**Base:** `/resgates` *(rota não registrada no `mercadinho.js` — ver bugs)*

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/resgates` | Lista todos os resgates |
| `GET` | `/resgates/:id` | Busca resgate por ID |
| `POST` | `/resgates` | Registra novo resgate de pontos |
| `PATCH` | `/resgates/:id` | Atualiza resgate |
| `DELETE` | `/resgates/:id` | Remove resgate |

**Body para POST:**
```json
{
  "data_resgate": "2025-05-30T14:00:00Z",
  "id_cliente": 1,
  "pontos_usados_total": 200,
  "itens_resgatados": [
    {
      "id_produto": 10,
      "nome_produto": "Coca-Cola 2L",
      "quantidade": 2,
      "pontos_usados_unit": 100
    }
  ]
}
```
