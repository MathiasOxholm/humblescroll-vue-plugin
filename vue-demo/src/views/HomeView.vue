<script setup lang="ts">
import Card from '@/components/Card.vue';
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
            <Card title="Fade in" animation="fade" />
            <Card title="Fade up left" animation="fade up left" />
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
            <Card title="Skew left" animation="skew-left fade left blur" />
            <Card title="Skew up" animation="skew-up fade up blur" />
            <Card title="Skew down" animation="skew-down fade down blur" />
          </Section>

          <Section
            id="reveal"
            title="Reveal animations"
            description="Parent has overflow hidden and child slides from 100% to 0"
            >
            <Card title="Reveal up" animation="reveal-up fade" />
            <Card title="Reveal down" animation="reveal-down fade" />
            <Card title="Reveal right" animation="reveal-right fade" />
            <Card title="Reveal left" animation="reveal-left fade" />
          </Section>

          <Section
            id="blur"
            title="Blur effect"
            description="Who doesn't like a good motion blur effect?"
            :columns="3"
          >
            <Card title="Blur effect" animation="fade right blur" />
            <Card title="Blur effect" animation="zoom-in fade up blur" :variables="{ blur: '40px' }" />
            <Card title="Blur effect" animation="fade left blur" />
          </Section>

          <Section
            id="stagger"
            title="Stagger"
            description="Adjust delay for each item in a loop"
          >
            <div class="col-span-2 grid lg:grid-cols-4 gap-2">
              <Card
                v-for="n in 8"
                :key="n"
                :title="`Card ${n + 1}`"
                className="min-h-[200px]"
                animation="fade up"
                :variables="{ delay: `${n}00ms` }">
                <p>{{`--hs-delay: ${n}00ms`}}</p>
              </Card>
            </div>
          </Section>

          <Section
            id="once"
            title="Once"
            description="Stays visible even with repeat or mirror enabled">
            <Card
              title="Once"
              animation="fade up once"
            />
            <Card
              title="Not once"
              animation="fade up"
            />
          </Section>

          <Section
            id="responsive"
            title="Responsive"
            description="Responsive animations based on breakpoints. Like any other TailwindCSS utilily class. Default prefixes are sm:, md:, lg:, xl:, 2xl: ">
            <Card
              title="Example 1"
              animation="fade left md:up"
            />
            <Card
              title="Example 2"
              animation="fade up lg:down"
            />
          </Section>
        </div>
      </div>
    </div>
  </main>
</template>
