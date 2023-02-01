module.exports = {
	singleQuote: true,
	trailingComma: 'es5',
	bracketSpacing: true,
	printWidth: 120,
	semi: true,
	tabWidth: 2,
	useTabs: true,
	importOrder: [
		'^(next/(.*)$)|^(next$)',
		'^(react/(.*)$)|^(react$)',
		'<THIRD_PARTY_MODULES>',
		'^components/(.*)$|^components/(.*)$',
		'^lib/(.*)$',
		'^utils/(.*)$',
		'^constants/(.*)$',
		'^data/(.*)$',
		'^styles/(.*)$',
		'^[./]',
		'^nprogress/nprogress.css$',
		'^@tremor/react/dist/esm/tremor.css$',
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	importOrderGroupNamespaceSpecifiers: true,
	plugins: [require('prettier-plugin-tailwindcss')],
};
