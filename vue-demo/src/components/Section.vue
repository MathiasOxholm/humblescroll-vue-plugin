<script setup lang="ts">
import HumbleScroll from '../../../src/humbleScroll.vue';

const props = defineProps<{
  title: string;
  description: string;
  columns?: number;
}>();

let twCols = 'lg:grid-cols-2'

if (props.columns == 3) {
  twCols = 'lg:grid-cols-3'
}
</script>

<template>
<div class="flex flex-col justify-center py-20">
  <div class="mb-16 flex flex-col space-y-6">
    <HumbleScroll animation="fade up once">
      <h2 class="text-4xl lg:text-5xl">{{ title }}</h2>
    </HumbleScroll>
    <HumbleScroll animation="fade up once">
      <p class="text-lg text-slate-400 max-w-xl">{{ description }}</p>
    </HumbleScroll>
  </div>

  <div class="grid gap-8" :class="twCols">
    <slot />
  </div>
</div>
</template>