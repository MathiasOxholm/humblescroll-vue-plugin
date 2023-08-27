const listeners: Record<string, Function[]> = {};

export function onEvent(event: string, callback: Function) {
  if (!listeners[event]) {
    listeners[event] = [];
  }
  listeners[event].push(callback);
}

export function emit(event: string, ...args: any[]) {
  if (listeners[event]) {
    listeners[event].forEach(callback => callback(...args));
  }
}