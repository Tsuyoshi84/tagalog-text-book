import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Tagalog Text Book",
	description: "Tagalog Text Book for Everyone",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [{ text: "Home", link: "/" }],

		search: {
			provider: "local",
		},

		sidebar: [
			{
				text: "Guide",
				items: [
					{ text: "Overview", link: "/guide/index" },
					{ text: "Pronunciation", link: "/guide/pronunciation" },
					{ text: "Sentence Structure", link: "/guide/sentence-structure" },
					{ text: "Parts of Speech", link: "/guide/parts-of-speech" },
					{ text: "Verbs", link: "/guide/verbs/index" },
					{ text: "Nouns", link: "/guide/nouns" },
					{ text: "Adjectives", link: "/guide/adjectives" },
					{ text: "Pronouns", link: "/guide/pronouns" },
					{ text: "Numbers", link: "/guide/numbers" },
					{ text: "Time & Date", link: "/guide/time-date" },
					{ text: "Particles", link: "/guide/particles" },
					{ text: "Questions", link: "/guide/questions" },
					{ text: "Connectors", link: "/guide/connectors" },
					{ text: "Negation", link: "/guide/negation" },
				],
			},
			{
				text: "Verbs",
				items: [
					{ text: "Focus System", link: "/guide/verbs/focus-system" },
					{ text: "Affixes", link: "/guide/verbs/affixes" },
					{ text: "Conjugation", link: "/guide/verbs/conjugation" },
					{ text: "Aspect", link: "/guide/verbs/aspect" },
					{ text: "Verb List", link: "/guide/verbs/verb-list" },
				],
			},
			{
				text: "Phrases",
				items: [
					{ text: "Overview", link: "/phrases/index" },
					{ text: "Greetings", link: "/phrases/greetings" },
					{ text: "Daily Conversation", link: "/phrases/daily-conversation" },
					{ text: "Travel", link: "/phrases/travel" },
					{ text: "Shopping", link: "/phrases/shopping" },
					{ text: "Food & Dining", link: "/phrases/food-dining" },
					{ text: "Emergency", link: "/phrases/emergency" },
					{ text: "Work & Study", link: "/phrases/work-study" },
				],
			},
			{
				text: "Expressions",
				items: [
					{ text: "Overview", link: "/expressions/index" },
					{ text: "Idioms", link: "/expressions/idioms" },
					{
						text: "Common Expressions",
						link: "/expressions/common-expressions",
					},
					{
						text: "Emotional Expressions",
						link: "/expressions/emotional-expressions",
					},
					{ text: "Taglish", link: "/expressions/taglish" },
				],
			},
			{
				text: "Reference",
				items: [
					{ text: "Overview", link: "/reference/index" },
					{ text: "Grammar Cheatsheet", link: "/reference/grammar-cheatsheet" },
					{ text: "Root Word List", link: "/reference/root-word-list" },
					{ text: "Affix List", link: "/reference/affix-list" },
					{
						text: "Pronunciation Guide",
						link: "/reference/pronunciation-guide",
					},
					{ text: "Learning Resources", link: "/reference/learning-resources" },
				],
			},
			{
				text: "Culture",
				items: [
					{ text: "Overview", link: "/culture/index" },
					{ text: "Etiquette", link: "/culture/etiquette" },
					{ text: "Holidays", link: "/culture/holidays" },
					{
						text: "Regional Differences",
						link: "/culture/regional-differences",
					},
					{ text: "Language History", link: "/culture/language-history" },
				],
			},
		],

		socialLinks: [
			{ icon: "github", link: "https://github.com/vuejs/vitepress" },
		],
	},
})
