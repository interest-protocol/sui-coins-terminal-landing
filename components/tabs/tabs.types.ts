import { CSSProperties } from 'react';

type MaybeArray<T> = ReadonlyArray<T> | T;

export interface customMarginXProps {
  px?: MaybeArray<CSSProperties['padding']>;
}

export interface customWidthProps {
  width?: MaybeArray<CSSProperties['width']>;
}

export interface ITabItem {
  label: string;
  description?: string;
}

export interface TabItemProps extends customMarginXProps {
  item: ITabItem;
  isSelected: boolean;
  onChange: () => void;
}

export interface TabItemPropsItemTextProps extends customMarginXProps {
  isSelected?: boolean;
}

export interface TabsProps extends customMarginXProps, customWidthProps {
  defaultTabIndex?: number;
  width?: string | ReadonlyArray<string>;
  items: ReadonlyArray<ITabItem>;
  onChangeTab?: (tabIndex: number) => void;
}
