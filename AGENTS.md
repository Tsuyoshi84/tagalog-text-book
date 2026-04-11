# AGENTS.md

> Guidelines for AI Agents Building the Tagalog Learning Website (VitePress)

## 📘 Project Overview

This repository contains a **static educational website** for learning Tagalog grammar, vocabulary, and expressions.  
The website is built using **VitePress** and written entirely in **Markdown** with simple, consistent formatting.  
The goal is to make a **clear, accurate, and organized grammar reference** that is easy to navigate and maintain.

---

## 🗂 Document Structure

- `docs/guide/` – Core grammar (pronunciation, sentence structure, parts of speech, verbs).
- `docs/phrases/` – Context-based phrase lists for daily use.
- `docs/expressions/` – Idioms, Taglish, and emotional/common expressions.
- `docs/reference/` – Cheat sheets, affix/root lists, pronunciation, resources.
- `docs/culture/` – Etiquette, regional differences, language history.
  Authoritative layout and updates: see `docs/index.md`.

---

## 🧭 General Policy

- The site's tone is **neutral, educational, and concise** — like a textbook.
- Use **English explanations** with **Tagalog examples**.
- Every Tagalog example must include an **English translation**.
- Link related topics using relative Markdown links (`../verbs/affixes.md`).
- Maintain consistency across all pages.
- Avoid redundancy.

---

## 🏗️ Technical Rules

- Framework: **VitePress**
- Language: **Markdown only**
- File names: lowercase, hyphen-separated
- Directory depth: max 5 levels
- Deeper structures require explicit approval to prevent sprawl.
- Each file must start with frontmatter; use the template in "Recommended Formatting Methods → 1. Frontmatter Template."
- Add `#` title after frontmatter; use `##` for main sections and `###` for subsections (see "Recommended Formatting Methods → 1").

---

## 🧩 Content Guidelines

### 1. `guide/`

Core grammar explanations:

- **Pronunciation, sentence structure, parts of speech**
- Detailed verb system (focus, affixes, aspect)
- Examples for every rule and variation

### 2. `verbs/`

Explain **focus system**, **affixation**, and **aspect**:

- Include comparison tables for actor-focus vs object-focus.
- Maintain `guide/verbs/verb-list.md` using the project’s grouped format:
  - Organize by root (e.g., `### kain (eat)`).
  - Under each root, list one or more focus blocks with a 3‑column table:

```md
#### Actor

| Aspect        | Conjugation | English   |
| ------------- | ----------- | --------- |
| Perfective    | _kumain_    | ate       |
| Imperfective  | _kumakain_  | is eating |
| Contemplative | _kakain_    | will eat  |

#### Patient

| Aspect        | Conjugation | English        |
| ------------- | ----------- | -------------- |
| Perfective    | _kinain_    | was eaten      |
| Imperfective  | _kinakain_  | is being eaten |
| Contemplative | _kakainin_  | will be eaten  |
```

Notes:

- Keep Tagalog forms italicized and English gloss lower case.
- Use additional focus blocks (Locative, Instrumental, Benefactive) when the root commonly appears in those foci.
- Group related roots under subsections (e.g., Motion Verbs, Communication Verbs) for navigation.

### 3. `phrases/`

Organized by everyday context (greetings, travel, etc.). Use a two-column table format with one phrase per row.

Preferred format:

```md
| Tagalog        | English           |
| -------------- | ----------------- |
| _Kumusta ka?_  | How are you?      |
| _Magkano ito?_ | How much is this? |
```

Guidelines:

- Italicize Tagalog phrases in the left column.
- Keep one concise English translation per row.
- Group tables under clear subsections (e.g., “Asking About Prices,” “Bargaining”).

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

## ✏️ Writing Style Rules

- Always use **Tagalog in italics** (_kumain_, _maganda_, _bahay_).
- Translate Tagalog examples into English below each line.
- Use **tables** for structured comparisons.
- Use **Oxford commas**.
- Use **present tense** and **third person** for explanatory prose; examples and translations use the tense/aspect being demonstrated.
- Avoid personal tone or filler text.
- Do not use "I", "we", or "you" in narrative/expository text (translations may include pronouns).
- Use emojis effectively to improve readability when appropriate (sparingly; about one per admonition or section):
  - ❌ Wrong example / ✅ Correct example
  - 📝 Notes or important points
  - ⚠️ Warnings or cautions
  - 💡 Tips or insights

---

## 🌐 Navigation Rules

- Each directory includes an `index.md` summarizing its contents.
- Add concise "See also" links to related topics (see "Recommended Formatting Methods → 12. Consistent “See also” Block").
- Match sidebar structure with this folder layout.
- Validate relative links and anchors on build; fail CI on broken links.

---

## 🔍 SEO and Accessibility

- Include descriptive `title` and `description` in every frontmatter.
- Use clear headings and meaningful section names.
- Avoid keyword stuffing.
- Provide meaningful alt text for any images.
- Keep tables readable on mobile (concise headers; avoid excessive columns).
- Use semantic heading order without skipping levels.

---

## ⚙️ Build and Deployment

- Root directory: `docs/`
- Output: `docs/.vitepress/dist`
- Site config: `docs/.vitepress/config.ts`
- Deploy targets: **Cloudflare Pages**, **GitHub Pages**, or **Netlify**
- Recommended: enable link checking and sidebar configuration in VitePress config; fail CI on link errors.

---

## 🤖 Agent Behavior

AI agents (Copilot, Cursor, ChatGPT, CodeRabbit, etc.) must:

1. Follow this file as the **single source of truth**.
2. Automatically generate Markdown pages from this structure.
3. Use consistent terms (`focus`, `aspect`, `affix`).
4. Follow "Prohibited Patterns" (no placeholders, no first-person narrative).
5. Automatically link new files in `index.md`.
6. Respect grammar accuracy and cultural sensitivity.
7. Run link validation and frontmatter checks before submitting PRs.

---

## 🧠 Examples

**Good**

```md
## Object-Focus Verbs

Object-focus verbs highlight the object as the topic.

Example:

- _Kinain ni Maria ang mangga._  
  (The mango was eaten by Maria.)
```

**Bad**

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
outline: [2, 3]
---
```

Immediately follow with a level‑1 heading (`#`), even if it repeats the title. Override `outline` only when section depth demands it; keep consistent per directory (use one default per directory where possible).

### 2. Tagalog Example Block Pattern

Use bullet or list form for inline examples; ensure Tagalog is italicized and translation is directly below.

```md
- _Kinain ni Maria ang mangga._  
  (Maria ate the mango.)
```

For phrase pages, prefer a two-column table:

```md
| Tagalog        | English           |
| -------------- | ----------------- |
| _Magkano ito?_ | How much is this? |
```

### 3. Admonition / Container Usage

Use for concise rules, contrasts, or important notes. Never for large multi‑section content.

```md
::: tip Rule
Actor-focus highlights the doer (_Kumain si Ana._ – Ana ate.)
:::

::: info Variation
The infix _-um-_ appears after the first consonant: _kain_ → _kumain_.
:::

::: warning Common Error
Do not mix _mag-_ with an _-in-_ object-focus pattern in the same verb form.
:::

::: details Irregular Roots
Some roots drop a syllable when affixed (e.g., _tanggap_ → _tinanggap_).
:::
```

Allowed types: `tip`, `info`, `warning`, `danger`, `details`. Keep titles short (1–3 words) or omit.

### 4. Structured Comparison Tables

Use tables for systematic contrasts (focus, aspect, pronouns, affix functions). Keep headers concise.

```md
| Focus Type | Sample Verb | Root | Completed (Perfective) | Ongoing (Imperfective) | Contemplated (Potential) | English               |
| ---------- | ----------- | ---- | ---------------------- | ---------------------- | ------------------------ | --------------------- |
| Actor      | _Kumain_    | kain | _Kumain_               | _Kumakain_             | _Kakain_                 | to eat                |
| Object     | _Kinain_    | kain | _Kinain_               | _Kinakain_             | _Kakainin_               | to eat (object focus) |
```

Guidelines:

- Italicize Tagalog forms.
- Keep English gloss lower case unless proper noun.
- Avoid redundant columns—merge if empty.
- Prefer 6 or fewer columns; split or summarize if wider.

### 5. Affix Function Table Pattern

```md
| Affix           | Focus  | Aspect Handling                                                     | Example     | English       |
| --------------- | ------ | ------------------------------------------------------------------- | ----------- | ------------- |
| _-um-_ (infix)  | Actor  | Infix after first consonant; reduplicate first syllable for ongoing | _Kumakain_  | is eating     |
| _mag-_          | Actor  | Prefix; reduplication for ongoing                                   | _Magluluto_ | will cook     |
| _-in-_ (suffix) | Object | Suffix; reduplicate first syllable for ongoing                      | _Kakainin_  | will be eaten |
```

### 6. Verb List Pattern (Project)

The verb list uses grouped sections by root with per‑focus tables. Preferred structure:

```md
### root (English gloss)

#### FocusName

| Aspect        | Conjugation | English |
| ------------- | ----------- | ------- |
| Perfective    | _form_      | gloss   |
| Imperfective  | _form_      | gloss   |
| Contemplative | _form_      | gloss   |

#### AnotherFocus

| Aspect        | Conjugation | English |
| ------------- | ----------- | ------- |
| Perfective    | _form_      | gloss   |
| Imperfective  | _form_      | gloss   |
| Contemplative | _form_      | gloss   |
```

Guidelines:

- Use consistent sectioning: root at `###`, focus labels at `####`.
- For roots with only one common focus, include just that focus.
- Keep tables concise and mobile‑friendly.

### 7. Footnotes for Cultural / Etymology Notes

Keep main flow clean; place cultural nuance in a footnote.

```md
_Po_ adds politeness in formal contexts.[^po]
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

- No placeholder text (never write "TBD").
- No raw HTML unless needed for width / alt attributes.
- No first-person narrative.

### 15. Quality Checklist Before Commit

- Frontmatter present; headings follow §1
- Examples formatted per §2 (Tagalog italic + translation)
- Tables follow §4–6 where applicable
- "See also" links included per §12

---

Adhering to these formatting methods ensures consistent pedagogy, scannability, and ease of maintenance across the Tagalog learning site.
