import { inViewName } from './variables';
import { emit } from './eventBus';
import type { OptionalOptions, Offset, Options } from './types';

export default function useObserver(options: OptionalOptions = {}) {
  const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const visibleClass = inViewName;

  const defaultOptions: Options = {
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
  }

  const mergedOptions: Options = { ...defaultOptions, ...options };

  const observerOptions: IntersectionObserverInit = {
    root: mergedOptions.root,
    rootMargin: calculateOffset(mergedOptions.offset as Offset),
    threshold: mergedOptions.threshold,
  };

  function calculateOffset(mergedOffset: Offset): string {
    const obj = { ...defaultOptions.offset, ...mergedOffset };
    const offset = `${obj.top}px ${obj.right}px ${obj.bottom}px ${obj.left}px`;
    const repeatOffset = `${documentHeight}px ${obj.right}px ${obj.bottom}px ${obj.left}px`;

    return mergedOptions.repeat && !mergedOptions.mirror ? repeatOffset : offset;
  }

  // Main animation function
  function animationObserverFunction(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      const targetElement = entry.target as HTMLElement;
      const once = targetElement.getAttribute('data-hs-once');

      if (!mergedOptions.repeat && entry.isIntersecting) {
        targetElement.classList.add(visibleClass)
        emit('elementIntersecting', targetElement)
        intersectionObserver.unobserve(targetElement)
        return
      }

      if (entry.isIntersecting && once && once === 'true') {
        targetElement.classList.add(visibleClass)
        intersectionObserver.unobserve(targetElement)
        emit('elementIntersecting', targetElement)
        return
      }

      targetElement.classList.toggle(visibleClass, entry.isIntersecting)
      emit('elementIntersecting', targetElement)
    })
  }

  const intersectionObserver = new IntersectionObserver(animationObserverFunction, observerOptions);

  return {
    intersectionObserver
  }
}