import { FC } from 'react';

import { Layout } from '@/components';

import { HeroSection, TerminalSection } from '../components';

const Home: FC = () => (
  <Layout>
    <HeroSection />
    <TerminalSection />
  </Layout>
);

export default Home;
