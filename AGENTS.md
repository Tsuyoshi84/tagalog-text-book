# AGENTS.md

> Guidelines for AI Agents Building the Tagalog Learning Website (VitePress)

## 📘 Project Overview

This repository contains a **static educational website** for learning Tagalog grammar, vocabulary, and expressions.  
The website is built using **VitePress** and written entirely in **Markdown** with simple, consistent formatting.  
The goal is to make a **clear, accurate, and organized grammar reference** that is easy to navigate and maintain.

---

## 🗂 Document Structure

```plain

docs/
├── index.md
├── guide/
│   ├── index.md
│   ├── pronunciation.md
│   ├── sentence-structure.md
│   ├── parts-of-speech.md
│   ├── verbs/
│   │   ├── index.md
│   │   ├── focus-system.md
│   │   ├── affixes.md
│   │   ├── conjugation.md
│   │   ├── aspect.md
│   │   ├── verb-list.md
│   ├── nouns.md
│   ├── adjectives.md
│   ├── pronouns.md
│   ├── numbers.md
│   ├── time-date.md
│   ├── particles.md
│   ├── questions.md
│   ├── connectors.md
│   └── negation.md
├── phrases/
│   ├── index.md
│   ├── greetings.md
│   ├── daily-conversation.md
│   ├── travel.md
│   ├── shopping.md
│   ├── food-dining.md
│   ├── emergency.md
│   └── work-study.md
├── expressions/
│   ├── index.md
│   ├── idioms.md
│   ├── common-expressions.md
│   ├── emotional-expressions.md
│   └── taglish.md
├── reference/
│   ├── index.md
│   ├── grammar-cheatsheet.md
│   ├── root-word-list.md
│   ├── affix-list.md
│   ├── pronunciation-guide.md
│   └── learning-resources.md
├── culture/
│   ├── index.md
│   ├── etiquette.md
│   ├── holidays.md
│   ├── regional-differences.md
│   └── language-history.md
└── about/
├── index.md
├── site-structure.md
├── contributors.md
└── license.md

````

---

## 🧭 General Policy

- The site’s tone is **neutral, educational, and concise** — like a textbook.
- Use **English explanations** with **Tagalog examples**.
- Every Tagalog example must include an **English translation**.
- Avoid redundancy; link related topics using relative Markdown links (`../verbs/affixes.md`).
- Maintain consistency across all pages.

---

## 🏗️ Technical Rules

- Framework: **VitePress**
- Language: **Markdown only**
- File names: lowercase, hyphen-separated
- Directory depth: max 3 levels
- Each file must start with frontmatter:

```yaml
---
title: "Tagalog Verb Focus System"
description: "Learn how Tagalog verbs use different focus markers like -um-, mag-, and -in-."
outline: [2, 3]
---
````

- Add `#` title after frontmatter.
- Use `##` for main sections and `###` for subsections.

---

## 🧩 Content Guidelines

### 1. `guide/`

Core grammar explanations:

- **Pronunciation, sentence structure, parts of speech**
- Detailed verb system (focus, affixes, aspect)
- Examples for every rule and variation

### 2. `verbs/`

Explain **focus system**, **affixation**, and **aspect**:

- Include comparison tables for actor-focus vs object-focus
- Maintain a `verb-list.md` with:

| Root | Focus | Aspect | Conjugation | English |
| ---- | ----- | ------ | ----------- | ------- |

### 3. `phrases/`

Organized by everyday context (greetings, travel, etc.)

Use this format:

```md
### Tagalog
Kumusta ka?

### English
How are you?
```

### 4. `expressions/`

Idioms, Taglish usage, emotional tones, and common phrases.

### 5. `reference/`

Concise summary documents:

- Grammar cheat sheet
- Affix list
- Pronunciation chart
- External resource links

### 6. `culture/`

Cultural notes relevant to communication:

- Politeness, social cues, regional differences

### 7. `about/`

Project overview, contributors, and license.

---

## ✏️ Writing Style Rules

- Always use **Tagalog in italics** (*kumain*, *maganda*, *bahay*).
- Translate Tagalog examples into English below each line.
- Use **tables** for structured comparisons.
- Use **Oxford commas**.
- Avoid personal tone or filler text.
- Write in **present tense** and **third person**.
- Do not use “I”, “we”, or “you”.

---

## 🌐 Navigation Rules

- Each directory includes an `index.md` summarizing its contents.
- Add “See also” links to related topics.
  Example: `See also: [Verb Aspect](./aspect.md)`
- Match sidebar structure with this folder layout.

---

## 🔍 SEO and Accessibility

- Include descriptive `title` and `description` in every frontmatter.
- Use clear headings and meaningful section names.
- Avoid keyword stuffing.

---

## ⚙️ Build and Deployment

- Root directory: `/docs`
- Output: `/dist`
- Site config: `.vitepress/config.ts`
- Deploy targets: **Cloudflare Pages**, **GitHub Pages**, or **Netlify**

---

## 🤖 Agent Behavior

AI agents (Copilot, Cursor, ChatGPT, CodeRabbit, etc.) must:

1. Follow this file as the **single source of truth**.
2. Automatically generate Markdown pages from this structure.
3. Use consistent terms (`focus`, `aspect`, `affix`).
4. Never generate filler like “TBD” or “Lorem ipsum”.
5. Automatically link new files in `index.md`.
6. Respect grammar accuracy and cultural sensitivity.

---

## 🧠 Examples

✅ **Good**

```md
## Object-Focus Verbs
Object-focus verbs highlight the object as the topic.

Example:
- *Kinain ni Maria ang mangga.*  
  (The mango was eaten by Maria.)
```

❌ **Bad**

```md
This section will be written later.
```

---

## 🧾 License

All content is educational and open-source under **CC BY-SA 4.0**.
Cite any reused materials properly.

---

## 🧭 Summary

**Goal:** Build a clear, complete, and consistent Tagalog learning reference site in Markdown using VitePress.
**Priority:** Accuracy → Structure → Readability → Simplicity.
