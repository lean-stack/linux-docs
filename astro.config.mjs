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
							label: 'Editoren',
							autogenerate: { directory: 'basics/editoren' },
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
						{
							label: 'Prozessverwaltung',
							autogenerate: { directory: 'basics/prozesse' },
						},
						{
							label: 'Bash-Scripting',
							autogenerate: { directory: 'basics/scripting' },
						},
					],
				},
				{
					label: 'Administration',
					items: [
						{ label: 'Einführung', slug: 'administration' },
						{ label: 'Benutzerverwaltung', autogenerate: { directory: 'administration/benutzer' } },
						{ label: 'Paketverwaltung',    autogenerate: { directory: 'administration/pakete' } },
						{ label: 'Systemstart',        autogenerate: { directory: 'administration/systemstart' } },
						{ label: 'Netzwerk',           autogenerate: { directory: 'administration/netzwerk' } },
						{ label: 'Hardware',           autogenerate: { directory: 'administration/hardware' } },
						{ label: 'Datenträger',        autogenerate: { directory: 'administration/datentraeger' } },
						{ label: 'Logging',            autogenerate: { directory: 'administration/logging' } },
						{ label: 'Zeitplanung',        autogenerate: { directory: 'administration/zeitplanung' } },
						{ label: 'Drucken',            autogenerate: { directory: 'administration/drucken' } },
						{ label: 'Praxis',             autogenerate: { directory: 'administration/praxis' } },
						{ label: 'Systemgrundlagen',   autogenerate: { directory: 'administration/systemgrundlagen' } },
					],
				},
			],
		}),
	],
});
