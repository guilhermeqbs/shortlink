# Encurtador de Links - Frontend

Este é o frontend do projeto Encurtador de Links, construído com React, Vite e Tailwind CSS.

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool e servidor de desenvolvimento
- **Tailwind CSS** - Framework CSS utilitário
- **Axios** - Cliente HTTP para requisições à API
- **Vitest** - Framework de testes

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Backend do projeto rodando (normalmente na porta 5000)

## 🛠️ Como rodar o projeto?

1. Instale as dependências:
```sh
npm install
```

2. Inicie o servidor de desenvolvimento:
```sh
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## 🏗️ Como buildar o projeto para produção?

1. Gere o build de produção:
```sh
npm run build
```

2. Para visualizar o build localmente:
```sh
npm run preview
```

Os arquivos buildados estarão na pasta `dist/`

## 🧪 Como executar os testes?

```sh
npm run test
```

## 🚀 Como fazer deploy do projeto?


### Vercel
1. Conecte seu repositório ao Vercel
2. Configure o comando de build: `npm run build`
3. Configure a pasta de output: `dist`
4. Configure as variáveis de ambiente


## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── urlCurtaForm.js     # Formulário para encurtar URLs
│   └── UrlCurtaResult.js   # Exibição do resultado
├── App.js                  # Componente principal
├── api.js                  # Configuração da API
└── index.js               # Ponto de entrada da aplicação
```

## ⚙️ Configuração da API

O frontend faz requisições para o backend através do arquivo `src/api.js`. 
Certifique-se de que a URL base da API esteja correta para seu ambiente.

## 🎨 Personalização

O projeto usa Tailwind CSS para estilização. Você pode personalizar:
- Cores e temas no arquivo `tailwind.config.cjs`
- Estilos globais no arquivo `src/index.css`

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera o build de produção
- `npm run preview` - Visualiza o build localmente
- `npm run test` - Executa os testes