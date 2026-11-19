# Anweisungen für dieses Repository

## Zielgruppe und Sprache

- Verfasse Kursinhalte auf Deutsch für Linux-Einsteigerinnen und -Einsteiger.
- Erkläre neue Begriffe bei der ersten Verwendung und zeige die Anwendung anhand konkreter Befehle und nachvollziehbarer Beispiele.

## Distributionsübergreifende Darstellung

- Wenn sich Befehle, Konfigurationspfade, Werkzeuge oder Abläufe zwischen Distributionen unterscheiden, zeige immer die Varianten für Red Hat Enterprise Linux (RHEL) und Debian. Ergänze nach Möglichkeit die passende Variante für SUSE oder openSUSE. Benenne bei abweichendem Verhalten die konkrete Distribution und gegebenenfalls die Version.
- Zeige bei identischen Abläufen ein gemeinsames Beispiel und nenne, für welche Distributionen es gilt.
- Wende diese Vorgaben auch bei Spezialthemen und bei System V Init (SysVinit) an. Zeige distributionsspezifische Werkzeuge und Anpassungen, die die Benutzung oder Administration erleichtern, soweit sie für das Thema verfügbar sind oder waren.
- Ordne historische Varianten der jeweiligen Distribution und Version zu. Kennzeichne, wenn ein damaliger Befehl oder Konfigurationspfad auf aktuellen Versionen nicht mehr verfügbar ist.

## Projektstruktur und Prüfung

- Pflege die Kursseiten als MDX unter `src/content/docs/`. Orientiere dich an der bestehenden Astro-/Starlight-Struktur und verwende vorhandene Starlight-Komponenten für Beispiele und Hinweise.
- Prüfe bei neuen oder verschobenen Kursseiten die Navigation in `astro.config.mjs`, die Reihenfolge im MDX-Frontmatter und die betroffenen internen Links.
- Prüfe Änderungen an der Website mit `pnpm build`. Falls der Build nicht ausgeführt werden kann, gib den Grund an.

## Git und Cloudflare-Preview

- Lege für Änderungen einen Arbeitsbranch an und committe die Änderungen dort. Arbeite auf einem vorhandenen Arbeitsbranch weiter, wenn die Änderungen zur selben Aufgabe gehören.
- Verwende für manuelle Cloudflare-Preview-Tests den Arbeitsbranch. Lass den Produktionsbranch bis zur Freigabe unverändert.
