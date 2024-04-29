import type { Config, PluginAPI } from 'tailwindcss/types/config';

export type Offset = {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export type OptionalOffset = Partial<Offset>;

export type Options = {
  root: HTMLElement | null;
  threshold: number;
  repeat: boolean;
  mirror: boolean;
  offset: OptionalOffset;
}

export type OptionalOptions = Partial<Options>;

export type HumbleVariables = {
  delay?: string;
  easing?: string;
  duration?: string;
  opacity?: string;
  translateY?: string;
  translateX?: string;
  scale?: number;
  rotate?: string;
  perspective?: string;
  rotateX?: string;
  rotateY?: string;
  skewX?: string;
  skewY?: string;
  translateRatio?: number;
  scaleRatio?: number;
  durationRatio?: number;
  translateXAmount?: string;
  translateYAmount?: string;
  flipXAmount?: string;
  flipYAmount?: string;
  perspectiveAmount?: string;
  staggerAmount?: string;
  skewAmount?: string;
  revealAmount?: string;
  blur?: string;
  blurAmount?: string;
}

export type PluginOptions = {
  addUtilities: PluginAPI['addUtilities'];
  config: () => Config;
}

export type HumbleEasing = 'ease-in' | 'ease-out' | 'ease-in-out' | 'ease-out-back';

export type HumbleSize = 'small' | 'medium' | 'large' | 'extra-large';

export type HumbleSpeed = 'extra-slow' | 'slow' | 'fast' | 'extra-fast';