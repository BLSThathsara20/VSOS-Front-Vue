<template>
    <div id="footer">
        <div class="footer-body">
            <div class="footer-body-color-top">
                <div class="footer-content">
                    <!-- Contact details -->
                    <div class="footer-column column-1">
                        <h3>Motorific</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <ul>
                            <li>Phone: <a href="tel:+9476 406 7093">(+94)76 406 7093</a> </li>
                            <li>Hotline: <a href="tel:+9476 406 7093">(+94)76 406 7093</a> </li>
                            <li>Email: <a href="mailto:blsthathsara@gmail.com">info@vsos.lk</a> </li>
                        </ul>
                    </div>

                    <!-- Quick Links -->
                    <div class="footer-column column-2">
                        <h3>QUICK LINKS</h3>
                        <ul>
                            <li><router-link :to="{name : 'Home'}">Home</router-link></li>
                            <li><router-link :to="{name : 'User'}">Sign In</router-link></li>
                            <li><router-link to="">List Your Parts</router-link></li>
                            <li><router-link :to="{name : 'User'}">Seller Register</router-link></li>
                        </ul>
                    </div>

                    <!-- Company -->
                    <div class="footer-column column-3">
                        <h3>COMPANY</h3>
                        <ul>
                            <li><router-link to="">About Us</router-link></li>
                            <li><router-link to="">Our Blog</router-link></li>
                            <li><router-link to="">Privacy Policy</router-link></li>
                            <li><router-link to="">Terms & Conditions</router-link></li>
                        </ul>
                    </div>
                    
                    <!-- Our NewsLetter -->
                    <div class="footer-column column-4">
                        <h3>OUR NEWSLETTER</h3>
                        <form action="">
                            <label for="email">
                                Subscribe to our newsletter and we will inform you about newest directory and promotions
                            </label>
                            <div class="newsletter-input">
                                <input type="email" name="email" id="email"/>
                                <button type="submit">-></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="footer-content footer-bottom-content-flex">
                    <div class="copyright-text">
                        <p>&copy 2021 <span> <router-link :to="{name : 'Home'}"> Motorific.com </router-link> </span> All Right Reservered.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data(){
        return{

        }
    },
    
}
</script>

<style scoped>
    #footer{
        overflow: hidden;
    }
    .footer-body-color-top{
        background-color: #242424;
        width: 100%;
        height: auto;
        padding: 20px 5px;
    }
    .footer-bottom{
        background-color: #1d1d1d;
        width: 100%;
        height: 10vh;
        display: flex;
        justify-content: space-between;
    }
    .footer-content{
        max-width: 1280px;
        margin: auto;
        display: grid;
        grid-template-columns: auto auto auto auto;
        color: #797979;
    }
    .footer-bottom-content-flex{
        color: #797979;
    }
    h3{
        color:#d6d6d6;
    }
    ul{
        list-style-type: none;
        padding: 0;
    }
    a{
        text-decoration: none;
        color: #797979;
    }
    a:hover{
        text-decoration: none;
        color: #38ec53;
    }
    .footer-column{
        max-width: 200px;
    }
    .newsletter-input input{
        border: none;
        background-color: transparent;
        font-size: 16px;
        color: #bfbbbb;
        width: 150px;
        height: 18px;
        outline: transparent;
        padding: 4px;
    }
    .newsletter-input{
        border: 1px solid #bfbbbb;
        display: flex;
        justify-content: space-between;
        border-radius: 5px;
        margin-top: 20px;
    }

    @media only screen and (max-width: 480px) {
        .footer-content{
            display: grid;
            grid-template-columns: auto auto;
        }
}
</style>