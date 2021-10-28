<template>
    <div id="main-slider">
        <div class="models">
            <div class="brand">
                <Brand_Carosal/>
            </div>
        </div>
        <div class="wrapper">
            <div class="wrap-content">
                <h1 class="nav-header">STAY DRIVEN</h1>
                <h3 class="nav-sub-header">Explore how we are keeping your experience as safe as it is exhilirating</h3>
            </div>
        </div>
    </div>
</template>

<script>
import Brand_Carosal from '@/components/Brand_Carosal'
export default {
    name: 'Main_Slider',
    components : {
        Brand_Carosal,
    },
    data(){
        return{
            
        }
    }
    
}
</script>

<style scoped>
    #main-slider{
        background: linear-gradient(to top, #000000a1, #0107252b), url(../assets/Hero1.jpg) no-repeat top center;
        background-position: center;
        background-size: cover; 
        background-repeat: no-repeat; 
        width: 100%;
        height: 80vh;
    }
    .wrap-content{
        max-width: 500px;
        color: rgb(255, 255, 255);
        font-family: 'Orbitron', sans-serif;
        letter-spacing: 4px;
        margin-top: 95vh;
        
    }
    .nav-header{
        font-size: 36px;
    }
    .nav-sub-header{
        margin-top: -10px;
        letter-spacing: 1px;
        font-weight: 500;
    }
@media only screen and (max-width: 480px) {
  .wrap-content{
      text-align: center;
  }
}
</style>