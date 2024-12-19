import { FC } from 'react';

import { Layout } from '@/components';

import { AdvantageSection, HeroSection, TerminalSection } from '../components';
import Partners from '../components/partners';

const Home: FC = () => (
  <Layout>
    <HeroSection />
    <TerminalSection />
    <Partners />
    <AdvantageSection />
  </Layout>
);

export default Home;
