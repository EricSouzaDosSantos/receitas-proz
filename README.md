# Estudos de React com Firebase Authentication

Este projeto tem como objetivo demonstrar o uso do Firebase Authentication em uma aplicação React, com funcionalidades de cadastro e login de usuários. A aplicação utiliza hooks específicos do Firebase para facilitar a integração e a autenticação de usuários.

## Estrutura do Projeto

### index.jsx
Este arquivo contém o componente principal da aplicação, onde são implementadas as funções de cadastro e login, além da lógica de navegação e manipulação do estado.

### Estilização
Os estilos são definidos em arquivos CSS separados, mas são importados e utilizados nos componentes React.

## Configuração do Firebase
O Firebase é configurado em um arquivo separado (firebaseConfig.js) que exporta a instância de autenticação.

firebaseConfig.js
```javascript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_AUTH_DOMAIN",
    projectId: "SEU_PROJECT_ID",
    storageBucket: "SEU_STORAGE_BUCKET",
    messagingSenderId: "SEU_MESSAGING_SENDER_ID",
    appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```
## Funcionalidades
### Cadastro
Permite que um novo usuário se cadastre utilizando um email e senha.

#### Login
Permite que um usuário existente faça login utilizando email e senha.

### Navegação
Permite a navegação entre diferentes páginas de receitas.

## Conclusão
Este projeto fornece uma base sólida para a implementação de autenticação com Firebase em aplicações React. Continuarei estudando e aprimorando minhas habilidades em React e Firebase para construir aplicações web mais robustas e seguras.

## Contribuição 

Este é um projeto de código aberto, então sinta-se à vontade para contribuir com sugestões, correções de bugs ou até mesmo novas funcionalidades. Todas as contribuições são bem-vindas!

## Licença 

Este projeto está licenciado sob a Licença MIT. Para mais detalhes, consulte o arquivo [LICENSE](LICENSE).

---
