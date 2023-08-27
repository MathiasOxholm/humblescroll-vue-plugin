<script setup lang="ts">
import Card from '@/components/Card.vue';
import HumbleScroll from '../../../src/humbleScroll.vue';
import Section from '@/components/Section.vue';

</script>

<template>
  <main>
    <div class="container">
      <div class="grid lg:grid-cols-12 px-6 lg:px-8 pb-8 gap-20">
        <div class="lg:col-span-9">
          <Section 
            id="fade"
            title="Fade animations"
            description="Opacity from 0 to 1 - you know the drill."
          >
            <Card title="Fade up" animation="fade up" />
            <Card title="Fade down" animation="fade down" />
            <Card title="Fade right" animation="fade right" />
            <Card title="Fade left" animation="fade left" />
            <Card title="Fade left" animation="fade left" />
            <Card title="Fade" animation="fade up left" />
          </Section>

          <Section
            id="zoom"
            title="Zoom animations"
            description="Zoom in and out. Perfect for images."
          >
            <Card title="Zoom in" animation="zoom-in fade" />
            <Card title="Zoom out" animation="zoom-out fade" />
            <Card title="Zoom out + right + up" animation="zoom-out right up fade" />
            <Card title="Zoom in + left + up" animation="zoom-in left up fade" />
          </Section>
          
          <Section
            id="slide"
            title="Slide animations"
            description="Slide to the left, slide it to the right!"
          >
            <Card title="Slide right" animation="right" />
            <Card title="Slide left" animation="left" />
            <Card title="Slide up" animation="right up" />
            <Card title="Slide down" animation="left up" />
          </Section>

          <Section
            id="flip"
            title="Flip animations"
            description="Who uses these? Here's four of them anyway."
            >
            <Card title="Flip right" animation="flip-right" />
            <Card title="Flip left" animation="flip-left" />
            <Card title="Flip up" animation="flip-up" />
            <Card title="Flip down" animation="flip-down" />
          </Section>

          <Section
            id="skew"
            title="Skew animations"
            description="Skew it to the left, skew it to the right! Combine with blur to make them feel blazingly fast."
            >
          
            <Card title="Skew right" animation="skew-right fade right blur" />

          </Section>

        </div>
      </div>
    </div>
  </main>
</template>
