# nest-general-architecture

General architecture for Nest.js with TypeScript implementing 3 Layered Architecture. Node.js.

## General structure

```
root
│
├── src
│ ├── common
│ │ ├── decorators
│ │ ├── dtos
│ │ ├── exceptions
│ │ ├── filters
│ │ ├── guards
│ │ ├── interceptors
│ │ ├── middlewares
│ │ └── pipes
│ │
│ ├── config
│ │ └── (config files)
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
│ ├── shared
│ │ ├── (shared modules, services, etc.)
│ │
│ ├── app.controller.spec.ts
│ ├── app.controller.ts
│ ├── app.module.ts
│ ├── app.service.ts
│ ├── main.ts
│ └── (other src-level files)
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