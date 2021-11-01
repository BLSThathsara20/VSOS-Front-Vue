<template>
  <div id="app">
    <Top_Navigation/>
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Top_Navigation from '@/components/Top_Navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Top_Navigation,
    Navbar,
    Footer,
  }
}
</script>

<style>
body{
  margin: 0;
  font-family: 'Cairo', sans-serif;
}
.wrapper{
    max-width: 1280px;
    margin: auto;
}
</style>
