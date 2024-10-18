import { ReactNode } from 'react';

export interface ToggleComponentProps {
  label?: string;
  description?: string;
  defaultValue: boolean;
  activeIcon?: ReactNode;
  hasBorderBottom?: boolean;
}
