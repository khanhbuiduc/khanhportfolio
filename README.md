# Khanh Portfolio

Personal portfolio website built with Next.js, showcasing profile info, projects, achievements, and skills.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS 4, Radix UI / shadcn-ui
- **Animation:** Framer Motion
- **Theme:** next-themes (dark/light)
- **Analytics:** Vercel Analytics
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Install

```bash
# Clone the repo (if you haven't already)
git clone <repo-url>
cd khanhportfolio

# Install dependencies
npm install
# or: yarn install / pnpm install
```

### Run development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Project Structure (overview)

```
khanhportfolio/
├── app/              # Next.js App Router (layout, pages, routes)
├── components/       # React components (Hero, About, Projects, ...)
├── data/             # Portfolio data (personal.ts)
├── public/           # Images, icons, static assets
├── lib/              # Utilities
└── styles/           # Global CSS
```

## Customizing Content

Most displayed content (name, title, projects, achievements, skills, links) lives in **`data/personal.ts`**. Edit this file to update the portfolio without touching components.

- **Profile:** name, title, avatar, logo
- **Projects:** list of projects (title, description, tags, repo/demo URLs, images)
- **Achievements:** awards, certifications
- **Skills:** skill groups and items
- **About:** intro highlights
- **Footer / Contact:** copyright, tagline, social links

Project images go in `public/img/projetct/<project-name>/` and are referenced via `image` / `galleryImages` in `data/personal.ts`.

## Deploy

The project can be deployed to [Vercel](https://vercel.com) (built-in Next.js support). Push your code to GitHub and connect the repo to Vercel for automatic build and deploy.

## License

For personal / portfolio use.
