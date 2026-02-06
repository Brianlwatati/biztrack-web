# BizTrack Web

A modern business tracking dashboard application built with Next.js, React, and TypeScript. BizTrack provides authentication, user management, transaction tracking, and business analytics.

## Overview

**BizTrack** is a Single Page Application (SPA) designed for business owners and managers to track their business metrics, manage users, and monitor transactions in real-time. The application features secure authentication with role-based access control and an intuitive dashboard interface.

## Features

- **User Authentication**: Secure login and registration system
- **Protected Dashboard**: Authorized access to business metrics and analytics
- **Transaction Management**: Track and manage business transactions
- **User Management**: Add, view, and manage team members
- **Responsive Design**: Mobile-first approach with dark mode support
- **Real-time Updates**: Dynamic data visualization and updates

## Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org) 16
- **UI Library**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Code Quality**: ESLint
- **Icons**: Heroicons
- **Font**: Geist

## Project Structure

```
app/                      # Next.js App Router
├── layout.tsx           # Root layout with global HTML setup
├── (auth)/              # Public authentication routes
│   ├── login/           # Login page
│   ├── register/        # Registration page
│   └── layout.tsx       # Auth layout (no sidebar)
└── (bizapp)/            # Protected app routes
    ├── dashboard/       # Main dashboard with analytics
    ├── transactions/    # Transaction management page
    ├── users/          # User management page
    └── layout.tsx      # Main app layout with header and sidebar

components/
├── layout/             # Layout building blocks
│   ├── header.tsx      # Top navigation header
│   ├── sidebar.tsx     # Side navigation menu
│   └── footer.tsx      # Footer component
├── customtables/       # Data table components
│   ├── usertableone.tsx
│   └── usertabletwo.tsx

features/               # Feature-specific business logic
├── dashboard/         # Dashboard features
│   ├── overviewtiles.tsx
│   ├── readmore.tsx
│   └── successtory.tsx
└── users/            # User management features

hooks/                 # Custom React hooks
mylibs/               # Shared utility libraries
│   └── biztrackroutes.ts

types/                # TypeScript domain models
└── user.ts          # User type definitions

public/               # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server at http://localhost:3000
npm run dev
```

The application will auto-reload on file changes. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Run ESLint
npm run lint
```

## Key Development Practices

### Architecture Patterns

- **Route Groups**: Public auth routes in `(auth)` and protected app routes in `(bizapp)` - purely organizational, don't affect URLs
- **Layout Hierarchy**: `RootLayout` → `MainLayout` (for protected routes) → Page components
- **Component Organization**: Layout components in `layout/`, features in `features/`, reusable components in `components/`

### Styling

- **Tailwind CSS Only**: All styling via Tailwind utility classes
- **Dark Mode**: Supported via `dark:` prefix (e.g., `dark:bg-gray-900`)
- **Responsive Design**: Mobile-first with `sm:`, `md:`, `lg:` breakpoints
- **Layout Standards**: Main content uses `px-8` padding, components use `flex` for layout

### TypeScript

- Strict mode enabled
- No `any` types - always explicit typing
- Path alias `@/*` for clean imports
- Domain types in `types/` directory

## Adding Features

### Create a Protected Page

1. Create file: `app/(bizapp)/[feature]/page.tsx`
2. Export default functional component (no props needed)
3. Page inherits `MainLayout` automatically
4. Use Tailwind classes for styling

### Add a Layout Component

1. Create in `components/layout/` or `components/`
2. Export as default with `{children?: React.ReactNode}` if needed
3. Use Heroicons for consistent icons
4. Import via path alias: `@/components/layout/[name]`

### Create a Reusable Component

1. Create in `components/[feature]/`
2. Type all props explicitly
3. Use Tailwind classes only for styling
4. Export as named export if used in multiple places

## Configuration

- **TypeScript**: `tsconfig.json` - strict mode enabled
- **Next.js**: `next.config.ts`
- **PostCSS**: `postcss.config.mjs` - Tailwind integration
- **ESLint**: `eslint.config.mjs` - code quality checks

**Note**: Config file changes require development server restart

## Deployment

Build the project for production:

```bash
npm run build
npm start
```

The application is optimized for deployment on modern hosting platforms like [Vercel](https://vercel.com) (recommended for Next.js).

## Contributing

When contributing to BizTrack:

1. Follow TypeScript strict mode conventions
2. Use Tailwind CSS for all styling
3. Keep components focused and reusable
4. Run `npm run lint` before committing
5. Test with `npm run build` to catch issues early

## License

This project is proprietary and confidential.

## Support

For questions or issues, please refer to the current development documentation or contact the development team.
