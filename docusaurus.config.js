// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'K-Staff Documentation',
  tagline: 'Privacy-first cross-border recruitment for Korean visa hiring',
  favicon: 'img/favicon.svg',

  future: {v4: true},

  // GitHub Pages on docs.kstaff.co.kr
  url: 'https://docs.kstaff.co.kr',
  baseUrl: '/',
  organizationName: 'jsh940128',
  projectName: 'kstaff-docs',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenAnchors: 'warn',

  // Korean is the primary audience for this product, so Korean is the default
  // locale and serves at `/`. The English variant lives under `/en/`.
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
    localeConfigs: {
      ko: {label: '한국어', direction: 'ltr', htmlLang: 'ko-KR'},
      en: {label: 'English', direction: 'ltr', htmlLang: 'en-US'},
    },
  },

  // Extra <head> tags for favicons of every common size + apple-touch-icon.
  // The primary favicon (config.favicon, above) is the SVG; these are fallbacks.
  headTags: [
    {
      tagName: 'link',
      attributes: {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicon-32x32.png'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/favicon-16x16.png'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'apple-touch-icon', sizes: '180x180', href: '/img/apple-touch-icon.png'},
    },
  ],

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
      // og:image / twitter:image used on link previews.
      image: 'img/og-image.png',
      colorMode: {respectPrefersColorScheme: true},
      navbar: {
        title: 'K-Staff',
        // No logo image: the wordmark stands on its own. Tab favicon (config.favicon)
        // and the OG card (themeConfig.image) are still served from the K monogram.
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
              {label: 'Terms', href: 'https://kstaff.co.kr/terms'},
              {label: 'Privacy', href: 'https://kstaff.co.kr/privacy'},
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
