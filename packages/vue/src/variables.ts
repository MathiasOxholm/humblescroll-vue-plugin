import type { Options } from '@/types';

// Global variables
export const prefix = 'hs' as const;
export const varName = `--${prefix}` as const;
export const attrName = `data-${prefix}` as const;
export const inViewName = `${prefix}-visible` as const;

export const easingVariations = ['ease-in', 'ease-out', 'ease-in-out', 'ease-out-back'] as const;

export const sizeVariations = {
  small: '0.5',
  medium: '0.75',
  large: '2',
  'extra-large': '3',
} as const;

export const speedVariations = {
  'extra-slow': '3',
  slow: '1.5',
  fast: '0.75',
  'extra-fast': '0.5',
} as const;

export const defaultOptions: Options = {
  root: null,
  threshold: 0.1,
  repeat: false,
  mirror: false,
  offset: {
    top: 0,
    right: 0,
    bottom: -40,
    left: 0,
  },
} as const;