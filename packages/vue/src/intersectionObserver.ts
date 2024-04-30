import { inViewName, defaultOptions, attrName } from '@/variables';
import { emit } from '@/eventBus';
import type { OptionalOptions, Offset, Options } from '@/types';

type CalculateOffsetInput = {
  mergedOffset: Offset;
  documentHeight: number;
  mergedOptions: Options;
}

/**
 * Calculate the offset based on the options provided. 
 * Used to calculate the rootMargin for the IntersectionObserver.
 */
function calculateOffset(input: CalculateOffsetInput): string {
  const { mergedOffset, documentHeight, mergedOptions } = input;

  const obj = { ...defaultOptions.offset, ...mergedOffset };
  const offset = `${obj.top}px ${obj.right}px ${obj.bottom}px ${obj.left}px`;
  const repeatOffset = `${documentHeight}px ${obj.right}px ${obj.bottom}px ${obj.left}px`;

  return mergedOptions.repeat && !mergedOptions.mirror ? repeatOffset : offset;
}

/**
 *  The main intersection observer function that will be used in the Vue plugin.
 */
export default function useObserver(options: OptionalOptions = {}) {
  const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

  const mergedOptions: Options = { ...defaultOptions, ...options };

  const calculatedOffset = calculateOffset({
    documentHeight,
    mergedOptions,
    mergedOffset: mergedOptions.offset as Offset
  });

  const observerOptions: IntersectionObserverInit = {
    root: mergedOptions.root,
    rootMargin: calculatedOffset,
    threshold: mergedOptions.threshold,
  };

  // Main animation function
  function animationObserverFunction(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      const targetElement = entry.target as HTMLElement;
      const once = targetElement.getAttribute(`${attrName}-once`);

      if (!mergedOptions.repeat && entry.isIntersecting) {
        targetElement.classList.add(inViewName)
        emit('elementIntersecting', targetElement)
        intersectionObserver.unobserve(targetElement)
        return
      }

      if (entry.isIntersecting && once && once === 'true') {
        targetElement.classList.add(inViewName)
        intersectionObserver.unobserve(targetElement)
        emit('elementIntersecting', targetElement)
        return
      }

      targetElement.classList.toggle(inViewName, entry.isIntersecting)
      emit('elementIntersecting', targetElement)
    })
  }

  const intersectionObserver = new IntersectionObserver(animationObserverFunction, observerOptions);

  return {
    intersectionObserver
  }
}