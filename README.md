# 📦 Cadastro de Produtos — React Native + Expo

Aplicativo mobile desenvolvido como atividade acadêmica, utilizando **React Native**, **Expo** e **TypeScript**.

> **Atenção:** Este repositório contém apenas a base inicial do projeto. As funcionalidades serão desenvolvidas pelo grupo ao longo da atividade.

---

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado no seu computador:

| Ferramenta | Download |
|------------|----------|
| **Node.js** (versão 18 ou superior) | [nodejs.org](https://nodejs.org) |
| **Git** | [git-scm.com](https://git-scm.com) |
| **Expo Go** (no celular) | [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) / [iOS](https://apps.apple.com/app/expo-go/id982107779) |

> ✅ Após instalar o Node.js, verifique com `node -v` e `npm -v` no terminal.

---

## 🚀 Como rodar o projeto no seu computador

### 1. Clone o repositório

```bash
git clone https://github.com/pedrogamadev/atividade-cadastro-produtos-edjane.git
```

### 2. Entre na pasta do projeto

```bash
cd atividade-cadastro-produtos-edjane
```

### 3. Instale as dependências

```bash
npm install
```

> ⚠️ **Sempre rode este comando depois de clonar ou após alguém adicionar novas dependências ao projeto!**

### 4. Inicie o projeto

```bash
npm start
```

Isso vai abrir o **Expo Dev Tools** no navegador e exibir um **QR Code** no terminal.

### 5. Abra no celular

- Abra o **Expo Go** no seu celular
- Escaneie o QR Code que aparecer no terminal ou navegador
- O app vai carregar direto no seu celular! 📱

> 💡 **Dica:** O computador e o celular precisam estar na **mesma rede Wi-Fi** para funcionar.

### 6. Rodando no emulador (opcional)

Se preferir usar um emulador Android/iOS:

```bash
npm run android   # Android (requer Android Studio)
npm run ios       # iOS (apenas no macOS, requer Xcode)
```

---

## 📁 Estrutura de pastas

```
atividade-cadastro-produtos-edjane/
├── src/
│   ├── components/     → Componentes reutilizáveis (botões, cards, inputs...)
│   ├── screens/        → Telas do aplicativo
│   ├── navigation/     → Configuração da navegação entre telas
│   ├── types/          → Tipos TypeScript compartilhados
│   ├── constants/      → Cores, espaçamentos e outras constantes visuais
│   ├── utils/          → Funções utilitárias (formatação, geração de ID...)
│   └── storage/        → Funções para salvar e ler dados localmente
├── App.tsx             → Ponto de entrada do aplicativo
├── app.json            → Configurações do Expo
├── tsconfig.json       → Configurações do TypeScript
└── package.json        → Dependências e scripts do projeto
```

---

## ⚙️ Scripts disponíveis

| Comando | O que faz |
|---------|-----------|
| `npm start` | Inicia o servidor de desenvolvimento Expo |
| `npm run android` | Abre no emulador Android |
| `npm run ios` | Abre no simulador iOS (somente macOS) |
| `npm run web` | Abre no navegador |

---

## 🔧 Principais tecnologias utilizadas

- **React Native** — Desenvolvimento mobile multiplataforma
- **Expo** — Ferramenta para simplificar o desenvolvimento React Native
- **TypeScript** — Tipagem estática para JavaScript
- **React Navigation** — Navegação entre telas
- **AsyncStorage** — Armazenamento local no dispositivo

---

## ⚠️ Observações importantes

**❌ Nunca envie a pasta `node_modules` para o GitHub!**
Ela é gerada automaticamente pelo `npm install` e pode ter centenas de MB.
O arquivo `.gitignore` já está configurado para ignorá-la automaticamente.

**🔄 Sempre rode `npm install` após clonar ou após um colega adicionar novas dependências.**

**📁 Cada integrante deve criar suas telas na pasta `src/screens/`.**

**🧩 Componentes reutilizáveis ficam em `src/components/`.**

---

## 👥 Grupo

Atividade acadêmica desenvolvida em grupo:
Pedro Humberto Gama de Medeiros - 01741824

---

## 📄 Licença

Este projeto é de uso acadêmico.
