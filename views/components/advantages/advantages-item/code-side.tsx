import Editor from '@monaco-editor/react';
import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { AdvantageItemCodeSideProps } from './advantage-item.types';

const AdvantageItemCodeSide: FC<AdvantageItemCodeSideProps> = ({ code }) => (
  <Div
    height="30rem"
    minHeight={['100vh', '100vh', '100vh', 'unset', 'unset']}
    width={['100%', '100%', '100%', '35rem', '35rem']}
    bg="#171F28"
    borderRadius="1rem"
    px="1.25rem"
    py="1rem"
  >
    <Editor
      height="100%"
      theme="vs-dark"
      defaultLanguage="javascript"
      defaultValue={code}
      options={{
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: true,
        cursorStyle: 'line',
        automaticLayout: false,
      }}
    />
  </Div>
);

export default AdvantageItemCodeSide;
