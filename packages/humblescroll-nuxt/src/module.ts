import { defineNuxtModule, addPlugin, createResolver, addComponent } from '@nuxt/kit'
import { defu } from 'defu'
import type { Options } from 'humblescroll-vue'

export default defineNuxtModule<Options>({
  meta: {
    name: 'humble-scroll',
    configKey: 'humbleScroll'
  },
  defaults: {
    root: null,
    threshold: 0.1,
    repeat: false,
    mirror: false,
    offset: {
      top: 0,
      right: 0,
      bottom: -40,
      left: 0,
    },
  },
  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    addPlugin(resolve('./runtime/humblescroll'))

    nuxt.options.runtimeConfig.public.humbleScroll = defu(nuxt.options.runtimeConfig.public.humbleScroll, options)

    addComponent({
      name: 'HumbleScroll',
      export: 'HumbleScroll',
      filePath: 'humblescroll-vue'
    })
  }
})
