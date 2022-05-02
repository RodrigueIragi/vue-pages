<template>
  <Slider />

  <Card />
</template>

<script>
import Slider from './dir/Slider.vue'
import Card from './dir/Card.vue'
export default {
  name : 'Home',
  components: {
    Slider,
    Card
  }
}
</script>

<style lang="scss" scoped>
.buttons {
  .button {
    background: orange;
    color: white;
  }
}
.hero-body {

}
</style>