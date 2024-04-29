<script setup lang="ts">
import { HumbleScroll } from 'humblescroll-vue';
</script>

<template>
  <section class="h-screen p-4 lg:p-10 overflow-hidden text-white">
    <HumbleScroll id="logo" class="absolute top-10 lg:top-20 left-10 lg:left-20 z-10" animation="fade left blur once" style="--hs-delay: 600ms">
      <div>HumbleScroll.js</div>
    </HumbleScroll>

    <div class="h-full w-full flex flex-col justify-center relative">
      <HumbleScroll id="gradient-bg" class="inset-0" inner-class="inset-0 absolute h-full w-full" animation="flip-down fade up lg once slow" style="--hs-translate-y-amount: 10rem; --hs-flip-x-amount: 45deg;">
        <div class="h-full w-full rounded-xl gradient"></div>
      </HumbleScroll>

      <div class="container text-center flex flex-col items-center justify-center space-y-14 relative px-6">
        <HumbleScroll animation="fade flip-up up xl blur" style="--hs-delay: 100ms">
          <h1 class="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-normal max-w-2xl lg:max-w-3xl xl:max-w-4xl">A simple scroll animation library</h1>
        </HumbleScroll>

        <HumbleScroll animation="fade up lg blur" style="--hs-delay: 200ms">
          <p class="text-2xl max-w-2xl">
            <span class="opacity-80">HumbleScroll is a lightweight animation on scroll Javascript library. It's easy to use and has no dependencies. It's also very small, only 2kb gzipped.</span>
          </p>
        </HumbleScroll>

        <div class="grid gap-6 md:grid-cols-2 w-full md:w-auto">
          <HumbleScroll id="button-1" animation="fade phone:up tablet:right blur small" style="--hs-delay: 400ms">
            <HumbleScroll animation="fade phone:up tablet:right small once">
              <a href="#fade" id="button-1-text" class="flex bg-white text-zinc-900 px-10 py-5 text-lg rounded-lg font-normal overflow-hidden text-center justify-center">
                <span class="fade flex text-zinc-900 z-10 relative">See it in action</span>
              </a>
            </HumbleScroll>
          </HumbleScroll>

          <HumbleScroll id="button-2" animation="fade up lg:left blur small" style="--hs-delay: 400ms">
            <HumbleScroll animation="fade phone:up lg:left small once">
              <a href="https://github.com/MathiasOxholm/humbleScroll" target="_blank" id="button-2-text" class="flex text-white px-10 py-5 text-lg rounded-lg font-normal border border-white overflow-hidden text-center justify-center">
                <span class="flex">Grab the code</span>
              </a>
            </HumbleScroll>
          </HumbleScroll>
        </div>
      </div>
    </div>
  </section>
</template>
