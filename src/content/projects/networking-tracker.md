---
title: Networking Tracker
summary: A private list to keep track of the people I meet, with sign-in and per-user data.
order: 5
tools:
  - Next.js and TypeScript
  - Tailwind CSS and shadcn/ui
  - Neon Postgres, Neon Auth and the Neon Data API
  - Zod (input checks) and Vitest (tests)
  - Vercel (hosting)
github: https://github.com/olive1208/networking-tracker
live: https://networking-tracker-lovat-gamma.vercel.app
---

## What it is

A small web app to keep track of people I meet and want to stay in touch with. You sign up with email and password, then add contacts with a name, company, role, where you met, notes and a priority. You can search, filter by priority and sort the list.

## Why I built it

I meet a lot of people at events, classes and coffee chats. I wanted a simple place to remember who they are and what we talked about. It was also my first full-stack app with real sign-in and a real database.

## How it works

- The app is built with Next.js and hosted on Vercel. The data lives in a Neon Postgres database.
- Every contact is tied to the user who created it. The database itself enforces this with Row Level Security. So even if someone calls the database directly, they can only see and change their own rows.
- I tested this with two accounts at the same time. The second account saw an empty list while the first had three contacts.
- Every form is checked on the server before anything is saved. Database rules act as a backup check.
- On a phone, the table turns into a list of cards.
