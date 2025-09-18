# Dashboard de Vendas

Este é um projeto desenvolvido com [Next.js](https://nextjs.org), utilizando Tailwind CSS e Prisma para criar um dashboard de vendas.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Banco de dados compatível como ORM Prisma (e.g., PostgreSQL, MySQL, SQLite)

---

## Passos para rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/MarCassMari/dashboard_vendas.git
cd dashboard_vendas
```

### 2. Instalar as dependências

Use o gerenciador de pacotes de sua preferência:

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Configurar o arquivo `.env`

- Renomeie o arquivo `.env.example` para `.env`:
  ```bash
  mv .env.example .env
  ```
- No arquivo `.env`, configure a variável `DATABASE_URL` com a URL de conexão ao banco de dados. Exemplo:
  ```
  DATABASE_URL=postgresql://user:password@localhost:5432/mydatabase
  ```

### 4. Configurar o Prisma

- Rodar as migrações para criar as tabelas no banco de dados:
  ```bash
  npx prisma migrate dev
  ```
- Gerar o cliente do Prisma:
  ```bash
  npx prisma generate
  ```

### 5. Rodar o servidor de desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

---

## Ferramentas e Tecnologias

- **Next.js**: Framework React para renderização no lado do servidor e geração de sites estáticos.
- **Tailwind CSS**: Framework CSS utilitário para estilização.
- **Prisma**: ORM para interação com o banco de dados.
- **PostgreSQL** (ou outro banco de dados compatível com Prisma).

---

## Comandos úteis

- **Abrir o Prisma Studio** (interface para visualizar, adicionar e gerenciar os dados do banco):

  ```bash
  npx prisma studio
  ```

- **Rodar as migrações do banco de dados**:
  ```bash
  npx prisma migrate dev
  ```

---

## Estrutura do Projeto

- `app/`: Contém as páginas do projeto.
- `prisma/`: Contém o arquivo `schema.prisma` para definir o modelo do banco de dados.
- `.env.example`: Exemplo de configuração de variáveis de ambiente.

---

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests, issues, etc.

---
