<template>
    <div id="top-navigation">
        <div class="wrapper">
            <div class="left-top-navigation">
                <ul>
                    <li><router-link :to="{ name : 'Home'}">HOME</router-link></li>
                    <li><router-link :to="{ name : 'About'}">ABOUT</router-link></li>
                    <li><router-link :to="{ name : 'Contact'}">CONTACT</router-link></li>
                </ul>
            </div>
            <div class="right-top-navigation">
                <router-link :to="{ name : 'User'}">LOGIN/REGISTER</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Top_Navigation',
    data(){
        return{
            
        }
    }
    
}
</script>

<style scoped>
#top-navigation{
    background-color: #F7F7F7;
}
.wrapper{
    max-width: 1280px;
    height: 5vh;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px 0 0;
}
a {
  color: #575757;
  font-size: small;
  letter-spacing: 1.5px;
  text-decoration: none;
}
@media only screen and (max-width: 480px) {
  .left-top-navigation{
      display: none;
  }
}
</style>