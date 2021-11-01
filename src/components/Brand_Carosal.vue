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
        margin-top: 10px;
        overflow: hidden;
    }
    .brands {
        height: 10vh;
        display: flex;
        text-align: center;
        font-family: 'Cairo', sans-serif;
    }
    .brands span{
        color: #575757;
        font-size: 16px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        margin: -15px;
    }
    .brands span:hover{
        color: rgb(54, 213, 99);
    }
    .brands a img{
        width: auto;
        height: 7vh;
    }
    .brands a{
        text-decoration: none;
        margin: 0 50px 0 0;
    }
    @media only screen and (max-width: 480px) {
        .brands span{
        display: none;
    }
    .brands a{
        display: flex;
        align-items: center;
    }
    }
</style>