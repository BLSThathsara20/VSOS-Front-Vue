<template>
    <div id="brand-carosal">
        <div class="wrapper">
            <div class="brands">
                <router-link :to="{name : ''}"><img src="../assets/macan.png" alt=""><span>MACAN</span></router-link>
                <router-link :to="{name : ''}"><img src="../assets/macan.png" alt=""><span>MACAN</span></router-link>
                <router-link :to="{name : ''}"><img src="../assets/macan.png" alt=""><span>MACAN</span></router-link>
                <router-link :to="{name : ''}"><img src="../assets/macan.png" alt=""><span>MACAN</span></router-link>
                <router-link :to="{name : ''}"><img src="../assets/macan.png" alt=""><span>MACAN</span></router-link>
                <router-link :to="{name : ''}"><img src="../assets/macan.png" alt=""><span>MACAN</span></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'brand-carosal',
    data(){
        return{
            models : {
                
            }
        }
    }
    
}
</script>

<style scoped>
    #brand-carosal{
        background-color: rgb(255, 255, 255);
        width: 100%;
        height: 10vh;
        margin-top: 10px;
        overflow: hidden;
    }
    .brands {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 5vh;
        text-align: center;
        font-family: 'Cairo', sans-serif;
    }
    .brands span{
        color: #575757;
        font-size: 16px;
        font-weight: bold;
    }
    .brands a img{
        width: auto;
        height: 8vh;
    }
    .brands a{
        text-decoration: none;
        margin: 0 45px 0 0;
    }
    @media only screen and (max-width: 480px) {
        .brands span{
        display: none;
    }
    }
</style>