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
  Icon?: FC<SVGProps>;
  onClick?: () => void;
  isCopyToClipBoard?: boolean;
}

export interface AdvantageItemCodeSideProps {
  code: string;
}
