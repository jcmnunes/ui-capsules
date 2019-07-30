import { createGlobalStyle } from 'styled-components/macro';

import sourceSansProRegular from './fonts/source-sans-pro-v11-latin-regular.woff';
import sourceSansProRegularWoff2 from './fonts/source-sans-pro-v11-latin-regular.woff2';
import sourceSansPro700 from './fonts/source-sans-pro-v11-latin-700.woff';
import sourceSansPro700Woff2 from './fonts/source-sans-pro-v11-latin-700.woff2';
import HackRegularWoff from './fonts/hack-regular.woff';
import HackRegularWoff2 from './fonts/hack-regular.woff2';
import HackBoldWoff from './fonts/hack-bold.woff';
import HackBoldWoff2 from './fonts/hack-bold.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'),
        url(${sourceSansProRegular}) format('woff'),
        url(${sourceSansProRegularWoff2}) format('woff2');
  }
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 700;
    src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'),
        url(${sourceSansPro700}) format('woff'),
        url(${sourceSansPro700Woff2}) format('woff2');
  }
  @font-face {
    font-family: 'Hack';
    font-style: normal;
    font-weight: 400;
    src: local('Hack'), local('Hack-Regular'),
         url('${HackRegularWoff2}') format('woff2'),
         url('${HackRegularWoff}') format('woff');
  }
  @font-face {
    font-family: 'Hack';
    font-style: normal;
    font-weight: 700;
    src: local('Hack Bold'), local('Hack-Bold'),
         url('${HackBoldWoff2}') format('woff2'),
         url('${HackBoldWoff}') format('woff');
  }

  /* 
    http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Own Styles */
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 14px;
    line-height: 21px;
    font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
    height: 100%;
    color: ${props => props.theme.neutral700};
  }
  a {
    text-decoration: none;
    color: black;
  }
  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    cursor: pointer;

    background: transparent;

    /* inherit font & color from ancestor */
    color: inherit;
    font: inherit;

    /* Normalize \`line-height\`. Cannot be changed from \`normal\` in Firefox 4+. */
    line-height: normal;

    /* Corrects font smoothing for webkit */
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    /* Corrects inability to style clickable \`input\` types in iOS */
    -webkit-appearance: none;

    /* Remove excess padding and border in Firefox 4+ */
    &::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
  }
  
  .js-focus-visible :focus:not(.focus-visible) {
    outline: none;
    box-shadow: none;
  }
`;

export default GlobalStyle;
