import { AddonsFormProps } from '../terminal/addons/addons.types';

export enum DocsTech {
  Vanilla,
  React,
}

export interface DocsItemProps extends DocsCodeSnippetProps {
  title: string;
  invert?: boolean;
  description: string;
  buttonList: ReadonlyArray<DocsItemButtonProps>;
}

export interface DocsItemButtonProps {
  url?: string;
  title: string;
  isCopyToClipBoard?: boolean;
}

export interface DocsCodeSnippetProps {
  tech: DocsTech;
  setTech: (data: DocsTech) => void;
  lang: 'shell' | 'javascript' | 'html';
  code: (form: AddonsFormProps) => string;
}
