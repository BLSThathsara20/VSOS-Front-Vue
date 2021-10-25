<template>
  <div id="app">
    <Top_Navigation/>
    <router-view/>
  </div>
</template>

<script>
import Top_Navigation from '@/components/Top_Navigation'
export default {
  name: 'App',
  components: {
    Top_Navigation,
  }
}
</script>

<style>

</style>
