import { FC } from 'react';

import { SVGProps } from './svg.types';

const ArrowTopRight: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxHeight, maxWidth }}
    viewBox="0 0 40 40"
    fill="none"
    {...props}
  >
    <path
      d="M12.9731 26.3734C12.6598 26.0601 12.6337 25.5685 12.8948 25.2255L12.9731 25.1359L25.3474 12.7616C25.6892 12.4199 26.2432 12.4199 26.5849 12.7616C26.8981 13.0748 26.9242 13.5664 26.6632 13.9094L26.5849 13.999L14.2105 26.3734C13.8688 26.7151 13.3148 26.7151 12.9731 26.3734Z"
      fill="white"
    />
    <path
      d="M16.0073 14.2762C15.524 14.2773 15.1314 13.8864 15.1304 13.4031C15.1295 12.9638 15.4524 12.5994 15.8742 12.536L16.0035 12.5262L25.9641 12.5048C26.4047 12.5038 26.7697 12.8287 26.8317 13.2519L26.8409 13.3816L26.8203 23.343C26.8193 23.8262 26.4267 24.2171 25.9435 24.2161C25.5042 24.2152 25.1412 23.8907 25.0795 23.4687L25.0703 23.3393L25.0886 14.2566L16.0073 14.2762Z"
      fill="white"
    />
  </svg>
);

export default ArrowTopRight;
