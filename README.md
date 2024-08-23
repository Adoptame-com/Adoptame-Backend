# Adoptame

A simple and user-friendly app that connects people with animals in need of adoption, helping you find and adopt your perfect pet.

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

### Git Branching Strategy

#### `main`
Contains stable, production-ready code. All final releases are made from this branch.

#### `develop`
Integration branch for ongoing development. All new features and improvements are merged here before being released.

#### `deploy`
Used to prepare and deploy code to staging or production environments. Derived from `develop` or `main`.

#### `fix/issue-xxxx`
Dedicated branch for urgent bug fixes. Based on `main`, it’s used to resolve critical issues that need immediate attention.

#### `feature/issue-xxxx`
Individual branches for developing new features or resolving specific issues, derived from `develop`. Named according to the related issue number (`issue-xxxx`).

### Conventional Commits
Use this format for commit messages:
#### **Type**
- **`feat`**: New feature
- **`fix`**: Bug fix
- **`docs`**: Documentation update
- **`style`**: Code formatting
- **`refactor`**: Code change without adding features or fixing bugs
- **`test`**: Adding or updating tests
- **`chore`**: Maintenance tasks

#### **Scope**
- Optional: Identifies the part of the code affected (e.g., `auth`, `api`, `ui`).

#### **Content**
- Brief, imperative summary of the change.

#### Examples

- **Feature**: `feat(ui): add dark mode toggle`
- **Bug Fix**: `fix(api): handle null values`
- **Docs**: `docs(readme): update setup guide`

# Contribution Guide

#### 1. Create an Issue
- **Title**: Clearly describe the issue or feature.
- **Details**: Add any relevant information or context.

#### 2. Branching
- **From**: Always branch from `develop`.
- **Branch Name**: Use `feature/issue-xxxx` (replace `xxxx` with the issue number).

#### 3. Development
- **Code**: Implement the changes in your branch.
- **Commits**: Follow the Conventional Commits guidelines.

#### 4. Pull Request
- **PR Title**: Match the issue title.
- **Description**: Briefly explain the changes.
- **Target Branch**: Always target `develop`.

#### 5. Assign Reviewers
- **Reviewers**: Assign at least two team members for review.
- **Labels**: Add relevant labels (e.g., `bug`, `enhancement`).

#### 6. Address Feedback
- **Revisions**: Make changes based on reviewer feedback.
- **Final Check**: Ensure all comments are addressed before merging.

#### 7. Merge
- **Merge**: Once approved, merge the PR into `develop`.
- **Delete Branch**: Clean up by deleting the feature branch.

### Current Features

- **Statics**
- **Exception general handler**
- **Logger**
- **General endpoints decorator handler**
- **Dto's validator**
- **Mongo config**
- **Accounts**
- **Auth with JWT**
- **Not found handler**
- **Linters and formmaters**
- **Commits format validator**