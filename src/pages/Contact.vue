<template>
    <div id="contact">
        <div class="wrapper">
            <div class="contact-info">
                <div class="left-contact-details">
                    <div class="address">
                        <h2>Address</h2>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    <div class="phone">
                        <h2>Lets Talk</h2>
                        <a href="tel:+94764067093">(+94)76 406 7093</a>
                        <a href="tel:+94764067093">(+94)76 406 7093</a>
                    </div>
                    <div class="mail">
                        <h2>General Support</h2>
                        <a href="mailto:blsthathsara@gmail.com">contact@motorific.com</a>
                    </div>
                    <div class="open-hours">
                        <h2>We are Open</h2>
                        <p>Monday - Friday 10AM -8PM</p>
                    </div>
                </div>

                <div class="right-contact-with-us">
                    <h3>Connect With Us</h3>
                    <p>Don’t Hesitate to Contact with us for any kind of information</p>
                    <form action="">
                        <input type="text" placeholder="Your name"/>
                        <input type="email" placeholder="Email" required/>
                        <input type="tel" placeholder="Telephone"/>
                        <textarea name="message" id="message" cols="30" rows="5" placeholder="Your Message"></textarea>
                        <button type="submit">Send Now</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="map-view"></div>
    </div>
</template>

<script>
export default {
    name: 'contact',
    data(){
        return{
            
        }
    }
    
}
</script>

<style scoped>
    #contact{
        margin: 40px 0;
    }
    .contact-info{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .right-contact-with-us{
        text-align: center;
    }
    .right-contact-with-us form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .right-contact-with-us form input{
        margin: 10px 0;
        border: 1px solid rgb(199, 199, 199);
        width: 100%;
        height: 30px;
        border-radius: 5px;
        padding: 2px 5px;
        color: rgb(86, 86, 86);
        font-size: 14px;
    }
    .right-contact-with-us form textarea{
        margin: 10px 0;
        border: 1px solid rgb(199, 199, 199);
        width: 100%;
        height: 100px;
        border-radius: 5px;
        padding: 2px 5px;
        color: rgb(86, 86, 86);
        font-size: 14px;
    }
    .right-contact-with-us form button{
        background-color: rgb(52, 52, 52);
        border: none;
        cursor: pointer;
        padding: 10px;
        border-radius: 10px;
        width: 100%;
        color: #fff;
        font-size: medium;
    }
</style>