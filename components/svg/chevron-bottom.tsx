import { FC } from 'react';

import { SVGProps } from './svg.types';

const ChevronBottom: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxHeight, maxWidth }}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M12 16.4142L19.4142 9L18 7.58578L12 13.5858L6.00003 7.58578L4.58582 9L12 16.4142Z"
      fill="currentColor"
    />
  </svg>
);

export default ChevronBottom;
