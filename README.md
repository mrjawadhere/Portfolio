# Jawad Ahmad | AI Engineer & Backend Developer

Jawad Ahmad - AI Engineer & Backend Developer. Exploring AI-Agents and Data Science with a passion for building intelligent systems.

## Features
- Modern, responsive frontend built with React, Vite, and Tailwind CSS.
- Interactive UI elements using Shadcn UI and Framer Motion.
- Robust backend powered by Node.js and Express.js.
- Data persistence using Neon serverless Postgres database and Drizzle ORM.
- User authentication implemented with Passport.js.
- TypeScript for type safety in both frontend and backend.
- Clear separation of concerns between client and server.

## Tech Stack
- **Frontend:** React, Vite, TypeScript, Tailwind CSS, Shadcn UI, Framer Motion
- **Backend:** Node.js, Express.js, TypeScript
- **Database:** Neon (Serverless Postgres), Drizzle ORM
- **Authentication:** Passport.js
- **Validation:** Zod

## Getting Started

### Prerequisites
Make sure you have Node.js and npm (or yarn/pnpm) installed on your system.
- Node.js (v18.x or higher recommended)
- npm (usually comes with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
   (Replace `<repository-url>` with the actual URL once available)
2. Navigate to the project directory:
   ```bash
   cd <project-directory-name>
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running in Development Mode
To start the development server for both the client and server:
```bash
npm run dev
```
This will typically start the client on `http://localhost:5173` and the server on `http://localhost:5000`.

### Building for Production
To build the application for production:
```bash
npm run build
```
This will create optimized static assets for the client and a bundled version of the server in the `dist` directory.

### Running in Production Mode
After building the project, you can start it in production mode:
```bash
npm start
```

## Scripts
- `npm run dev`: Starts the development server for both client and backend with hot reloading.
- `npm run build`: Builds the frontend application and backend server for production.
- `npm start`: Starts the production server (requires a prior `npm run build`).
- `npm run check`: Runs TypeScript type checking for the project.
- `npm run db:push`: Pushes database schema changes using Drizzle ORM (typically used during development).

## License
This project is licensed under the MIT License.
