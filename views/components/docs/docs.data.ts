import { DocsItemProps, DocsTech } from './docs.types';

export const DOCS_DATA: Record<
  DocsTech,
  ReadonlyArray<Omit<DocsItemProps, 'tech' | 'setTech'>>
> = {
  [DocsTech.Vanilla]: [
    {
      title: 'How to setup',
      description:
        'To setup the sdk, you just need to import the sdk on your Vanilla (HTML) project.',
      buttonList: [
        {
          title: 'Copy to Clipboard',
          isCopyToClipBoard: true,
        },
      ],
      lang: 'html',
      code: () =>
        `<script src="https://cdn.jsdelivr.net/npm/@interest-protocol/sui-coins-terminal-vanilla/dist/index.umd.js"></script>`,
    },
    {
      invert: true,
      title: 'How to integrate',
      description:
        'To integrate the terminal on the Vanilla code, you just need to add an empty div with the id="suicoins-terminal" and initialize the Sdk on the script tag.',
      buttonList: [
        {
          title: 'Copy to Clipboard',
          isCopyToClipBoard: true,
        },
        {
          title: 'Example directory',
          url: 'https://github.com/interest-protocol/sui-coins-terminal/tree/main/example/vanilla',
        },
      ],
      lang: 'html',
      code: (addons) => `...
<!-- Terminal Container -->
<div id="suicoins-terminal" class="terminal"></div>
...

<!-- Initialize Terminal -->
<script>
  SuiCoinsTerminal({
    typeIn: "${addons.coinInType}",
    projectAddress:
      "${addons.projectAddress}",
    typeOut:
      "${addons.coinOutType}",
    ${[
      addons.slippage ? `slippage: ${addons.slippage},` : '',
      addons.fixedCoinOut ? `fixedOut: ${addons.fixedCoinOut},` : '',
      addons.fixedAmountIn ? `fixedOut: ${addons.fixedAmountIn},` : '',
    ]
      .filter((v) => v)
      .join('\n')}
  });
</script>`,
    },
  ],
  [DocsTech.React]: [
    {
      lang: 'shell',
      title: 'How to setup',
      description:
        'To setup the sdk, you just need to install the sdk on your React project.',
      buttonList: [
        {
          title: 'Copy to Clipboard',
          isCopyToClipBoard: true,
        },
      ],
      code: () => `pnpm add @interest-protocol/sui-coins-terminal
#or
yarn add @interest-protocol/sui-coins-terminal
#or
npm install @interest-protocol/sui-coins-terminal`,
    },
    {
      lang: 'javascript',
      invert: true,
      title: 'How to integrate',
      description:
        'To integrate the terminal on the React typescript code, you just need to import the SwapTerminal and setup the code.',
      buttonList: [
        {
          title: 'Copy to Clipboard',
          isCopyToClipBoard: true,
        },
        {
          title: 'Example directory',
          url: 'https://github.com/interest-protocol/sui-coins-terminal/tree/main/example/react',
        },
      ],
      code: (
        addons
      ) => `import { SwapTerminal } from "@interest-protocol/sui-coins-terminal";

const Terminal = () => (
  <SwapTerminal
    typeIn="${addons.coinInType}"
    projectAddress="${addons.projectAddress}"
    typeOut="${addons.coinOutType}"
    ${[
      addons.slippage ? `slippage="${addons.slippage}"` : '',
      addons.fixedAmountIn ? `fixedOut={${addons.fixedAmountIn}}` : '',
      addons.fixedAmountOut ? `fixedOut={${addons.fixedAmountOut}}` : '',
    ]
      .filter((v) => v)
      .join('\n')}
  />
);

export default Terminal;`,
    },
  ],
};
