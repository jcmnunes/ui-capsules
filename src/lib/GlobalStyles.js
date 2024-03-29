import { createGlobalStyle } from 'styled-components';
import HackRegular from '../assets/fonts/hack-regular.woff2';
import HackBold from '../assets/fonts/hack-bold.woff2';
import Inter from '../assets/fonts/inter.woff2';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Hack';
        font-style: normal;
        font-weight: 400;
        src: url('${HackRegular}') format('woff2');
    }

    @font-face {
        font-family: 'Hack';
        font-style: normal;
        font-weight: 700;
        src: url('${HackBold}') format('woff2');
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('${Inter}') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('${Inter}') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('${Inter}') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /*
      Josh's Custom CSS Reset
      https://www.joshwcomeau.com/css/custom-css-reset/
    */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
    }

    html,
    body,
    #root,
    #__next {
        height: 100%;
    }

    body {
        line-height: 1.5;
        /* -webkit-font-smoothing: antialiased; */
    }

    img,
    picture,
    video,
    canvas,
    svg {
        display: block;
        max-width: 100%;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
    }

    #root,
    #__next {
        isolation: isolate;
    }

    /* Own Styles */
    html {
        box-sizing: border-box;
        font-size: 16px;
        --reach-dialog: 1;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    body {
        padding: 0;
        margin: 0;
        font-size: 1rem;
        line-height: 24px;
        font-family: 'Inter', -apple-system, system-ui, sans-serif;
        height: 100%;
    }

    a {
        text-decoration: none;
        color: #3e4c59;
    }

    input {
        font-family: 'Inter', -apple-system, system-ui, sans-serif;
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

        /* Normalize line-height. Cannot be changed from normal in Firefox 4+. */
        line-height: normal;

        /* Corrects font smoothing for webkit */
        -webkit-font-smoothing: inherit;
        -moz-osx-font-smoothing: inherit;

        /* Corrects inability to style clickable input types in iOS */
        -webkit-appearance: none;
    }

    /* Remove excess padding and border in Firefox 4+ */
    button::-moz-focus-inner {
        border: 0;
        padding: 0;
    }

    pre,
    code {
        font-family: Hack, monospace;
        font-size: 0.875rem;
        line-height: 24px;
        font-weight: 400;
    }

    a {
        outline: none;
    }

    .ui-capsules-icon-primary {
        color: #cbd2d8;
    }

    .ui-capsules-icon-secondary {
        color: #52616d;
    }

    .react-select__menu {
        background-color: var(--colors-bg) !important;
    }

    input[type='number']::-webkit-outer-spin-button,
    input[type='number']::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type='number'] {
        -moz-appearance: textfield;
    }

    body {
        color: ${({ theme }) => theme.colors.neutral700};
        background: ${({ theme }) => theme.colors.bg};

        &.darkTheme {
            background: ${({ theme }) => theme.colors.bg};
        }
    }
`;
