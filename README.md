# EduDash — Student Dashboard

A futuristic, animated student dashboard built with Next.js, Supabase, Tailwind CSS, and Framer Motion. Designed for buttery-smooth interactions with hardware-accelerated animations and zero layout shifts.

---

## Architecture

### Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Database | Supabase (PostgreSQL) |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion v12 |
| Icons | Lucide React |

### Server / Client Component Split

| File | Type | Reason |
|---|---|---|
| `app/dashboard/page.tsx` | RSC | Fetches courses + profile from Supabase; renders static HTML, delegates interactivity to client children |
| `app/dashboard/layout.tsx` | RSC | Shell layout — no state or effects |
| `app/dashboard/loading.tsx` | RSC | Skeleton UI — pure CSS animations, no JS |
| `app/dashboard/error.tsx` | Client | Needs `useEffect` for error recovery + `reset()` button |
| `components/dashboard/sidebar.tsx` | Client | Collapsible state, `layoutId` highlight, responsive breakpoints |
| `components/dashboard/glass-card.tsx` | Client | Framer Motion `whileHover` spring |
| `components/dashboard/hero-tile.tsx` | Client | Animated streak badge (spring + infinite pulse) |
| `components/dashboard/course-tiles.tsx` | Client | Stagger entrance per course card |
| `components/dashboard/course-tile.tsx` | Client | Animated progress bar via `useMotionValue` |
| `components/dashboard/animated-progress.tsx` | Client | Live counter via `useMotionValue` + `useMotionValueEvent` |
| `components/dashboard/bento-grid.tsx` | Client | `staggerChildren` variant orchestration |
| `components/dashboard/activity-tile.tsx` | Client | Client-only random data generation (avoids hydration mismatch) |
| `components/dashboard/lucide-icon.tsx` | Client | Dynamic icon lookup from string |
| `lib/supabase/server.ts` | RSC-only | `createServerClient` with cookie handling |
| `lib/supabase/client.ts` | Client-only | `createBrowserClient` for interactive auth |

### Supabase Data Flow

```
Browser request → server.ts (createServerClient)
                       ↓
            app/dashboard/page.tsx (RSC)
                  ↙           ↘
        ProfileSection     CoursesSection
             ↓                   ↓
        profiles table     courses table
             ↓                   ↓
         HeroTile           CourseTiles
         + stat cards       (client, animated)
```

- All database queries run in **Server Components** — no API routes needed
- Data is fetched, rendered to HTML, and streamed to the client
- Client components only handle **presentation and animation** of data they receive as props
- Loading states use `<Suspense>` boundaries with skeleton placeholders sized to match the bento grid exactly (zero Cumulative Layout Shift)

---

## Animations Approach

All animations use only `transform` and `opacity` properties — no `width`, `height`, `top`, `left`, or `margin` transitions that would trigger browser layout/reflow.

| Animation | Technique | Properties |
|---|---|---|
| Page load stagger | `staggerChildren: 0.04` | `opacity`, `translateY` |
| Card hover | `whileHover` spring | `scale` |
| Card glow | CSS `group-hover:opacity-100` | `opacity` |
| Progress bar fill | `animate width` | `width` (bar is independent layer) |
| Live percentage counter | `useMotionValue` + `useMotionValueEvent` | — |
| Sidebar highlight | `layoutId="active-nav"` spring | Framer Motion layout |
| Streak badge pop-in | Spring `scale: 0 → 1` | `scale` |
| Contribution squares | Staggered `scale: 0.5 → 1` | `scale`, `opacity` |

---

## Challenges Faced

- **Turbopack / SWC on Windows x64**: The native SWC binary for this platform failed to load, requiring `--webpack` flag on all `dev` and `build` commands. The Next.js TypeScript checker worker also crashed intermittently due to WASM bindings — solved by running `tsc --noEmit` separately.
- **Hydration mismatch**: `Math.random()` in a client component's initial render produced different values between SSR and hydration. Fixed by moving random generation into a `useEffect` and rendering a skeleton placeholder until the data is set.
- **Responsive sidebar**: Balancing the collapsible desktop sidebar with a mobile-friendly bottom navigation required careful Tailwind breakpoint layering (`hidden md:flex` + `md:hidden fixed`).
- **Supabase offline**: Without configured `.env.local` keys, all Supabase queries throw fetch errors. Error boundaries and inline fallback states handle this gracefully.

---

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects to `/dashboard`.

### Connecting Supabase

1. Create a free project at [supabase.com](https://supabase.com)
2. Run `supabase/migrations/001_init.sql` and `supabase/migrations/002_profiles.sql` in the SQL Editor
3. Copy your **Project URL** and **anon public key** into `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

4. Restart the dev server

---

## Build

```bash
npm run build
npm start
```

Note: `--webpack` flag is required on this platform (Windows x64) because Turbopack native bindings are unavailable.
