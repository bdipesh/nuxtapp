importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "newsp",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.dd6a6f42cf568ee3f9a1.js",
    "revision": "c06acbcef4f7845108716295a0997a55"
  },
  {
    "url": "/_nuxt/layouts/default.be3f3c64bd32547f2432.js",
    "revision": "a8fb2b77ea805c03749e108be6aa716c"
  },
  {
    "url": "/_nuxt/manifest.d2e6c036cd59a8a350ff.js",
    "revision": "64b2b2c216bd65a293539e3bb0d16c7e"
  },
  {
    "url": "/_nuxt/pages/index.d30d3a3c173316aa2f19.js",
    "revision": "4eca018fc8f042c30bd71670d42fbcbf"
  },
  {
    "url": "/_nuxt/vendor.53e70d06e11b29f6a8a8.js",
    "revision": "c8deedb6395edb9e01c51c3a63a21289"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

