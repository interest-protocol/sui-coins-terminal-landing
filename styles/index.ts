import { css } from '@emotion/react';

export const GlobalStyles = css`
  @font-face {
    font-family: 'Satoshi';
    src:
      url('https://interest-protocol.github.io/fonts/satoshi/Satoshi-Medium.woff2')
        format('woff2'),
      url('https://interest-protocol.github.io/fonts/satoshi/Satoshi-Medium.woff')
        format('woff'),
      url('https://interest-protocol.github.io/fonts/satoshi/Satoshi-Medium.ttf')
        format('truetype');
    font-weight: 500;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Satoshi';
    src:
      url('https://interest-protocol.github.io/fonts/satoshi/Satoshi-Bold.woff2')
        format('woff2'),
      url('https://interest-protocol.github.io/fonts/satoshi/Satoshi-Bold.woff')
        format('woff'),
      url('https://interest-protocol.github.io/fonts/satoshi/Satoshi-Bold.ttf')
        format('truetype');
    font-weight: 700;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Proto';
    src:
      url('https://interest-protocol.github.io/fonts/proto/ProtoMono-Medium.woff2')
        format('woff2'),
      url('https://interest-protocol.github.io/fonts/proto/ProtoMono-Medium.woff')
        format('woff'),
      url('https://interest-protocol.github.io/fonts/proto/ProtoMono-Medium.ttf')
        format('truetype');
    font-weight: 500;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Source Code Pro';
    src:
      url('/fonts/source-code-pro/SourceCodePro-Medium.woff2') format('woff2'),
      url('/fonts/source-code-pro/SourceCodePro-Medium.woff') format('woff'),
      url('/fonts/source-code-pro/SourceCodePro-Medium.ttf') format('truetype');
    font-weight: 500;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Source Code Pro';
    src:
      url('/fonts/source-code-pro/SourceCodePro-Bold.woff2') format('woff2'),
      url('/fonts/source-code-pro/SourceCodePro-Bold.woff') format('woff'),
      url('/fonts/source-code-pro/SourceCodePro-Bold.ttf') format('truetype');
    font-weight: 700;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Source Code Pro';
    src:
      url('/fonts/source-code-pro/SourceCodePro-Regular.woff2') format('woff2'),
      url('/fonts/source-code-pro/SourceCodePro-Regular.woff') format('woff'),
      url('/fonts/source-code-pro/SourceCodePro-Regular.ttf') format('truetype');
    font-weight: 700;
    font-display: swap;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Satoshi';
  }

  .mtk1 {
    font-family: 'Source Code Pro', monospace !important;
  }

  html {
    scroll-behavior: smooth;
  }

  body,
  html {
    overflow-x: hidden;
    background-color: #0e1218;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    padding: 2rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 0.5rem;
    background: transparent;
    transition: all 300ms ease-in-out;
  }

  /* Track on hover */
  ::-webkit-scrollbar-track:hover {
    background: #fff1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 0.5rem;
    border: 5px solid transparent;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 3rem;
    height: 1.5rem;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 1.1rem;
    width: 1.1rem;
    top: 0.2rem;
    left: 0.2rem;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #0053db;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #0053db;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .margin,
  .view-lines,
  .minimap-decorations-layer {
    background: #171f28 !important;
  }
`;
