// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Distributed Systems',
  tagline: '',
  url: 'https://fesb-distributed-systems-2022.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'fesb-distributed-systems-2022',
  projectName: 'ipazanin-ds-labs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Distributed Systems',
        logo: {
          alt: 'FESB Logo',
          src: 'img/fesb.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'labs/labs',
            position: 'left',
            label: 'Labs',
          },
          {
            type: 'doc',
            docId: 'students/student-assignments',
            label: 'Students',
            position: 'left',
          },
          {
            href: 'https://github.com/fesb-distributed-systems-2022/fesb-distributed-systems-2022.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} FESB in cooperation with Zoraja Consulting.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp', 'powershell'],
      },
    }),
};

module.exports = config;
