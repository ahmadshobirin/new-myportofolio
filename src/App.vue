<template>
  <div id="app" class="content-wrapper flex flex-col bg-white">
    <Nav/>
    <router-view class="flex-1" />
  </div>
</template>


<script>
import Nav from '@/components/Nav'

export default {
  components: {
    Nav
  }
}
</script>
