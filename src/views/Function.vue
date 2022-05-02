<template>
  <Features />
</template>

<script>
import Features from './dir/Features.vue'
export default {
    name: 'Function',
    components: {
        Features
    }
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  background: rgb(235, 224, 186);
  .icon {
    background: orange;
    color: white;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
  }
}
</style>