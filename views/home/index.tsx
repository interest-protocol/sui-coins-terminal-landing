import { FC } from 'react';

import { Layout } from '@/components';

import {
  AdvantageSection,
  HeroSection,
  PartnerSection,
  TerminalSection,
} from '../components';

const Home: FC = () => (
  <Layout>
    <HeroSection />
    <TerminalSection />
    <PartnerSection />
    <AdvantageSection />
  </Layout>
);

export default Home;
