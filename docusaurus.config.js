// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'K-Staff Documentation',
  tagline: 'Privacy-first cross-border recruitment for Korean visa hiring',
  favicon: 'img/favicon.ico',

  future: {v4: true},

  // GitHub Pages on docs.kstaff.co.kr
  url: 'https://docs.kstaff.co.kr',
  baseUrl: '/',
  organizationName: 'jsh940128',
  projectName: 'kstaff-docs',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenAnchors: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
    localeConfigs: {
      en: {label: 'English', direction: 'ltr', htmlLang: 'en-US'},
      ko: {label: '한국어', direction: 'ltr', htmlLang: 'ko-KR'},
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // editUrl intentionally omitted so the public can't suggest edits.
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {respectPrefersColorScheme: true},
      navbar: {
        title: 'K-Staff',
        logo: {alt: 'K-Staff', src: 'img/logo.svg'},
        items: [
          {to: '/docs/intro', label: 'Introduction', position: 'left'},
          {to: '/docs/how-it-works', label: 'How it works', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Role guides',
          },
          {type: 'localeDropdown', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {label: 'Introduction', to: '/docs/intro'},
              {label: 'How it works', to: '/docs/how-it-works'},
            ],
          },
          {
            title: 'Role guides',
            items: [
              {label: 'Overseas Partner', to: '/docs/overseas-partner'},
              {label: 'Korea Partner', to: '/docs/korea-partner'},
              {label: 'Employer', to: '/docs/employer'},
              {label: 'Platform Manager', to: '/docs/platform-manager'},
            ],
          },
          {
            title: 'K-Staff',
            items: [
              {label: 'kstaff.co.kr', href: 'https://kstaff.co.kr'},
              {label: 'Terms & Privacy', href: 'https://kstaff.co.kr/legal'},
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} 한국부동산서비스 주식회사 (Korea Real Estate Service Co., Ltd.). All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
