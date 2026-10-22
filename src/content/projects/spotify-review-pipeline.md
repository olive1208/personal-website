---
title: Spotify Review Pipeline
summary: A class exercise with a hypothetical case. A multi-agent pipeline that sorts app reviews and ranks what to fix first.
order: 2
featured: true
note: "Class exercise. The business question is hypothetical. I have no connection to Spotify, and this work was not done for Spotify. The reviews come from a public Kaggle dataset."
tools:
  - Python
  - Claude Haiku (labeling and checking reviews)
  - Claude Sonnet (writing the final memo)
  - SQLite (run state and checkpoints)
  - Neon Postgres and Next.js (dashboard)
  - Vercel (hosting)
github: https://github.com/olive1208/spotify-review-pipeline
live: https://spotify-review-pipeline-nine.vercel.app
---

## What it is

The question: if you ran product at Spotify, where should the next quarter of effort go? Access, usability, playback, or billing and support?

To answer it, I built a pipeline that reads a large set of app store reviews, labels each one, checks the labels, groups the complaints, ranks them and writes a short memo. Usability (too many ads, shuffle and skip problems) came out on top.

## Why I built it

I wanted to see how far one person can get with AI agents on a large, messy dataset. I also wanted to learn how to keep a pipeline like this honest. That means keeping costs under control, checking the model's work and being able to trace every number back to its source.

## How it works

Code runs the show. AI models only do the steps that need reading or writing. Each stage saves its output before the next one starts.

<img src="/projects/spotify-agents.svg" alt="Pipeline diagram. Code prepares the data. A classifier agent labels each review. An auditor agent checks a sample. Code groups and ranks the issues, and a namer agent names them. A writer agent drafts the memo, and code checks every number. Results go to a database and dashboard." class="diagram" />

1. **Prepare (code).** Reads all 660,622 rows, removes empty and duplicate text and picks a fixed random sample of 100,000 reviews.
2. **Classifier agent (Claude Haiku).** Labels each review with a topic, intent, severity and a short quote. Code checks every answer. Bad answers get one retry, then go to a quarantine list with a reason.
3. **Auditor agent (Claude Haiku).** A separate prompt relabels 400 reviews without seeing the first answer. The two agreed on topic 87% of the time.
4. **Group and rank (code), with a namer agent.** Code puts each complaint into one issue and scores it by count times severity. The model only writes a readable name for each issue.
5. **Writer agent (Claude Sonnet).** Writes a short memo from the saved tables. Code checks that every number in the memo matches the data.

Some results:

- 99,999 of 100,000 reviews labeled. One failed and is logged with the reason.
- I labeled 50 reviews by hand to test the model. It matched me on topic 86% of the time.
- A hard spending cap stopped any request that would go over budget.
- I stopped the run halfway on purpose. It picked up where it left off without labeling anything twice.

The results live in a database behind a public dashboard. Nothing on the dashboard calls a model.
