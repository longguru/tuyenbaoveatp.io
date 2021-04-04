<template>
  <div>
    <Navigation />
    <!-- <InnerBanner /> -->
    <Nuxt />
    <Footer />
    <a href="#" class="scrollup">Scroll</a>
  </div>
</template>

<script>
// import InnerBanner from '~/components/InnerBanner'
import Navigation from '~/components/Navigation'
import Footer from '~/components/Footer'
export default {
  components: {
    // InnerBanner,
    Navigation,
    Footer,
  },
}
</script>
