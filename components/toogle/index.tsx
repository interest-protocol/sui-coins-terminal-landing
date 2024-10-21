import { Div, H1, Input, Label, P, Span } from '@stylin.js/elements';
import { FC } from 'react';

import { ToggleComponentProps } from './toogle.types';

export const ToggleComponent: FC<ToggleComponentProps> = ({
  label,
  onChange,
  activeIcon,
  description,
  hasBorderBottom,
}) => {
  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.checked);
  };

  return (
    <Div
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      borderBottom={hasBorderBottom ? '1px solid #A8A8A8' : ''}
    >
      <Div py="1rem">
        <H1
          color="#B6B8BB"
          fontWeight={700}
          fontSize="0.875rem"
          lineHeight="1.313rem"
        >
          {label}
        </H1>
        <P
          color="#64686E"
          fontWeight={400}
          fontSize="0.75rem"
          lineHeight="1.125rem"
        >
          {description}
          {activeIcon}
        </P>
      </Div>
      <Div pl="1.5rem">
        <Label className="switch">
          <Input type="checkbox" onChange={handleToggleChange} />{' '}
          <Span className="slider round"></Span>
        </Label>
      </Div>
    </Div>
  );
};
