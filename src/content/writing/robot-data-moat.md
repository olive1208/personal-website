---
title: "Robot data: where's the moat?"
date: 2026-11-05
category: Physical AI
---

Over the last two months, I've met a few people in robotics. Most of them are either selling data or trying to buy it.

That makes sense. LLMs got a free start from internet data. Robots didn't. Scaling laws still hold in robotics, but robot training needs actions, force and task logic, and almost none of that exists online.

In this gold rush, data companies are the first to make money. But how long does that last, and what's the long-term moat? Here's where my thinking has landed so far.

## 1. Do we still need to collect everything?

The world is huge. Multiply skills by tasks by environments and the data you'd need explodes. For a while the plan was to collect everything, but no single company can do that. The industry has settled on a data pyramid: about a million hours of human first-person video, tens of thousands of hours of UMI data, and a few hours of teleop for the last mile. Tactile and force data is barely in the mix yet.

Now people are questioning this. General-purpose models like GPT-6 Astra can control robot arms zero-shot on simple tasks. One founder told me the biggest mistake in the industry was not betting on general-purpose models earlier, so robots could build on what those models already know.

## 2. Nobody knows how to measure data quality

It's very hard to tell whose data is good. First-person video is cheap and diverse, but it often lacks the action signal a robot needs. Even the model teams I talk to don't have a clear way to tell which dataset actually improved their model. Testing on real robots is slow and expensive, so teams often test on recordings or in simulation instead, and neither fully matches how a robot performs in the real world. Robotics also has no shared benchmark for data quality. Whoever builds a trusted way to score robot data will have a lot of leverage. A few YC startups like Hebbian are starting on this, but it's very early.

## 3. The missing piece is the in-deployment data

Most robots today don't learn from their own experience once they're deployed. There's very little RL in real deployments. How do you collect failure data at scale, label it correctly, and feed it back so the same failure doesn't happen twice? The company that solves this gets a real network effect. Every deployed robot makes the next one better, and pretraining data alone can't give you that.

## 4. Operations wins today, deployment wins long term for a data company

In the short term, the moat is operations. You recruit and manage contributors, build hardware, train people, label data, and try to cover a wide range of tasks for very different customers. That complexity is a real moat for now and the unit economics work.

I think the durable path is to follow the data into deployment. Collect data inside real deployments, post-train models on it, and grow into a solutions company. Early on this looks like forward-deployed engineering for robots.

If you are building something in robotics, would love to learn!
