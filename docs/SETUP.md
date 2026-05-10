# 📁 Personal Portfolio — Developer Setup Guide

A full-stack portfolio website where you can add and display your projects with tech stacks.

---

## What Is This?

A personal portfolio website built for developers. You can:
- Show your name, bio, and skills on the homepage
- Display all your projects in a grid with tech badges
- Add, edit, or delete projects from the Admin page

**Stack:** React + TypeScript + Tailwind CSS (frontend) | Express + Node.js (backend) | Supabase (database)

---

## Prerequisites

Install these before starting:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Git](https://git-scm.com/)
- A [Supabase](https://supabase.com) account (free)

---

## Step 1 — Clone the Project

```bash
git clone https://github.com/your-username/Portfolio.git
cd Portfolio
```

---

## Step 2 — Set Up Supabase

1. Go to [supabase.com](https://supabase.com) → **New Project**
2. Go to **SQL Editor** → run this:

```sql
create table projects (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text,
  tech_stack text[] not null default '{}',
  github_url text,
  live_url text,
  image_url text,
  created_at timestamptz default now()
);
```

3. Go to **Settings → API** → copy:
   - `Project URL`
   - `service_role` key (under Service Role)
   - `anon` key (under Project API keys)

---

## Step 3 — Configure Backend

1. Rename `backend/.env.example` to `backend/.env`
2. Open `backend/.env` and add your details:
   ```env
   PORT=5001
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_ANON_KEY=your-anon-key
   ```

---

## Step 4 — Install & Run Backend

```bash
cd backend
npm install
npm run dev
```

✅ You should see: `🚀 Server running on http://localhost:5000`

---

## Step 5 — Install & Run Frontend

Open a **new terminal tab**:

```bash
cd frontend
npm install
npm run dev
```

✅ Open: [http://localhost:5173](http://localhost:5173)

---

## Step 6 — Add Your First Project

1. Go to `http://localhost:5173/admin`
2. Click **Add Project**
3. Fill in title, description, tech stack, links → **Add Project**
4. Visit `/projects` to see it displayed

---

## Project Structure

```
Portfolio/
├── frontend/src/
│   ├── components/    ← UI building blocks
│   ├── pages/         ← Home, Projects, Admin
│   ├── services/      ← API calls
│   └── types/         ← TypeScript types
├── backend/
│   ├── controllers/   ← Business logic
│   ├── routes/        ← API endpoints
│   ├── config/        ← Supabase client
│   └── middleware/    ← Error handling
└── docs/SETUP.md      ← This file
```

---

## API Endpoints

| Method | URL | Action |
|--------|-----|--------|
| GET | `/api/projects` | Get all projects |
| GET | `/api/projects/:id` | Get one project |
| POST | `/api/projects` | Create project |
| PUT | `/api/projects/:id` | Update project |
| DELETE | `/api/projects/:id` | Delete project |

---

## Push to GitHub

```bash
# From the root Portfolio/ folder
git add .
git commit -m "Initial portfolio setup"
git push origin main
```

If you haven't set up GitHub yet:

```bash
git remote add origin https://github.com/your-username/Portfolio.git
git branch -M main
git push -u origin main
```

---

## Customize Your Portfolio

| File | What to change |
|------|----------------|
| `frontend/src/pages/Home.tsx` | Your name, bio, social links |
| `frontend/src/components/Navbar.tsx` | Logo initials |
| `frontend/src/components/Footer.tsx` | GitHub/email links |
| `frontend/index.html` | Page title & meta description |
