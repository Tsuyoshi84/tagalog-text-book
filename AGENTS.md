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

---

## 🧪 Recommended Formatting Methods

Use the following VitePress / extended Markdown patterns to keep grammar explanations clear and consistent. These are standardized for this project; prefer them over ad‑hoc formatting.

### 1. Frontmatter Template

Every file starts with descriptive frontmatter. Adjust `outline` levels only if needed.

```yaml
---
title: "Tagalog Verb Focus System"
description: "Explains the Tagalog focus system with examples for actor-, object-, and other focus forms."
outline: [2,3]
---
```

Immediately follow with a level‑1 heading (`#`), even if it repeats the title.

### 2. Tagalog Example Block Pattern

Use bullet or list form for inline examples; ensure Tagalog is italicized and translation is directly below.

```md
- *Kinain ni Maria ang mangga.*  
  (Maria ate the mango.)
```

For phrase pages (per spec):

```md
### Tagalog
*Magkano ito?*

### English
How much is this?
```

### 3. Admonition / Container Usage

Use for concise rules, contrasts, or important notes. Never for large multi‑section content.

```md
::: tip Rule
Actor-focus highlights the doer (*Kumain si Ana.* – Ana ate.)
:::

::: info Variation
The infix *-um-* appears after the first consonant: *kain* → *kumain*.
:::

::: warning Common Error
Do not mix *mag-* with an *-in-* object-focus pattern in the same verb form.
:::

::: details Irregular Roots
Some roots drop a syllable when affixed (e.g., *tanggap* → *tinanggap*).
:::
```

Allowed types: `tip`, `info`, `warning`, `danger`, `details`. Keep titles short (1–3 words) or omit.

### 4. Structured Comparison Tables

Use tables for systematic contrasts (focus, aspect, pronouns, affix functions). Keep headers concise.

```md
| Focus Type | Sample Verb | Root | Completed (Perfective) | Ongoing (Imperfective) | Contemplated (Potential) | English |
| ---------- | ----------- | ---- | ---------------------- | ---------------------- | ------------------------ | ------- |
| Actor      | *Kumain*    | kain | *Kumain*               | *Kumakain*             | *Kakain*                 | to eat |
| Object     | *Kinain*    | kain | *Kinain*               | *Kinakain*             | *Kakainin*               | to eat (object focus) |
```

Guidelines:

- Italicize Tagalog forms.
- Keep English gloss lower case unless proper noun.
- Avoid redundant columns—merge if empty.

### 5. Affix Function Table Pattern

```md
| Affix | Focus | Aspect Handling | Example | English |
| ----- | ----- | --------------- | ------- | ------- |
| *-um-* (infix) | Actor | Infix after first consonant; reduplicate first syllable for ongoing | *Kumakain* | is eating |
| *mag-* | Actor | Prefix; reduplication for ongoing | *Magluluto* | will cook |
| *-in-* (suffix) | Object | Suffix; reduplicate first syllable for ongoing | *Kakainin* | will be eaten |
```

### 6. Verb List Pattern (Canonical)

Maintain in `guide/verbs/verb-list.md` with the project-specified columns:

```md
| Root | Focus | Aspect | Conjugation | English |
| ---- | ----- | ------ | ----------- | ------- |
| kain | Actor | Completed | *Kumain* | ate |
| kain | Actor | Ongoing | *Kumakain* | is eating |
| kain | Actor | Contemplated | *Kakain* | will eat |
| kain | Object | Completed | *Kinain* | was eaten |
```

### 7. Footnotes for Cultural / Etymology Notes

Keep main flow clean; place cultural nuance in a footnote.

```md
*Po* adds politeness in formal contexts.[^po]
[^po]: Common in addressing elders or strangers respectfully.
```

Do not overuse; one cluster per section max unless justified.

### 8. Collapsible Details for Advanced Points

Use `details` container for irregularities or deep dives that are not core.

```md
::: details Aspect Nuance
Some speakers use alternative reduplication in rapid speech; this does not change aspect meaning.
:::
```

### 9. Badges for Inline Labels

Use sparingly to tag concepts (Core, Optional, Irregular).

```md
Actor Focus <Badge type="tip" text="Core" />
Irregular Form <Badge type="warning" text="Irregular" />
```

Allowed badge `type` values: `tip`, `info`, `warning`, `danger`.

### 10. Code / Highlight Blocks For Morphology

Use fenced code blocks with `text` and optional line emphasis for step-by-step derivations.

```text
Root: kain
1. Infix -um- after first consonant: k + um + ain → kumain
2. Reduplicate first syllable for ongoing: ku + makain → kumakain
```

### 11. Line Highlighting (If Demonstrating Source)

Only when showing transformation or config (rare in this project):

```ts{2}
const root = 'kain'
const perfective = 'kumain' // highlighted line
```

### 12. Consistent “See also” Block

Add at end of a section when linking to tightly related grammar topics.

```md
See also: [Verb Aspect](./aspect.md), [Affixes](./affixes.md)
```

### 13. Spacing & Line Breaks

- Use two trailing spaces for intentional line breaks inside bullets.
- Keep one blank line between major sections (`##`).

### 14. Prohibited Patterns

- No placeholder text (never write “TBD”).
- No raw HTML unless needed for width / alt attributes.
- No first-person narrative.

### 15. Quality Checklist Before Commit

- [ ] Frontmatter present
- [ ] Tagalog examples italic + translation
- [ ] Table columns aligned with spec
- [ ] “See also” links included where relevant
- [ ] No redundant explanation duplicated elsewhere

---

Adhering to these formatting methods ensures consistent pedagogy, scannability, and ease of maintenance across the Tagalog learning site.
