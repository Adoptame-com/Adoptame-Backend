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

### Commands to create 3 layered components

**Create module**

```
nest generate module modules/<moduleName>
```

**Create controller**

```
nest generate controller modules/<moduleName>/controllers/<controllerName>
```

**Create service**

```
nest generate service modules/<moduleName>/services/<serviceName>
```

**Create entities**

```
nest generate class modules/<moduleName>/entities/<entityName>
```

**Create DTO's**

```
nest generate class modules/<moduleName>/dto/<dtoName>
```

**Create interceptors**

```
nest generate interceptor common/interceptors/<interceptorName>
```
