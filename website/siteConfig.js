/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'APSL',
    image: '/interfacekit/img/logo_apsl.png',
    infoLink: 'https://github.com/apsl',
    pinned: true
  },
  {
    caption: 'Rentals PMS',
    image: '/interfacekit/img/rentals-pms.png',
    infoLink: 'https://www.rentalspms.com',
    pinned: true
  },
  {
    caption: 'Ibacar',
    image: '/interfacekit/img/ibacar-logo.png',
    infoLink: 'https://www.ibacar.com',
    pinned: true
  },
  {
    caption: 'Nautic Advisor',
    image: '/interfacekit/img/nautic-logo.png',
    infoLink: 'https://www.nauticadvisor.com',
    pinned: true
  }
];

const siteConfig = {
  title: 'InterfaceKit' /* title for your website */,
  tagline: 'A collection of high-quality React Native components',
  url: 'https://interfacekit.github.io' /* your website url */,
  baseUrl: '/interfacekit/' /* base url for your project */,
  projectName: 'interfacekit',
  headerLinks: [
    { doc: 'doc1', label: 'Docs' },
    { doc: 'doc4', label: 'API' },
    { page: 'help', label: 'Help' }
    // { blog: true, label: 'Blog' }
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/ik.svg',
  footerIcon: 'img/ik.svg',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#E9AE12',
    secondaryColor: '#88CCF1'
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: 'Copyright © ' + new Date().getFullYear() + ' APSL',
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default'
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/InterfaceKit'
};

module.exports = siteConfig;
