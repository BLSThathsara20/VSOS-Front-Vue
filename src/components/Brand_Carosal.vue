<template>
    <div id="brand-carosal">
        <div class="wrapper">
            <div class="brands">
                <ul>
                    <li>
                        <router-link :to="{name : ''}"><img src="../assets/macan.png" alt=""></router-link>
                    </li>
                    <li>
                        <router-link :to="{name : ''}"><img src="../assets/macan.png" alt=""></router-link>
                    </li>
                    <li>
                        <router-link :to="{name : ''}"><img src="../assets/macan.png" alt=""></router-link>
                    </li>
                    <li>
                        <router-link :to="{name : ''}"><img src="../assets/macan.png" alt=""></router-link>
                    </li>
                </ul>
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
    #brand-carosal h1{
        color: rgb(255, 255, 255);
    }
    .brands ul li{
        display: inline-block;
    }
</style>