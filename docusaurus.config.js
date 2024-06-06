// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docux',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/docux.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Docusaurus-base/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Docux', // Usually your GitHub org/user name.
  projectName: 'Docux', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
       
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docux.png',
      navbar: {
        title: 'Docux',
        logo: {
          alt: 'My Site Logo',
          src: 'img/docux.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'componentName',
          },
          
          {
            to: 'https://github.com/Juniors017?tab=repositories',
            label: 'GitHub',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: ' ',
            items: [
              {
                label: 'Docusaurus',
                to: 'https://docusaurus.io/',
              },
              
            ],
          },

          {
            title: ' ',
            items: [
              {
                label: 'Docusaurus.community',
                to: 'https://docusaurus.community/',
              },
              
            ],
          },

          {
            title: ' ',
            items: [
              {
                label: 'Docux',
                to: 'https://github.com/Juniors017?tab=repositories',
              },
              
            ],
          },
          {
            title: ' ',
            items: [
              {
                label: 'Discord',
                to: 'https://discord.com/channels/398180168688074762/867060369087922187',
              },
              
            ],
          },
          
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Docux Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
