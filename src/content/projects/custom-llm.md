---
title: Training a Tiny Language Model
summary: I used nanoGPT to train a small language model from scratch, as a class exercise.
order: 4
tools:
  - Python and PyTorch
  - nanoGPT (Andrej Karpathy), through the class notebook
  - Google Colab
github: https://github.com/olive1208/custom-llm
---

## What it is

A class experiment where I trained a very small language model, about 120,000 parameters, from scratch. I trained it twice with the same settings:

1. On the classroom sentences only.
2. On the classroom sentences plus teaching sentences I wrote for two skills: grammar and negation.

Then I tested both models on the same 48 language questions.

## Why I built it

I wanted to see how a language model learns, step by step, using real numbers from my own run. What does a word look like inside the model? How does one training step change a weight? Why does the model pick one word over another?

The picture above shows one answer. Before training, every next word is about equally likely. After training, the model puts almost all its bets on six verbs it saw in the training sentences.

## How it works

- **First run.** The model learned the classroom sentence patterns well. It got all 16 basic pattern questions right. It could not even try the harder questions, because words like "is", "are" and "not" were never in its training data.
- **Second run.** I wrote a small script to make about 5,000 teaching sentences, such as "the cup is not green. it is yellow." I made sure none of the test questions leaked in. Grammar went to 3 out of 3 and negation to 2 out of 3. Overall the model went from 20 to 26 correct out of 48.
- **The failure I dug into.** The model got "the door is not open. it is closed. the door is ___" wrong. I found the cause in my own data. Every open or closed story I wrote ended in "open". The model learned that pattern instead of learning to use the earlier word.

The biggest lesson: the model learns exactly the patterns it sees. When it wrote "the plate is not green. it is green.", it had the shape of the sentence right and the meaning wrong.
