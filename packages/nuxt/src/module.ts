import { defineNuxtModule, addPlugin, createResolver, addComponent } from '@nuxt/kit'
import { addCustomTab } from '@nuxt/devtools-kit'
import { defu } from 'defu'
import type { OptionalOptions } from 'humblescroll-vue'

export default defineNuxtModule<OptionalOptions>({
  meta: {
    name: 'humblescroll-nuxt',
    configKey: 'humbleScroll',
    compatibility: {
      nuxt: '^3.0.0'
    },
    version: require('../package.json').version
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

    addCustomTab({
      name: 'humblescroll',
      title: 'HumbleScroll',
      icon: 'tabler:square-rounded-letter-h-filled',
      category: 'documentation',
      view: {
        type: 'iframe',
        src: 'https://humblescroll-docs.oxholm.dev/api/',
      },
    })

  }
})
