import { Config } from "@docusaurus/types";
import { Options, ThemeConfig } from "@docusaurus/preset-classic";
import { themes as prismThemes } from "prism-react-renderer";

const presetOptions = {
  docs: {
    sidebarPath: "./sidebars.ts",
    editUrl: "https://github.com/lean-stack/lean-linux/tree/main/",
  },
  blog: false,
} satisfies Options;

const themeConfig = {
  navbar: {
    title: "Lean Linux",
    logo: {
      alt: "Lean Linux Logo",
      src: "img/logo.svg",
    },
    items: [
      {
        type: "doc",
        docId: "basics/linux-intro/what-is-linux",
        position: "left",
        label: "Grundlagen",
      },
      {
        type: "doc",
        docId: "administration/intro",
        position: "left",
        label: "Administration",
      },
      {
        href: "https://github.com/lean-stack/lean-linux",
        label: "GitHub",
        position: "right",
      },
    ],
  },
  footer: {
    copyright:
      "MIT License Copyright (c) 2024-2025 Micha Buchholz. Built with Docusaurus.",
  },
  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
  },
} satisfies ThemeConfig;

export default {
  title: "Lean Linux",
  tagline: "Linux ist cool und einfach zu lernen ...",
  favicon: "img/favicon.ico",

  // Production url
  url: "https://linux.lean-stack.workers.dev",
  baseUrl: "/",

  i18n: {
    defaultLocale: "de",
    locales: ["de"],
  },

  presets: [["classic", presetOptions]],
  themeConfig: themeConfig,
} satisfies Config;
