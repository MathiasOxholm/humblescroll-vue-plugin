export default defineAppConfig({
  docus: {
    title: 'HumbleScroll',
    description: 'Animate your vue components on scroll.',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      twitter: 'OxholmDev',
      github: 'MathiasOxholm',
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'humblescroll-docs',
      owner: 'mathias-oxholm',
      edit: false
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: false
    },
    header: {
      logo: false,
      showLinkIcon: false,
      exclude: [],
      fluid: false,
      title: 'HumbleScroll',
    }
  }
})
