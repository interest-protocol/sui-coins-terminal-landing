import { FC } from 'react';

import { SVGProps } from './svg.types';

const ChevronUp: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    {...props}
    fill="none"
    viewBox="0 0 24 24"
    style={{ maxHeight, maxWidth, transform: 'rotate(180deg)' }}
  >
    <path
      d="M12 16.4142L19.4142 9L18 7.58578L12 13.5858L6.00003 7.58578L4.58582 9L12 16.4142Z"
      fill="currentColor"
    />
  </svg>
);

export default ChevronUp;
