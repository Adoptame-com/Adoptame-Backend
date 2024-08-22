# Adoptame

A simple and user-friendly app that connects people with animals in need of adoption, helping you find and adopt your perfect pet.

## General structure

```
root
│
├── src
│ ├── common
│ │ ├── decorators
│ │ ├── dtos
│ │ ├── exceptions
│ │ ├── functions
│ │ ├── filters
│ │ ├── guards
│ │ ├── interceptors
│ │ ├── middlewares
│ │ └── pipes
│ │
│ ├── statics
│ │ └── (codes, constants, docs, messages, paths, etc...)
│ │
│ ├── modules
│ │ ├── module1
│ │ │ ├── controllers
│ │ │ ├── dtos
│ │ │ ├── entities/schemas
│ │ │ ├── services
│ │ │ └── auth.module1.ts
│ │ │
│ │ ├── module2
│ │ │ ├── controllers
│ │ │ ├── dtos
│ │ │ ├── entities/schemas
│ │ │ ├── services
│ │ │ └── users.module2.ts
│ │ │
│ │ └── (other modules)
│ │
│ ├── services
│ ├── app.module.ts
│ └── main.ts
│
├── test
│ ├── (unit and integration tests)
│
├── (other root-level files)
```

### Definitions
**Modules:** Agrupate related components.\
**Controllers:** Manage requests and responses.\
**Services:** Manage bussiness logic.\
**DTO's:** Data objects to transfer and validate data on application.

### Project Setup

Follow these steps to configure and run the project:

1. **Install dependencies:**

    Run the following command to install all project dependencies:

    ```bash
    npm install
    ```

2. **Install VS Code extensions:**

    You can install the required VS Code extensions by running the following commands:

    ```bash
    code --install-extension dbaeumer.vscode-eslint
    code --install-extension rvest.vs-code-prettier-eslint
    ```

    Alternatively, you can install these extensions manually from the VS Code marketplace.

3. **Create configuration file:**

    Create a file named `.env.development` in the root of the project with the following content:

    ```bash
    PORT=
    MONGO_URI=
    JWT_SECRET_KEY=
    ```

4. **Restart Visual Studio Code:**

    To ensure that the configurations are applied correctly, restart Visual Studio Code.

### Features

- **Statics**
- **Exception general handler**
- **Logger**
- **General endpoints decorator handler**
- **Dto's validator**
- **Mongo config**
- **Accounts**
- **Auth with JWT**
- **Not found handler**