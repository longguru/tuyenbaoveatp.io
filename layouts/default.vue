<template>
  <div>
    <Navigation />
    <InnerBanner />
    <Nuxt />
    <Footer />
    <a href="#" class="scrollup">Scroll</a>
  </div>
</template>

<script>
import InnerBanner from '~/components/InnerBanner'
import Navigation from '~/components/Navigation'
import Footer from '~/components/Footer'
export default {
  components: {
    InnerBanner,
    Navigation,
    Footer,
  },
}
</script>
<style scoped>
.scrollup {
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 15px;
  right: 15px;
  display: none;
  text-indent: -9999px;
  background-color: #0495db;
  background-image: url(~/assets/images/icons/to-top/to-top.png);
  background-repeat: no-repeat;
  background-position: center center;
  z-index: 999997;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}

.scrollup:hover {
  opacity: 0.9;
}
</style>
