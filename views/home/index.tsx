import { FC } from 'react';

import { Layout } from '@/components';

import { HeroSection, PartnerSection, TerminalSection } from '../components';

const Home: FC = () => (
  <Layout>
    <HeroSection />
    <TerminalSection />
    <PartnerSection />
  </Layout>
);

export default Home;
