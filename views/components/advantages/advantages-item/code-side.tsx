import Editor from '@monaco-editor/react';
import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { AdvantageItemCodeSideProps } from './advantage-item.types';

const AdvantageItemCodeSide: FC<AdvantageItemCodeSideProps> = ({ code }) => (
  <Div
    py="1rem"
    px="1.25rem"
    bg="#171F28"
    height="30rem"
    borderRadius="1rem"
    width={['100%', '100%', '100%', '35rem', '35rem']}
    minHeight={['100vh', '100vh', '100vh', 'unset', 'unset']}
  >
    <Editor
      height="100%"
      theme="vs-dark"
      defaultLanguage="javascript"
      value={code}
      options={{
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: true,
        cursorStyle: 'line',
        automaticLayout: true,
        scrollbar: {
          vertical: 'hidden',
        },
        minimap: {
          enabled: false,
        },
        scrollBeyondLastLine: false,
        autoIndent: 'full',
        colorDecorators: true,
        fontSize: 12.2,
        lineHeight: 18,
      }}
    />
  </Div>
);

export default AdvantageItemCodeSide;
