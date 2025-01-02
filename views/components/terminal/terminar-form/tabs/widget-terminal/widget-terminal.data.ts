import { IconPosition } from './widget-terminal.types';

export const positionStyles = {
  topLeft: { top: '2rem', left: '2rem', right: 'unset', bottom: 'unset' },
  topRight: { top: '2rem', right: '2rem', left: 'unset', bottom: 'unset' },
  bottomLeft: { bottom: '2rem', left: '2rem', top: 'unset', right: 'unset' },
  bottomRight: { bottom: '2rem', right: '2rem', top: 'unset', left: 'unset' },
};

export const getAlignment = (position: IconPosition) => {
  switch (position) {
    case 'topRight':
      return {
        alignItems: 'flex-end',
        flexDirection: ['column'] as const,
      };
    case 'bottomRight':
      return {
        alignItems: 'flex-end',
        flexDirection: ['column-reverse'] as const,
      };
    case 'topLeft':
      return {
        alignItems: 'flex-start',
        flexDirection: ['column'] as const,
      };
    case 'bottomLeft':
      return {
        alignItems: 'flex-start',
        flexDirection: ['column-reverse'] as const,
      };
    default:
      return {
        alignItems: 'flex-end',
      };
  }
};
