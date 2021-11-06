<template>
  <div id="home">
    <Main_Slider/>
    <div class="brif-info-section">
      <div class="wrapper">
        <div class="left-ino-section">
          <h1>SRI LANKA FIRST VEHICLE SPARE PART MARKETPLACE</h1>
        </div>
        <div class="right-info-section">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quaerat eaque repellendus laboriosam! Nam optio consectetur.</p>
          <button>LEARN MORE</button>
        </div>
      </div>

      <!-- Shoping tools -->
      <div class="shoping-tools">
        <div class="wrapper">
          <div class="find-dealer">
            <h3>FIND A DEALER</h3>
            <p>Find your local dealer and get in touch today</p>
          </div>
          <div class="vehicle pricing">
              <h3>VEHICLE PRICING</h3>
              <p>Estimate the fnance price for your new vehicle</p>
          </div>
          <div class="Special Offers">
            <h3>SPECIAL OFFERS</h3>
            <p>View current special offers on the vehicle range</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Main_Slider from '@/components/Main_Slider'
export default {
  name: 'home',
  components: {
    Main_Slider,
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .left-ino-section{
    width: 50%;
  }
  .right-ino-section{
    width: 50%;
  }
</style>
