<template>
  <div id="app">
    <Top_Navigation/>
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Top_Navigation from '@/components/Top_Navigation'
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Top_Navigation,
    Navbar,
  }
}
</script>

<style>
body{
  margin: 0;
}
.wrapper{
    max-width: 1280px;
    height: 35px;
    margin: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
</style>
