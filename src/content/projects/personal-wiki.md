---
title: Personal Wiki with a Local AI Model
summary: A RAG exercise. A small AI model runs on my laptop and answers questions from my own notes.
order: 3
featured: true
tools:
  - Python
  - Gemma 4 (E2B), run locally with Ollama
  - BM25 keyword search (rank-bm25)
  - Obsidian (to browse the wiki)
github: https://github.com/olive1208/personal-wiki
---

## What it is

A command line assistant that works with my own notes. It turns raw notes into a linked wiki, answers questions with citations and can chat. Everything runs on my laptop, with no internet after setup.

It has three modes:

- **Ask.** A factual question gets a short answer with citations. If the notes don't cover it, it says "INSUFFICIENT EVIDENCE".
- **Chat.** A friendly assistant called Scout helps me plan and draft, based on my notes.
- **Search.** Shows the matching passages from my notes, with no model involved.

## Why I built it

I wanted to learn how to build a personal assistant from the ground up. How does it find the right notes? How do you stop it from making things up? I also wanted to see what a small model can do on a normal laptop with no GPU.

## How it works

This is a RAG setup. RAG stands for retrieval-augmented generation. The tool first finds the relevant notes, then gives only those notes to the model to answer from.

1. My original notes go in a `raw` folder and are never changed.
2. The tool splits the notes into short passages, about 80 words each, and builds a keyword search index.
3. For a question, it finds the 5 best passages and sends only those to the local Gemma model, with strict rules: use only these passages and cite every claim.
4. Code then checks every citation. Any answer with a claim but no citation is flagged.
5. For the wiki, the model writes one page per note and one page per topic. I checked every page against my notes and fixed the mistakes by hand.

What I learned: the small model was good with a single source. It made mistakes when it had to combine two notes, sometimes giving a fact to the wrong source. The search found the right passages every time. The model just lost track of which passage said what.
