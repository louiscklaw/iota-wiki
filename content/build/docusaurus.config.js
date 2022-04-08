// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bee = require('./bee/docusaurus.config'); 

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Build',
    url: '/',
    baseUrl: '/',
    themes: ['@docusaurus/theme-classic'],
    plugins: [...bee.plugins],
    staticDirectories: [...bee.staticDirectories],
};