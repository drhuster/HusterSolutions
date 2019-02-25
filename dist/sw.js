importScripts('/HusterSolutions/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/HusterSolutions/_nuxt/0e201941c1df9cb0aae6.js",
    "revision": "003c73aa23e7586e374f74c2c1b0b59d"
  },
  {
    "url": "/HusterSolutions/_nuxt/20a81aa8af644395e177.js",
    "revision": "2f8ad881eeddb119634150a75a2cf8ef"
  },
  {
    "url": "/HusterSolutions/_nuxt/87875af15e1798c43012.js",
    "revision": "89c27d788251e7dffacd2eba107c9eb5"
  },
  {
    "url": "/HusterSolutions/_nuxt/ceec2cafccd264bd07b6.js",
    "revision": "23860362ec9ae82fda7e35434f818be2"
  },
  {
    "url": "/HusterSolutions/_nuxt/e4da875f3e49d59fee29.js",
    "revision": "0bf65adfaaa39590499850b592b32a18"
  }
], {
  "cacheId": "huster-solutions-web-nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/HusterSolutions/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/HusterSolutions/.*'), workbox.strategies.networkFirst({}), 'GET')
