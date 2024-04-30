<script setup lang="ts">
import { HumbleScroll } from 'humblescroll-vue';
</script>

<template>
  <section class="h-screen p-4 overflow-hidden text-white lg:p-10">
    <HumbleScroll 
      id="logo" 
      class="absolute z-10 top-10 lg:top-20 left-10 lg:left-20" 
      animation="fade left blur once" 
      inner-element="p"
      :variables="{
        delay: '600ms'
      }"
    >
      HumbleScroll.js
    </HumbleScroll>

    <div class="relative flex flex-col justify-center w-full h-full">
      <HumbleScroll 
        id="gradient-bg" 
        class="inset-0"
        inner-class="absolute inset-0 w-full h-full" 
        animation="flip-down fade up lg once slow" 
        :variables="{
          translateYAmount: '10rem',
          flipXAmount: '45deg'
        }"
      >
        <div class="w-full h-full rounded-xl gradient" />
      </HumbleScroll>

      <div class="container relative flex flex-col items-center justify-center px-6 text-center space-y-14">
        <HumbleScroll 
          animation="fade flip-up up xl blur" 
          inner-class="max-w-2xl text-4xl font-normal md:text-5xl lg:text-7xl xl:text-8xl lg:max-w-3xl xl:max-w-4xl"
          inner-element="h1"
          :variables="{
            delay: '100ms'
          }"
        >
          A simple scroll animation library
        </HumbleScroll>

        <HumbleScroll 
          animation="fade up lg blur" 
          :variables="{ delay: '200ms' }"
          inner-element="p"
          inner-class="max-w-2xl text-2xl"
        >
        <span class="opacity-80">HumbleScroll is a lightweight animation on scroll Javascript library. It's easy to use and has no dependencies. It's also very small, only 2kb gzipped.</span>
        </HumbleScroll>

        <div class="grid w-full gap-6 md:grid-cols-2 md:w-auto">
          <HumbleScroll 
            id="button-1" 
            animation="fade phone:up tablet:right blur small" 
            :variables="{
              delay: '400ms'
            }"
          >
            <HumbleScroll animation="fade phone:up tablet:right small once">
              <a 
                href="#fade" 
                id="button-1-text" 
                class="flex justify-center px-10 py-5 overflow-hidden text-lg font-normal text-center bg-white rounded-lg text-zinc-900"
              >
                <span class="relative z-10 flex fade text-zinc-900">See it in action</span>
              </a>
            </HumbleScroll>
          </HumbleScroll>

          <HumbleScroll 
            id="button-2" 
            animation="fade up lg:left blur small" 
            :variables="{
              delay: '400ms'
            }"
          >
            <HumbleScroll animation="fade phone:up lg:left small once">
              <a 
              href="https://github.com/MathiasOxholm/humbleScroll" 
              target="_blank" 
              id="button-2-text" 
              class="flex justify-center px-10 py-5 overflow-hidden text-lg font-normal text-center text-white border border-white rounded-lg"
            >
                <span class="flex">Grab the code</span>
              </a>
            </HumbleScroll>
          </HumbleScroll>
        </div>
      </div>
    </div>
  </section>
</template>
