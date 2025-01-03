import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { useLocalStorage } from '@/hooks/use-local-storage';

import { DOCS_DATA } from './docs.data';
import { DocsTech } from './docs.types';
import DocsItem from './docs-item';

const Docs: FC = () => {
  const [tech, setTech] = useLocalStorage<DocsTech>(
    'docs-tech',
    DocsTech.Vanilla
  );

  return (
    <Div
      id="docs"
      gap="6rem"
      display="flex"
      flexDirection="column"
      width={['100%', '100%', '100%', '62rem', '76rem']}
    >
      {DOCS_DATA[tech].map((docs) => (
        <DocsItem key={v4()} setTech={setTech} tech={tech} {...docs} />
      ))}
    </Div>
  );
};
export default Docs;
