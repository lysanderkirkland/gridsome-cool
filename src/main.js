// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Add an external JavaScript before the closing </body> tag
  head.script.push({
    src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
    body: true
  })

  head.script.push({
    src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
    body: true
  })

}
