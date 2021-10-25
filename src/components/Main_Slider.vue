<template>
    <div id="main-slider">
        <div class="wrapper">
        </div>
    </div>
</template>

<script>

export default {
    name: 'Main_Slider',
    components : {
    },
    data(){
        return{
            
        }
    }
    
}
</script>

<style scoped>
    #main-slider{
        background-image: url(../assets/Hero1.jpg);
        background-position: center;
        background-size: cover; 
        background-repeat: no-repeat; 
        width: 100%;
        height: 85vh;
        margin: -5vh 0 0 0;
    }
@media only screen and (max-width: 480px) {
  
}
</style>