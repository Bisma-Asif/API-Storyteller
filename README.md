# API-Storyteller

Interactive API documentation and storytelling platform built with TypeScript.

🔗 **Live Website**: Not hosted

## Features

- 📚 Interactive API documentation
- 🎨 Beautiful storytelling interface  
- ⚡ Built with TypeScript & React
- 🚀 Fast and responsive UI
- 📊 Vite-powered development

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
# Run the web app (runs on http://localhost:5173 by default)
pnpm --filter @workspace/api-sdk-explained run dev

# Type check
pnpm run typecheck

# Build
pnpm run build
```

## Project Structure

- **@workspace/api-sdk-explained** - Main React app with Vite (web UI)
- **@workspace/scripts** - Utility scripts
- **artifacts/** - Built artifacts
- **lib/** - Shared libraries

## Tech Stack

- **Frontend**: React 19, TypeScript 5.9, Vite
- **UI Components**: Radix UI, TailwindCSS
- **Forms**: React Hook Form, Zod validation
- **Data Fetching**: TanStack React Query
- **Package Manager**: pnpm workspaces
- **Build**: Vite + esbuild

## Environment Variables

```env
# Add any required environment variables here
```

## Running the App Locally

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development server:
   ```bash
   pnpm --filter @workspace/api-sdk-explained run dev
   ```

3. Open your browser to the URL shown (typically `http://localhost:5173`)

## Building for Production

```bash
pnpm run build
pnpm --filter @workspace/api-sdk-explained run serve  # Preview the build
```

## Links

- 🔗 Live Demo: Not hosted
- 📦 [GitHub Repository](https://github.com/Bisma-Asif/API-Storyteller)
- 📚 [Documentation](./replit.md)

## License

MIT
