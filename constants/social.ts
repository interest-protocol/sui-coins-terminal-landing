import { DiscordSVG, GithubSVG, Telegram, XSVG } from '@/components/svg';

import { SocialProps } from './../components/layout/footer/footer.types';

export const SOCIAL: SocialProps[] = [
  {
    title: 'X',
    Icon: XSVG,
    link: 'https://x.com/suicoins',
  },
  {
    title: 'Discord',
    Icon: DiscordSVG,
    link: 'https://discord.com/invite/interestprotocol',
  },
  {
    title: 'Github',
    Icon: GithubSVG,
    link: 'https://github.com/interest-protocol/sui-coins-terminal',
  },
  {
    title: 'Telegram',
    Icon: Telegram,
    link: 'https://t.me/interestprotocol',
  },
];
