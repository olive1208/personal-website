---
title: Teaching an AI to Play Ms. Pac-Man
summary: I trained a deep Q-learning agent for 1,000 games. Its average score more than doubled.
order: 6
tools:
  - Python and PyTorch
  - Deep Q-Network (DQN)
  - Google Colab with a T4 GPU
github: https://github.com/olive1208/pacman-dqn-assignment
---

## What it is

An AI agent that learns to play Ms. Pac-Man by trial and error. It only sees the game screen and the score. Nobody tells it the rules.

## Why I built it

I wanted to understand reinforcement learning by doing it. How does an agent get better just from points? What do the training charts really tell you?

## How it works

The agent watches the screen, picks a joystick move and gets the game's points as its reward. Over many games it learns which moves lead to more points. I tuned three settings:

| Setting | What it means | What I did |
|---|---|---|
| Exploration | How often the agent tries a random move instead of its best guess | Lowered it from 20% to 10%, so more moves in later games came from what it had learned |
| Episodes | How many games it plays while training | Raised it to 1,000. A short 25-game test made the score go down, which told me it needed more practice |
| Learning rate | How big a step it takes each time it updates | Kept the default, so I would know which change made the difference |

What happened:

- The average score went from 492 to 1,108.
- All five test games improved.
- The agent survived about 40% longer per game. To me that was the clearest sign it learned to avoid ghosts, since a high score can come from luck.
