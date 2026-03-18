// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Linux Unterlagen',
			defaultLocale: 'de',
			locales: { root: { label: 'Deutsch', lang: 'de' } },
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/lean-stack/linux-docs' }],
			sidebar: [
				{
					label: 'Einführung',
					items: [
						{ label: 'Was ist Linux?', slug: 'intro/was-ist-linux' },
						{ label: 'Distributionen', slug: 'intro/distributionen' },
					],
				},
				{
					label: 'Grundlagen',
					items: [
						{
							label: 'Anmeldung',
							autogenerate: { directory: 'basics/anmeldung' },
						},
						{
							label: 'Einführung Shell',
							autogenerate: { directory: 'basics/shell' },
						},
						{
							label: 'Hilfe & Dokumentation',
							autogenerate: { directory: 'basics/hilfe' },
						},
						{
							label: 'Verzeichnisse',
							autogenerate: { directory: 'basics/verzeichnisse' },
						},
						{
							label: 'Dateien',
							autogenerate: { directory: 'basics/dateien' },
						},
						{
							label: 'Ein-/Ausgabe',
							autogenerate: { directory: 'basics/io' },
						},
						{
							label: 'Filter',
							autogenerate: { directory: 'basics/filter' },
						},
						{
							label: 'Suchen',
							autogenerate: { directory: 'basics/suchen' },
						},
					],
				},
				{
					label: 'Administration',
					autogenerate: { directory: 'administration' },
				},
			],
		}),
	],
});
