interface Offset {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

interface Options {
  root: HTMLElement | null;
  visibleClass: string;
  threshold: number;
  repeat: boolean;
  mirror: boolean;
  offset: Offset;
}

type OptionalOptions = Partial<Options>;

interface HumbleVariables {
  delay?: string;
  easing?: string;
  duration?: string;
  opacity?: number;
  translateY?: string;
  translateX?: string;
  scale?: number;
  rotate?: string;
  perspective?: number;
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
  blur?: number;
  blurAmount?: string;
}

interface PluginOptions {
  addUtilities: (utilities: any) => void;
  config: () => any;
}

type HumbleEasing = 'ease-in' | 'ease-out' | 'ease-in-out' | 'ease-out-back';

type HumbleSize = 'small' | 'medium' | 'large' | 'extra-large';

type HumbleSpeed = 'extra-slow' | 'slow' | 'fast' | 'extra-fast';