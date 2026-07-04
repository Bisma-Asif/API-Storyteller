# API-Storyteller

Interactive API documentation and storytelling platform built with TypeScript.

🔗 **Live Website**: [https://bisma-asif.github.io/API-Storyteller](https://bisma-asif.github.io/API-Storyteller)

## Features

- 📚 Interactive API documentation
- 🎨 Beautiful storytelling interface
- ⚡ Built with TypeScript
- 🚀 Fast and responsive

## Getting Started

### Prerequisites
- Node.js 24+
- pnpm

### Installation

```bash
pnpm install
```

### Development

```bash
# Run API server (port 5000)
pnpm --filter @workspace/api-server run dev

# Type check
pnpm run typecheck

# Build
pnpm run build
```

## Project Structure

- **@workspace/api-server** - API backend (Express 5)
- **@workspace/api-spec** - OpenAPI specification
- **@workspace/db** - Database schema (PostgreSQL + Drizzle ORM)
- **@workspace/ui** - Frontend components

## Tech Stack

- **Runtime**: Node.js 24, TypeScript 5.9
- **Package Manager**: pnpm workspaces
- **API**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod v4, drizzle-zod
- **API Codegen**: Orval
- **Build**: esbuild

## Environment Variables

```
DATABASE_URL=postgresql://...
```

## License

MIT

## Links

- 🔗 [Live Demo](https://bisma-asif.github.io/API-Storyteller)
- 🔗 [Replit Project](https://replit.com/@bismaaptech2/API-Storyteller)
