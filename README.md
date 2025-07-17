# Blog REST API

A simple, modern REST API for a blog platform, built with [Hono](https://hono.dev/), [Zod](https://zod.dev/), and [Bun](https://bun.sh/). This project is designed for learning how to build production-grade APIs using TypeScript and best practices.

## Features

- Fast API with [Hono](https://hono.dev/)
- Type-safe validation using [Zod](https://zod.dev/)
- Modern TypeScript setup
- Linting and formatting with [Biome](https://biomejs.dev/)
- Git hooks with Husky and lint-staged
- Error handling with [neverthrow](https://github.com/supermacro/neverthrow)
- Bun runtime for fast development

## Tech Stack

- **Runtime:** [Bun](https://bun.sh/)
- **Framework:** [Hono](https://hono.dev/)
- **Validation:** [Zod](https://zod.dev/)
- **Linting:** [Biome](https://biomejs.dev/)
- **TypeScript:** Strict, modern config

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed (`curl -fsSL https://bun.sh/install | bash`)
- [Node.js](https://nodejs.org/) (for some dev tools)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/blog-api.git
    cd blog-api
    ```

2. **Install dependencies:**
    ```sh
    bun install
    ```

3. **Start the development server:**
    ```sh
    bun run dev
    ```

4. **(Optional) Enable watch mode:**
    ```sh
    bun run dev:watch
    ```

### Linting

- Check code:

    ```bash
    bun run lint:check
    ```

- Fix code:

    ```bash
    bun run lint:fix
    ```

## Project Structure

```

/src
  main.ts         # Entry point
  ...             # Your routes, controllers, etc.
tsconfig.json     # TypeScript config
package.json      # Project config and scripts
```

## Scripts

| Script         | Description                  |
| -------------- | --------------------------- |
| `dev`          | Start the dev server        |
| `dev:watch`    | Start dev server in watch mode |
| `lint:check`   | Lint and check code         |
| `lint:fix`     | Lint and auto-fix code      |

## License

This project is for learning purposes only.

---

**Built with [Bun](https://bun.sh/), [Hono](https://hono.dev/), and [Zod](https://zod.dev/).**

## 🚧 Active Development

This repository is currently in active development and is **not yet complete**. Features, endpoints, and documentation may change frequently.
