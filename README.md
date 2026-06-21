# 🥩 AçougueTV

Sistema de TV para Açougue — exibe produtos, preços e destaques em tempo real numa televisão do açougue.

## Como funciona

- **Tela da TV** (`/tv/index.html`) — fica aberta na televisão do açougue. Exibe lista de produtos com preços e um carrossel de destaques com foto, atualiza automaticamente a cada 30 segundos.
- **Painel Admin** (`/admin/dashboard.html`) — gerencia os produtos: cadastro, edição, exclusão, definição de destaque e desconto.

---

## ⚙️ Pré-requisitos

- [Node.js 18+](https://nodejs.org)
- [Git](https://git-scm.com)
- Conta no [GitHub](https://github.com)
- Conta no [Railway](https://railway.app) (gratuita serve para começar)

---

## 🖼️ Imagem de fundo da TV

Coloque o arquivo `plano_amaro.png` (imagem base virgem do layout) na pasta:

```
public/assets/plano_amaro.png
```

A imagem deve ser 16:9, idealmente **1920×1080px**. Ela será exibida como fundo fixo na tela da TV, e os produtos serão sobrepostos sobre ela.

> **Ajuste de posição:** Se os produtos ficarem desalinhados com os quadros da imagem, edite os valores de `left`, `top`, `width` e `height` em porcentagem na seção `/* ÁREA DA LISTA */` e `/* ÁREA DO DESTAQUE */` do arquivo `public/tv/index.html`.

---

## 🚀 Deploy no Railway — Passo a Passo

### 1. Prepare o projeto localmente

```bash
# Clone ou entre na pasta do projeto
cd acougue-tv

# Instale as dependências
npm install

# Copie o arquivo de variáveis de ambiente
cp .env.example .env
```

### 2. Crie o repositório no GitHub

Acesse [github.com/new](https://github.com/new) e crie um repositório chamado `acougue-tv` (pode ser público ou privado).

```bash
# Dentro da pasta do projeto:
git init
git add .
git commit -m "Initial commit — AçougueTV"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/acougue-tv.git
git push -u origin main
```

### 3. Crie o projeto no Railway

1. Acesse [railway.app](https://railway.app) e faça login (pode usar sua conta GitHub)
2. Clique em **"New Project"**
3. Selecione **"Deploy from GitHub repo"**
4. Autorize o Railway a acessar seus repositórios (botão "Configure GitHub App")
5. Selecione o repositório **`acougue-tv`**
6. O Railway vai detectar o projeto Node.js automaticamente e iniciar o deploy

### 4. Adicione o banco de dados PostgreSQL

1. No painel do projeto Railway, clique em **"+ New"**
2. Selecione **"Database"** → **"Add PostgreSQL"**
3. Aguarde o banco ser criado (leva cerca de 30 segundos)
4. A variável `DATABASE_URL` será injetada automaticamente no serviço da aplicação

### 5. Configure as variáveis de ambiente

1. Clique no serviço da **aplicação** (não no banco de dados)
2. Vá na aba **"Variables"**
3. Clique em **"New Variable"** e adicione:

| Variável | Valor |
|----------|-------|
| `JWT_SECRET` | Gere uma string longa e aleatória (veja abaixo) |
| `NODE_ENV` | `production` |

> **Gerar JWT_SECRET:** No terminal, execute `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` e copie o resultado.

A variável `DATABASE_URL` já é preenchida automaticamente pelo plugin do PostgreSQL — não precisa adicionar manualmente.

### 6. Aguarde o deploy

- O Railway fará o build e deploy automaticamente após salvar as variáveis
- Acompanhe o progresso em **"Deployments"** (ícone de relógio)
- Quando aparecer **"Success"** em verde, o sistema está no ar
- O deploy inicial leva cerca de 2-3 minutos

### 7. Configure os domínios

No painel do serviço da aplicação:

1. Vá em **"Settings"** → **"Networking"**
2. Clique em **"Generate Domain"**
3. Anote a URL gerada (ex: `acougue-tv-production.up.railway.app`)

Se quiser um domínio para a TV e outro para o admin (opcional), você pode gerar dois domínios no mesmo serviço ou acessar tudo pela mesma URL com caminhos diferentes.

---

## 🎬 Primeiro acesso

### Cadastrar a empresa (supermercado)

1. Acesse `https://SUA_URL.up.railway.app/empresas/cadastro.html`
2. Preencha: Nome do supermercado, CNPJ, E-mail e Senha
3. Clique em **"Criar Conta"**
4. Você será redirecionado para o login

### Acessar o painel admin

1. Acesse `https://SUA_URL.up.railway.app/admin/login.html`
2. Entre com o e-mail e senha cadastrados
3. Na barra amarela no topo, você verá o **Token da TV** — copie-o

### Cadastrar produtos

1. Clique em **"+ Novo Produto"**
2. Preencha: Nome, Tipo, Preço por KG e Foto
3. Para colocar em destaque: ative o toggle **"Produto em Destaque"** e informe o preço com desconto
4. Salve

### Ativar a tela da TV

1. Abra um navegador na televisão do açougue e acesse:  
   `https://SUA_URL.up.railway.app/empresas/login.html`
2. Cole o **Token da TV** (copiado do painel admin)
3. Clique em **"Ativar Tela"**
4. A tela ficará logada permanentemente — só precisa fazer isso uma vez

---

## 🔄 Atualizar o sistema

Sempre que fizer alterações no código:

```bash
git add .
git commit -m "Descrição do que foi alterado"
git push origin main
```

O Railway detecta automaticamente o push e faz o deploy em ~2 minutos.

---

## 📁 Estrutura do Projeto

```
acougue-tv/
├── server/
│   ├── index.js              # Servidor Express
│   ├── db.js                 # Conexão PostgreSQL + inicialização das tabelas
│   ├── routes/
│   │   ├── auth.js           # Login e cadastro de empresa
│   │   ├── empresas.js       # Dados da empresa logada
│   │   └── carnes.js         # CRUD dos produtos
│   └── middleware/
│       └── auth.js           # Verificação de JWT e Token da TV
├── public/
│   ├── tv/
│   │   └── index.html        # Tela da TV (açougue)
│   ├── admin/
│   │   ├── login.html        # Login do painel
│   │   ├── dashboard.html    # Lista de produtos
│   │   └── cadastro.html     # Cadastro/edição de produto
│   ├── empresas/
│   │   ├── cadastro.html     # Cadastro de nova empresa
│   │   └── login.html        # Login da TV (via Token)
│   └── assets/
│       └── plano_amaro.png   # ← Você precisa adicionar este arquivo!
├── uploads/                  # Fotos dos produtos (gerado automaticamente)
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

## 🔑 Rotas da API

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/api/auth/empresa/cadastro` | Cadastrar empresa |
| POST | `/api/auth/empresa/login` | Login admin |
| POST | `/api/auth/tv/login` | Validar Token da TV |
| GET | `/api/empresas/me` | Dados da empresa logada |
| GET | `/api/carnes` | Listar produtos (admin) |
| GET | `/api/carnes/tv` | Listar produtos (TV) |
| POST | `/api/carnes` | Cadastrar produto |
| PUT | `/api/carnes/:id` | Editar produto |
| DELETE | `/api/carnes/:id` | Excluir produto |

---

## ❓ Problemas comuns

**Produtos não aparecem na TV**  
→ Verifique se o Token da TV está correto em `/empresas/login.html`. Limpe o localStorage do navegador e insira o token novamente.

**Imagens não carregam em produção**  
→ No Railway, a pasta `uploads/` é efêmera (reseta a cada deploy). Para produção contínua, considere migrar o upload de imagens para um bucket S3 ou Cloudflare R2.

**Erro de banco de dados**  
→ Verifique se o plugin PostgreSQL está conectado ao serviço da aplicação no painel do Railway, e se a variável `DATABASE_URL` aparece nas variáveis do serviço.

**Tela da TV desalinhada com a imagem**  
→ Edite as propriedades `left`, `top`, `width` e `height` (em %) das classes `.lista-carnes` e `.destaque-area` no arquivo `public/tv/index.html`.
