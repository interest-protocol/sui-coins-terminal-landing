import Editor from '@monaco-editor/react';
import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { Tabs } from '@/components/tabs';

import { AddonsFormProps } from '../../terminal/addons/addons.types';
import { DocsCodeSnippetProps } from '../docs.types';

const DocsCodeSnippet: FC<DocsCodeSnippetProps> = ({
  code,
  tech,
  setTech,
  lang,
}) => {
  const { control } = useFormContext<AddonsFormProps>();

  const form = useWatch({ control });

  return (
    <Div display="flex" flexDirection="column">
      <Div>
        <Tabs
          onChangeTab={setTech}
          defaultTabIndex={tech}
          items={[
            {
              label: 'Vanilla',
            },
            {
              label: 'React',
            },
          ]}
        />
      </Div>
      <Div
        py="1rem"
        bg="#171F28"
        height="20rem"
        borderRadius="1rem"
        width={['100%', '100%', '100%', '35rem', '35rem']}
      >
        <Editor
          height="100%"
          theme="vs-dark"
          value={code(form as AddonsFormProps)}
          defaultLanguage={lang}
          options={{
            selectOnLineNumbers: true,
            roundedSelection: false,
            readOnly: true,
            cursorStyle: 'line',
            automaticLayout: true,
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
    </Div>
  );
};

export default DocsCodeSnippet;
