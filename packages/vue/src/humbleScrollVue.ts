import type { App } from "vue";
import useObserver from "@/intersectionObserver";
import type { OptionalOptions } from '@/types';

/**
 * HumbleScroll Vue Scroll Animation Plugin.
 */
export default {
  install(app: App<Element>, options?: OptionalOptions) {

    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const { intersectionObserver } = useObserver(options);
    const humbleElements: HTMLElement[] = [];

    app.provide('humbleElements', humbleElements);
    app.provide('humbleObserver', intersectionObserver);
  },
};