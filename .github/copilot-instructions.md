# BizTrack Web - AI Coding Agent Instructions

## Project Overview

BizTrack is a Next.js 16 SPA for business tracking with authentication (login/register) and authenticated dashboard. Uses React 19, TypeScript 5, Tailwind CSS 4, and ESLint. Routes are organized into public `(auth)` and protected `(bizapp)` sections with shared layout components.

## Architecture & Structure

### Route Organization

- **Root layout** (`app/layout.tsx`): Global HTML, fonts (Geist), metadata
- **Auth routes** (`app/(auth)/`): Public login/register pages via route group
- **App routes** (`app/(bizapp)/`): Protected dashboard/transactions/users pages with shared `MainLayout`
- Route groups don't affect URLs; they're purely for semantic organization

### Layout Hierarchy

- `RootLayout` → renders all routes' `children` in HTML body with fonts
- `MainLayout` (`app/(bizapp)/layout.tsx`) → wraps protected pages with flex layout: HeaderComp + SideBarComp + main content (`px-8` padding)
- Auth pages bypass `MainLayout`, render standalone

### Directory Organization

```
app/                  - Next.js App Router (pages, layouts, route groups)
components/layout/    - HeaderComp, SideBarComp, FooterComp (layout building blocks)
components/           - Reusable UI components (future expansion)
types/               - TypeScript domain models (e.g., User)
hooks/               - Custom React hooks (future expansion)
features/            - Feature-specific business logic (future expansion)
mylibs/              - Shared utility libraries (future expansion)
```

## Key Patterns & Conventions

### TypeScript & Typing

- Strict mode enabled; never use `any`
- Path alias `@/*` resolves to workspace root
- Component props always typed explicitly (e.g., `{children: React.ReactNode}`)
- Domain types in `types/user.ts`; feature-specific types can live adjacent to features

### Styling with Tailwind CSS 4

- **Only Tailwind classes**; no inline styles or CSS modules
- Dark mode support via `dark:` prefix (e.g., `dark:bg-gray-900`, `dark:text-white`)
- Responsive prefixes: `sm:`, `md:`, `lg:` for mobile-first design
- Layout patterns: `flex h-screen flex-col`, `flex-1 overflow-auto` for proper spacing
- Reused utilities: `px-8` for main content padding, `gap-*` for spacing, `rounded-lg`/`rounded-xl` for borders
- See `MainLayout`, `HeaderComp`, `SideBarComp` for established patterns

### Component Patterns

- **Page components**: Export default functional components in `app/*/page.tsx`
- **Layout components**: Default export, accept `{children: React.ReactNode}`, compose other components
- **Sub-components**: Named exports for internal patterns (e.g., `NavItem` in `sidebar.tsx`)
- **Icons**: Use `@heroicons/react/24/outline` (e.g., `MapIcon`, `BellIcon`)
- **Future growth**: `hooks/`, `features/`, `mylibs/` directories are scaffolded; co-locate component-specific hooks

## Development Workflow

### Commands

```bash
npm run dev    # Start dev server (localhost:3000); auto-reloads on file changes
npm run build  # Production build; verifies TypeScript and ESLint
npm start      # Run production build locally
npm run lint   # Run ESLint (covers .tsx and .ts files)
```

### Key Development Practices

- **Page edits auto-reload**: Modify `app/*/page.tsx` and see changes instantly
- **Component edits auto-reload**: Update `components/**/*.tsx` and refresh
- **Config changes require restart**: If you edit `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, restart `npm run dev`
- **Check ESLint before building**: Run `npm run lint` to catch issues before `npm run build`
- **Incremental development**: Build often to catch TypeScript errors early

## Critical Workflows

### Adding a Protected Page

1. Create file in `app/(bizapp)/[feature]/page.tsx`
2. Export default functional component with no props (layout provides context)
3. Page automatically inherits `MainLayout` and its styling context
4. Use Tailwind classes; no need to import layout
5. Example: `app/(bizapp)/reports/page.tsx` → accessible at `/reports`

### Adding a Layout Component

1. Create in `components/layout/` or `components/`
2. Export default; accept `{children?: React.ReactNode}` if wrapping content
3. Use `@heroicons/react/24/outline` for consistent icons
4. Import into `MainLayout` or other components via `@/components/layout/[name]`

### Adding a Reusable Component

1. Create in `components/[feature]/` with `.tsx` extension
2. Type all props explicitly; export named if used in multiple places
3. Keep styles inline (Tailwind classes only)
4. Sub-components (internal to parent) use named exports (see `NavItem` in `sidebar.tsx`)

### Connecting to External Services (Future)

- API calls should live in `features/[domain]/` or `mylibs/` to keep pages clean
- Consider custom hooks in `hooks/` for state management patterns
- Document authentication/authorization patterns in this file when added
