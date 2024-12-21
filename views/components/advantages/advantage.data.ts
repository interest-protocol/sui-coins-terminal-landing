import { OpenInNewSVG } from '@/components/svg';

import { AdvantageItemProps } from './advantages-item/advantage-item.types';

export const ADVANTAGE_DATA: ReadonlyArray<AdvantageItemProps> = [
  {
    title: 'Share team inboxes',
    description:
      'Terminal is designed to work anywhere the web runs, including React, Plain HTML/JS, and many other frameworks.',
    buttonList: [
      {
        title: 'Copy to Clipboard',
        isCopyToClipBoard: true,
      },
    ],
    code: `// Type some code ->

console.log "Hello World";
// â é ù ï ø ç Ã Ē Æ œ

function updateGutters cm 
    var gutters cm display gutters
        __specs cm options gutters

  removeChildren gutters

  for var i 0 i specs length i 
      var gutterClass __specs i
      var gElt gutters appendChild
          elt
              "div"
              null
              "CodeMirror-gutter " gutterClass

    if  gutterClass   "CodeMirror-linenumbers"
        cm display lineGutter   gElt
        gElt style width     cm display lineNumWidth
`,
  },
  {
    invert: true,
    title: 'Code snippet',
    description:
      'This code snippet demonstrates how to integrate SUI Terminal into your HTML page. It imports the SUI Terminal library via a CDN, which allows for an end-to-end cryptocurrency swap interface.',
    buttonList: [
      {
        title: 'Example directory',
        Icon: OpenInNewSVG,
      },
      {
        title: 'show fully Typed API',
        Icon: OpenInNewSVG,
      },
    ],
    code: `// Type some code ->

console.log "Hello World";
// â é ù ï ø ç Ã Ē Æ œ

function updateGutters cm 
    var gutters cm display gutters
        __specs cm options gutters

  removeChildren gutters

  for var i 0 i specs length i 
      var gutterClass __specs i
      var gElt gutters appendChild
          elt
              "div"
              null
              "CodeMirror-gutter " gutterClass

    if  gutterClass   "CodeMirror-linenumbers"
        cm display lineGutter   gElt
        gElt style width     cm display lineNumWidth
`,
  },
  {
    title: 'Alternatively, install from NPM',
    description:
      'For developers looking for more flexibility and control over their integration, you can install SUI Terminal via NPM. This method allows you to manage dependencies through your project and integrate SUI Terminal directly into your JavaScript application.',
    buttonList: [
      {
        title: 'Copy to clipboard',
        isCopyToClipBoard: true,
      },
    ],
    code: `// Type some code ->

console.log "Hello World";
// â é ù ï ø ç Ã Ē Æ œ

function updateGutters cm 
    var gutters cm display gutters
        __specs cm options gutters

  removeChildren gutters

  for var i 0 i specs length i 
      var gutterClass __specs i
      var gElt gutters appendChild
          elt
              "div"
              null
              "CodeMirror-gutter " gutterClass

    if  gutterClass   "CodeMirror-linenumbers"
        cm display lineGutter   gElt
        gElt style width     cm display lineNumWidth
`,
  },
];
