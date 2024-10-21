import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface AdvantageItemProps extends AdvantageItemCodeSideProps {
  title: string;
  invert?: boolean;
  description: string;
  buttonList: ReadonlyArray<AdvantageItemButtonProps>;
}

export interface AdvantageItemButtonProps {
  title: string;
  onClick?: () => void;
  Icon?: FC<SVGProps>;
}

export interface AdvantageItemCodeSideProps {
  code: string;
}
