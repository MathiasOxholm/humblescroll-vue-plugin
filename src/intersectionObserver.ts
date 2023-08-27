import { prefix } from './variables';
import { emit } from './eventBus';

export default function useObserver(options: OptionalOptions = {}) {
  const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

  const defaultOptions: Options = {
    root: null,
    visibleClass: `${prefix}-visible`,
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
    rootMargin: calculateOffset(mergedOptions.offset),
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
      const dataAttr = targetElement.dataset.hs;

      if (!mergedOptions.repeat && entry.isIntersecting) {
        targetElement.classList.add(mergedOptions.visibleClass)
        emit('elementIntersecting', targetElement)
        intersectionObserver.unobserve(targetElement)
        return
      }

      if (entry.isIntersecting && dataAttr && dataAttr.includes('once')) {
        targetElement.classList.add(mergedOptions.visibleClass)
        intersectionObserver.unobserve(targetElement)
        emit('elementIntersecting', targetElement)
        return
      }

      targetElement.classList.toggle(mergedOptions.visibleClass, entry.isIntersecting)
      emit('elementIntersecting', targetElement)
    })
  }

  const intersectionObserver = new IntersectionObserver(animationObserverFunction, observerOptions);

  return {
    intersectionObserver
  }
}