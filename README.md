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

### Configuración del Proyecto

Sigue estos pasos para configurar y ejecutar el proyecto:

1. **Instalar dependencias:**

    Ejecuta el siguiente comando para instalar todas las dependencias del proyecto:

    ```bash
    npm install
    ```

2. **Instalar extensiones de VS Code:**

    Puedes instalar las extensiones necesarias de VS Code ejecutando los siguientes comandos:

    ```bash
    code --install-extension dbaeumer.vscode-eslint
    code --install-extension rvest.vs-code-prettier-eslint
    ```

    Alternativamente, puedes instalar estas extensiones manualmente desde el marketplace de VS Code.

3. **Crear archivo de configuración:**

    Crea un archivo llamado `.env.development` en la raíz del proyecto con el siguiente contenido:

    ```bash
    PORT=
    MONGO_URI=
    JWT_SECRET_KEY=
    ```

4. **Reiniciar Visual Studio Code:**

    Para asegurarte de que las configuraciones se apliquen correctamente, reinicia Visual Studio Code.