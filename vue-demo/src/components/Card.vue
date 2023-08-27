<script setup lang="ts">
import HumbleScroll from '../../../src/humbleScroll.vue';

interface Props {
  title: string;
  animation?: string;
  code?: boolean;
  variables?: any;
}

withDefaults(defineProps<Props>(), {
  animation: '',
  code: true,
});
</script>

<template>
  <HumbleScroll :animation="animation" :variables="variables">
    <article class="card py-8 px-8 flex flex-col space-y-20 justify-between items-start rounded-lg bg-slate-800 transition-all duration-300">
      <h3 class="text-2xl text-center">{{ title }}</h3>

      <code v-if="code" class="bg-slate-900 py-3 px-4 rounded-md flex text-sm font-mono">
        <slot>
          <span class="text-blue-300 flex whitespace-nowrap">animation</span>
          <span class="text-blue-400 flex">=</span>
          <span class="text-purple-400 flex">"{{ animation }}"</span>
        </slot>
      </code>
    </article>
  </HumbleScroll>
</template>