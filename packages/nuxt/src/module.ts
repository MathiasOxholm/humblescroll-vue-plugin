import { defineNuxtModule, addPlugin, createResolver, addComponent } from '@nuxt/kit'
import { defu } from 'defu'
import type { OptionalOptions } from 'humblescroll-vue'

export default defineNuxtModule<OptionalOptions>({
  meta: {
    name: 'humble-scroll',
    configKey: 'humbleScroll'
  },
  defaults: {},
  setup(options, nuxt) {
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
