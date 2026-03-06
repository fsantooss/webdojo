# WebDojo - Automação de Testes com Cypress

Projeto de automação de testes end-to-end para a aplicação **WebDojo**, desenvolvido com [Cypress](https://www.cypress.io/).

---

## Requisitos

- [Node.js](https://nodejs.org/) >= 18
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

---

## Instalação

```bash
npm install
# ou
yarn install
```

---

## Executando a Aplicação

A aplicação WebDojo está incluída no mesmo repositório. Para iniciá-la, execute:

```bash
npm run dev
```

Isso irá servir a aplicação em `http://localhost:3000`. **A aplicação deve estar rodando antes de executar os testes.**

---

## Executando os Testes

### Todos os testes (modo headless)

```bash
npm test
```

Executa todos os specs no modo headless com resolução **1440x900**.

### Interface gráfica do Cypress (modo interativo)

```bash
npm run test:ui
```

Abre o Cypress App para executar os testes de forma visual e interativa.

### Apenas os testes de Login

```bash
npm run test:login
```

Executa somente o spec `login.cy.js` em resolução **1440x900** (desktop).

### Testes de Login em resolução mobile

```bash
npm run test:login:mobile
```

Executa o spec `login.cy.js` em resolução **414x896** (mobile).

---

## Estrutura do Projeto

```
cypress/
├── e2e/                         # Specs de teste
│   ├── alerts.cy.js             # Alertas JavaScript (alert, confirm, prompt)
│   ├── cep.cy.js                # Consulta de CEP via API externa
│   ├── consultancy.cy.js        # Formulário de Consultoria
│   ├── github.cy.js             # Gerenciamento de perfis do GitHub
│   ├── hover.cy.js              # Simulação de mouseover
│   ├── iframe.cy.js             # Interação com iFrame (player de vídeo)
│   ├── kanban.cy.js             # Board Kanban (drag and drop)
│   ├── links.cy.js              # Links que abrem nova aba
│   ├── login.cy.js              # Autenticação de usuário
│   └── studio.cy.js             # Exemplo com Cypress Studio
│
├── fixtures/                    # Dados de teste (massa de dados)
│   ├── cep.json                 # Dados de endereço para consulta de CEP
│   ├── consultancy.json         # Dados para o formulário de consultoria
│   └── document.pdf             # Arquivo PDF para upload no formulário
│
└── support/
    ├── actions/
    │   └── consultancy.actions.js   # Comandos de ação do formulário de consultoria
    ├── commands.js              # Comandos customizados globais do Cypress
    ├── e2e.js                   # Ponto de entrada do suporte (importações globais)
    └── utils.js                 # Funções utilitárias
```

---

## Specs de Teste

### `login.cy.js` — Autenticacao

| Cenario | Descricao |
|---------|-----------|
| Login com sucesso | Valida nome do usuário, mensagem de boas-vindas, cookie `login_date` e token no `localStorage` |
| Senha inválida | Valida mensagem "Acesso negado! Tente novamente." |
| Email não cadastrado | Valida mensagem "Acesso negado! Tente novamente." |

### `consultancy.cy.js` — Formulario de Consultoria

| Cenario | Descricao |
|---------|-----------|
| Consultoria Individual | Preenche e envia o formulário com dados de Pessoa Física (CPF) |
| Consultoria In Company | Preenche e envia o formulário com dados de Pessoa Jurídica (CNPJ) |
| Campos obrigatórios | Valida mensagens de erro para Nome Completo, Email e aceite dos termos |

### `cep.cy.js` — Consulta de CEP

| Cenario | Descricao |
|---------|-----------|
| Consulta de CEP | Preenche o CEP, busca via API ViaCEP e valida logradouro, bairro, cidade e estado |

### `alerts.cy.js` — Alertas JavaScript

| Cenario | Descricao |
|---------|-----------|
| Alert Box | Valida mensagem do alert nativo do browser |
| Confirm - OK | Confirma o diálogo e valida resposta positiva |
| Confirm - Cancelar | Cancela o diálogo e valida resposta negativa |
| Prompt | Stubba o prompt, insere texto e valida mensagem de boas-vindas |

### `kanban.cy.js` — Board Kanban

| Cenario | Descricao |
|---------|-----------|
| Drag and Drop | Move a tarefa "Documentar API" de "Todo" para "Done" e valida o board |

### `hover.cy.js` — Mouseover

| Cenario | Descricao |
|---------|-----------|
| Hover no Instagram | Valida que o texto aparece ao passar o mouse sobre o link do Instagram |

### `links.cy.js` — Links em Nova Aba

| Cenario | Descricao |
|---------|-----------|
| Atributos do link | Valida `href` e `target="_blank"` do link do Instagram |
| Termos de uso | Remove o `target` blank e navega para a página de termos de uso |

### `iframe.cy.js` — iFrame

| Cenario | Descricao |
|---------|-----------|
| Player de Vídeo | Acessa o iFrame, clica no play e valida que o botão de pause aparece |

### `github.cy.js` — Perfis do GitHub

| Cenario | Descricao |
|---------|-----------|
| Cadastrar perfil | Adiciona perfis e valida exibição na tabela |
| Remover perfil | Remove um perfil e valida que não existe mais na tabela |
| Link do GitHub | Valida `href` e `target="_blank"` do link gerado para o perfil |

---

## Comandos Customizados

Definidos em `cypress/support/commands.js` e `cypress/support/actions/consultancy.actions.js`.

| Comando | Descricao |
|---------|-----------|
| `cy.start()` | Navega para a página inicial (`/`) |
| `cy.submitLoginForm(email, senha)` | Preenche e submete o formulário de login |
| `cy.login(ui?)` | Realiza o login via programação (padrão) ou pela UI. Passar `true` usa a interface |
| `cy.goTo(botao, titulo)` | Clica em um botão de menu e valida o título `h1` da página destino |
| `cy.fillConsultancyForm(form)` | Preenche todos os campos do formulário de consultoria com base no objeto `form` |
| `cy.submitConsultancyForm()` | Clica no botão "Enviar formulário" |
| `cy.validadeConsultancyModal()` | Valida que o modal de sucesso aparece com a mensagem correta |

---

## Fixtures

### `cep.json`

Dados de endereço utilizados no teste de consulta de CEP.

```json
{
  "cep": "04534011",
  "street": "Rua Joaquim Floriano",
  "neighborhood": "Itaim Bibi",
  "city": "São Paulo",
  "state": "SP"
}
```

### `consultancy.json`

Contém dois perfis de preenchimento para o formulário de consultoria:

- **`personal`** — Pessoa Física (CPF), consultoria Individual
- **`company`** — Pessoa Jurídica (CNPJ), consultoria In Company

### `document.pdf`

Arquivo PDF utilizado como anexo no formulário de consultoria.

---

## Utilitarios

### `cypress/support/utils.js`

| Funcao | Descricao |
|--------|-----------|
| `getTodayForm()` | Retorna a data atual no formato `DD/MM/YYYY`, usada para validar o cookie `login_date` |

---

## Dependencias

| Pacote | Versao | Finalidade |
|--------|--------|------------|
| `cypress` | ^15.10.0 | Framework de testes E2E |
| `cypress-real-events` | ^1.15.0 | Eventos reais de mouse (hover, drag) |
| `serve` | ^14.2.6 | Servidor estático para a aplicação WebDojo |
