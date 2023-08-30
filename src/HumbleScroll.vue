<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, computed } from 'vue';
import { onEvent } from './eventBus';
import { inject } from '@vue/runtime-core';
import type { HumbleVariables, HumbleEasing, HumbleSize, HumbleSpeed } from './types';

interface Props {
  animation?: string;
  innerClass?: string;
  variables?: HumbleVariables;
  easing?: HumbleEasing;
  size?: HumbleSize;
  speed?: HumbleSpeed;
  once?: boolean;
}

const { animation = '', innerClass = '', variables } = defineProps<Props>();

const element = ref<HTMLElement | null>(null);
const humbleElements = ref<HTMLElement[]>([]);
const humbleObserver = ref<IntersectionObserver>();
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
  humbleElements.value = inject<HTMLElement[]>('humbleElements', []);
  humbleObserver.value = inject<IntersectionObserver>('humbleObserver');

  if (element.value && humbleObserver.value && humbleElements.value) {
    humbleElements.value.push(element.value);
    humbleObserver.value.observe(element.value);

    onEvent('elementIntersecting', (intersectingElement: HTMLElement) => {
      if (intersectingElement === element.value) {
        const isElementVisible = intersectingElement.className.includes('hs-visible');
        emitIntersecting(isElementVisible);
      }
    });
  }
});

onBeforeUnmount(() => {
  if (element.value && humbleObserver.value && humbleElements.value) {
    const index = humbleElements.value.indexOf(element.value);

    if (index !== -1) {
      humbleElements.value.splice(index, 1);
      humbleObserver.value.unobserve(element.value);
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
    :data-hs-once="once"
  >
    <div :class="innerClass" :style="cssVariables">
      <slot :is-intersecting="isIntersecting" />
    </div>
  </div>
</template>