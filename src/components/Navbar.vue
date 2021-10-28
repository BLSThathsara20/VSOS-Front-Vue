<template>
    <div id="navbar">
        <div class="wrapper">
            <div class="left logo">
                <router-link :to="{name : 'Home'}">
                    <img src="@/assets/logo.png" alt="">
                </router-link>
            </div>
            <div class="left navigation">
                <ul>
                    <li>
                        <router-link :to="{name : 'Vehicle_Models'}">MODELS</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return{
            
        }
    }
    
}
</script>

<style scoped>
#navbar{
    background-color: rgb(39, 39, 39);
    padding-top: 5vh;

}
.wrapper{
    height: 8vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.logo{
    background-color: #fff;
    padding: 0 35px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.logo a img{
    width: 35px;
}
.navigation ul {
  list-style-type: none;
  padding: 0;
}
.navigation ul li {
  display: inline-block;
  margin: 0 50px;
}
.navigation ul li a {
  color: #ffffff;
  font-size: small;
  letter-spacing: 1.5px;
  text-decoration: none;
  font-weight: bold;
  font-family: 'Cairo', sans-serif;
}
@media only screen and (max-width: 480px) {
  
}
</style>