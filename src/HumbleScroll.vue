<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, inject, computed } from 'vue';
import { onEvent } from './eventBus';
import type { HumbleVariables, HumbleEasing, HumbleSize, HumbleSpeed } from './types';

interface Props {
  animation?: string;
  innerClass?: string;
  variables?: HumbleVariables;
  easing?: HumbleEasing;
  size?: HumbleSize;
  speed?: HumbleSpeed;
}

const { animation = '', innerClass = '', variables } = defineProps<Props>();

const element = ref<HTMLElement | null>(null);
const humbleElements = inject<HTMLElement[]>('humbleElements');
const humbleObserver = inject<IntersectionObserver>('humbleObserver');
const isIntersecting = ref<boolean>(false);

const emit = defineEmits(['intersecting']);

function emitIntersecting (value: boolean) {
  isIntersecting.value = value;
  emit('intersecting', value);
};

const cssVariables = computed(() => {
  if (!variables) {
    return; 
  }

  const mappedVariables = Object.entries(variables).map(([key, value]) => {
    return `--hs-${key}: ${value};`;
  }).join(' ');

  return mappedVariables;
});

onMounted(() => {
  if (element.value && humbleObserver && humbleElements) {
    humbleElements.push(element.value);
    humbleObserver.observe(element.value);

    onEvent('elementIntersecting', (intersectingElement: HTMLElement) => {
      if (intersectingElement === element.value) {
        const isElementVisible = intersectingElement.className.includes('hs-visible');
        emitIntersecting(isElementVisible);
      }
    });
  }
});

onBeforeUnmount(() => {
  if (element.value && humbleObserver && humbleElements) {
    const index = humbleElements.indexOf(element.value);

    if (index !== -1) {
      humbleElements.splice(index, 1);
      humbleObserver.unobserve(element.value);
    }
  }
});
</script>

<template>
  <div 
    ref="element" 
    :data-hs="animation" 
    :data-hs-easing="easing" 
    :data-hs-size="size" 
    :data-hs-speed="speed"
  >
    <div :class="innerClass" :style="cssVariables">
      <slot :is-intersecting="isIntersecting" />
    </div>
  </div>
</template>