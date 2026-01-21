# Pleasant Valley Church - Web Application

A modern church website built with Next.js, TypeScript, and Vercel Postgres.

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Database:** Vercel Postgres with Drizzle ORM
- **Authentication:** NextAuth.js v5
- **Styling:** Tailwind CSS
- **Hosting:** Vercel

## Features

- 🏠 Public website with sermons, events, and information
- 👤 User authentication and personal dashboards
- 📊 Spiritual journey tracking with milestones
- 🎤 Sermon library with audio/video content
- 📅 Event management and registration
- 💰 Giving campaigns and donation tracking
- 🔗 Planning Center integration
- 🔐 Admin panel for content management

## Project Structure

```
app/
├── (public)/          # Public-facing pages
├── (dashboard)/       # Authenticated user pages
├── (admin)/          # Admin-only pages
├── api/              # API routes
└── globals.css       # Global styles

lib/
├── db/
│   ├── schema.ts     # Database schema
│   └── index.ts      # Database client
└── auth.ts           # NextAuth configuration

public/               # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/joshuahuffman02/pleasant-valley-web.git
cd pleasant-valley-web
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your database credentials and secrets.

4. Generate database migrations:
```bash
pnpm db:generate
```

5. Run migrations:
```bash
pnpm db:migrate
```

6. Start the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Database Commands

- `pnpm db:generate` - Generate migrations from schema
- `pnpm db:migrate` - Run migrations
- `pnpm db:push` - Push schema changes directly (dev only)
- `pnpm db:studio` - Open Drizzle Studio for database management

## Route Groups

### (public)
Public pages accessible to everyone:
- `/` - Home page
- `/login` - Sign in page
- `/sermons` - Sermon library
- `/events` - Upcoming events

### (dashboard)
Authenticated user pages:
- `/dashboard` - Personal dashboard
- `/dashboard/journey` - Spiritual journey tracker
- `/dashboard/profile` - User profile

### (admin)
Admin-only pages:
- `/admin` - Admin dashboard
- `/admin/users` - User management
- `/admin/sermons` - Sermon management
- `/admin/events` - Event management

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure environment variables
4. Deploy

## Contributing

This project is built for Pleasant Valley Church. For any questions or contributions, please contact the development team.

## License

MIT
