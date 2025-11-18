# 🧪 Testes Automatizados – WebDojo (Cypress)

Este repositório contém a aplicação **WebDojo** e sua suíte de testes automatizados desenvolvida com **Cypress**.  
Abaixo está a documentação completa para execução, estrutura, organização e scripts do projeto.

---

## 📁 Estrutura do Projeto

A estrutura principal dos arquivos de teste está localizada dentro do diretório `cypress/`.

```
WEB/
 └── cypress/
      ├── e2e/
      ├── fixtures/
      │    ├── cep.json
      │    ├── consultancy.json
      │    └── document.pdf
      ├── support/
      │    ├── actions/
      │    │     ├── commands.js
      │    │     ├── e2e.js
      │    │     └── utils.js
      │    └── e2e.js
```

### 📌 Diretórios Principais

- **e2e/**  
  Contém os arquivos de testes E2E escritos em Cypress (ex.: `login.cy.js`).

- **fixtures/**  
  Armazena arquivos utilizados para mock de dados ou uploads:
  - `cep.json`
  - `consultancy.json`
  - `document.pdf`

- **support/**
  - **actions/**  
    Contém funções auxiliares e comandos customizados:
    - `commands.js`
    - `utils.js`
  - `e2e.js`  
    Carregado automaticamente antes dos testes (ideal para imports globais).

---

## 🚀 Como Executar o Projeto WebDojo

Antes de rodar os testes, é necessário iniciar a aplicação WebDojo.

### 1️⃣ Instalar dependências

```bash
npm install
```

### 2️⃣ Rodar a aplicação WebDojo

```bash
npm run dev
```

A aplicação ficará disponível em:

```
http://localhost:3000
```

---

## 🧪 Scripts de Teste

Os testes Cypress podem ser executados em diferentes contextos através dos scripts configurados no `package.json`.

### ▶️ Executar todos os testes

```bash
npm run test
```

Configuração aplicada:
- `viewportWidth=1440`
- `viewportHeight=900`

---

### 🔐 Executar apenas os testes de Login (desktop)

```bash
npm run test:login
```

Configuração aplicada:
- `viewportWidth=1440`
- `viewportHeight=900`

---

### 📱 Executar testes de Login no modo mobile

```bash
npm run test:login:mobile
```

Configuração aplicada:
- `viewportWidth=414`
- `viewportHeight=896` (formato iPhone 11/12/13)

---

## 🛠️ Arquitetura e Boas Práticas

### ✔️ Page Actions (Padrão)
As ações estão organizadas dentro de:

```
cypress/support/actions/
```

Onde ficam funções reutilizáveis para interação com elementos, como:
- login
- preenchimento de formulários
- utilidades

### ✔️ Commands Customizados
Arquivo:

```
cypress/support/commands.js
```

Aqui podem ser adicionados comandos Cypress customizados usando:

```javascript
Cypress.Commands.add('login', (email, senha) => { ... })
```

---

## 📦 Execução em Pipeline (CI/CD)

Recomenda-se configurar o pipeline para usar:

```
npx cypress run
```

Ou execuções segmentadas conforme necessidade:

- smoke tests
- regressão completa
- testes mobile

---

## 📄 Fixturas

A pasta `fixtures` contém dados mockados e arquivos usados pelos testes:

| Arquivo | Utilização |
|--------|------------|
| `cep.json` | Dados de CEP para preenchimento automático |
| `consultancy.json` | Informações usadas em cenários de consultoria |
| `document.pdf` | Upload de documento durante testes |

---

## 🧩 Dependências Principais

- **Cypress**
- **Serve**
- **Node.js (>=16 recomendado)**

---

## ✨ Contribuição

Pull requests são bem-vindos. Mantenha o padrão do projeto:

- Testes E2E em `cypress/e2e`
- Ações e comandos dentro de `support/actions`
- Dados estáticos em `fixtures`

---
