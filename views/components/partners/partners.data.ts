import {
  AftermathSVG,
  MovementSVG,
  MovewiffrensSVG,
  RouteXSVG,
  SataySVG,
} from '@/components/svg';

import { PartnerItemProps } from './partners.types';

export const PARTNERS_DATA: ReadonlyArray<PartnerItemProps> = [
  {
    size: '13.4rem',
    Icon: MovementSVG,
  },
  {
    size: '5.25rem',
    Icon: SataySVG,
  },
  {
    size: '8.6rem',
    Icon: RouteXSVG,
  },
  {
    size: '10rem',
    Icon: AftermathSVG,
  },
  {
    size: '11rem',
    Icon: MovewiffrensSVG,
  },
];
