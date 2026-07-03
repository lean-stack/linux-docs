// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://linux.lean-stack.rocks/',
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
						{ label: 'Anmeldung',             items: [{ autogenerate: { directory: 'basics/anmeldung' } }] },
						{ label: 'Einführung Shell',      items: [{ autogenerate: { directory: 'basics/shell' } }] },
						{ label: 'Hilfe & Dokumentation', items: [{ autogenerate: { directory: 'basics/hilfe' } }] },
						{ label: 'Verzeichnisse',         items: [{ autogenerate: { directory: 'basics/verzeichnisse' } }] },
						{ label: 'Dateien',               items: [{ autogenerate: { directory: 'basics/dateien' } }] },
						{ label: 'Editoren',              items: [{ autogenerate: { directory: 'basics/editoren' } }] },
						{ label: 'Ein-/Ausgabe',          items: [{ autogenerate: { directory: 'basics/io' } }] },
						{ label: 'Filter',                items: [{ autogenerate: { directory: 'basics/filter' } }] },
						{ label: 'Suchen',                items: [{ autogenerate: { directory: 'basics/suchen' } }] },
						{ label: 'Prozessverwaltung',     items: [{ autogenerate: { directory: 'basics/prozesse' } }] },
						{ label: 'Bash-Scripting',        items: [{ autogenerate: { directory: 'basics/scripting' } }] },
					],
				},
				{
					label: 'Administration',
					items: [
						{ label: 'Einführung',         slug: 'administration' },
						{ label: 'Root-Zugang',        slug: 'administration/root-zugang' },
						{ label: 'Systemgrundlagen',   items: [{ autogenerate: { directory: 'administration/systemgrundlagen' } }] },
						{ label: 'Benutzerverwaltung', items: [{ autogenerate: { directory: 'administration/benutzer' } }] },
						{ label: 'Paketverwaltung',    items: [{ autogenerate: { directory: 'administration/pakete' } }] },
						{ label: 'Systemstart',        items: [{ autogenerate: { directory: 'administration/systemstart' } }] },
						{ label: 'Hardware',           items: [{ autogenerate: { directory: 'administration/hardware' } }] },
						{ label: 'Netzwerk',           items: [{ autogenerate: { directory: 'administration/netzwerk' } }] },
						{ label: 'Datenträger',        items: [{ autogenerate: { directory: 'administration/datentraeger' } }] },
						{ label: 'Logging',            items: [{ autogenerate: { directory: 'administration/logging' } }] },
						{ label: 'Zeitplanung',        items: [{ autogenerate: { directory: 'administration/zeitplanung' } }] },
						{ label: 'Drucken',            items: [{ autogenerate: { directory: 'administration/drucken' } }] },
						{ label: 'SELinux',            items: [{ autogenerate: { directory: 'administration/selinux' } }] },
						{ label: 'Praxis',             items: [{ autogenerate: { directory: 'administration/praxis' } }] },
						{ label: 'Backup',             items: [{ autogenerate: { directory: 'administration/backup' } }] },
						{ label: 'Monitoring',         items: [{ autogenerate: { directory: 'administration/monitoring' } }] },
					],
				},
			],
		}),
	],
});
