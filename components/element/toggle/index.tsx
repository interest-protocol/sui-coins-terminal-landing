import { Div, H1, Input, Label, P, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { ToggleComponentProps } from './toggle.types';

export const ToggleComponent: FC<ToggleComponentProps> = ({
  label,
  hasToggle,
  subtitle,
  description,
  hasBorderTop,
  hasBorderBottom,
}) => {
  return (
    <Div
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mt={hasBorderTop ? '1rem' : ''}
      borderTop={hasBorderTop ? '1px solid #A8A8A8' : ''}
      borderBottom={hasBorderBottom ? '1px solid #A8A8A8' : ''}
    >
      <Div py="1rem">
        <H1
          fontWeight={700}
          color="#B6B8BB"
          fontSize="0.875rem"
          fontFamily="satoshi"
          lineHeight="1.313rem"
        >
          {label}
        </H1>
        <P
          fontWeight={400}
          color="#64686E"
          fontSize="0.75rem"
          fontFamily="satoshi"
          lineHeight="1.125rem"
        >
          {description}
        </P>
        <P
          color="#D87706"
          fontWeight={400}
          fontSize="0.75rem"
          fontFamily="satoshi"
          lineHeight="1.125rem"
        >
          {subtitle}
        </P>
      </Div>
      {hasToggle && (
        <Div ml="0.5rem">
          <Label className="switch">
            <Input type="checkbox" />
            <Span className="slider round"></Span>
          </Label>
        </Div>
      )}
    </Div>
  );
};
