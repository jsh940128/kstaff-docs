// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'K-Staff Documentation',
  tagline: 'Privacy-first, operator-governed cross-border recruitment',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // --- GITHUB PAGES CONFIGURATION ---
  url: 'https://jsh940128.github.io',
  baseUrl: '/kstaff-docs/',
  organizationName: 'jsh940128', // Your GitHub username
  projectName: 'kstaff-docs', // Your repository name
  trailingSlash: false, // Required for GitHub Pages

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      ko: {
        label: '한국어',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Removed the 'editUrl' so the public can't suggest edits to your docs
        },
        blog: false, // Disabled the default blog for now to keep it clean
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'K-Staff',
        logo: {
          alt: 'K-Staff Logo',
          src: 'img/logo.svg', // You can replace this with your own logo later
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/jsh940128/kstaff-docs',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Documentation',
                to: '/docs/overseas-partner',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} K-Staff.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;