import { FC } from 'react';

import { SVGProps } from './svg.types';

const OpenInNew: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxHeight, maxWidth }}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <mask
      id="mask0_1_8366"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="20"
      height="20"
    >
      <rect width="20" height="20" fill="currentColor" />
    </mask>
    <g mask="url(#mask0_1_8366)">
      <path
        d="M4.16667 17.5C3.70833 17.5 3.31597 17.3368 2.98958 17.0104C2.66319 16.684 2.5 16.2917 2.5 15.8333V4.16667C2.5 3.70833 2.66319 3.31597 2.98958 2.98958C3.31597 2.66319 3.70833 2.5 4.16667 2.5H10V4.16667H4.16667V15.8333H15.8333V10H17.5V15.8333C17.5 16.2917 17.3368 16.684 17.0104 17.0104C16.684 17.3368 16.2917 17.5 15.8333 17.5H4.16667ZM8.08333 13.0833L6.91667 11.9167L14.6667 4.16667H11.6667V2.5H17.5V8.33333H15.8333V5.33333L8.08333 13.0833Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default OpenInNew;