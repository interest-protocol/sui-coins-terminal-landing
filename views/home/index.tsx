import { FC } from 'react';

import { Layout } from '@/components';

import { HeroSection, TerminalSection } from '../components';
import Partners from '../components/partners';

const Home: FC = () => (
  <Layout>
    <HeroSection />
    <TerminalSection />
    <Partners />
  </Layout>
);

export default Home;
