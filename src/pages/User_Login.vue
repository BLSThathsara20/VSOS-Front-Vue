<template>
    <div id="userLogin">
        <div class="wrapper">
            <div class="user-authontication-card">
                <div class="user-login">
                    <h1>Log In</h1>
                    <form action="">
                        <label for="email">Email address</label>
                        <input type="text" id="email">
                        <label class="password-input" for="password">Password</label>
                        <input type="password" id="password">
                        <button>Sign In</button>
                        <a href="#">Fogot password?</a>
                        <div class="socil-logins">
                            <!-- <ul>
                                <li>
                                    <router-link><i class="fab fa-google"></i></router-link>
                                </li>
                            </ul> -->
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'userLogin',
    data(){
        return{
            
        }
    }
    
}
</script>

<style scoped>
    #userLogin{
        background: linear-gradient(to top, #00ff7bb8, #00c8ff89);
        width: 100%;
        height: 87vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .user-authontication-card{
        background-color: rgb(255, 255, 255);
        border-radius: 40px;
    }
    .user-login{
        padding: 35px;
    }
    .user-login form{
        display: flex;
        flex-direction: column;
        font-family: 'Cairo', sans-serif;
    }
    .password-input{
        margin-top: 12px;
    }
    .user-login form button{
        cursor: pointer;
        border: none;
        border-radius: 5px;
        background-color: #343A41;
        color: #fff;
        font-size: 18px;
        padding: 10px;
        margin-top: 15px;
    }
    .user-login form input{
        width: 280px;
        height: 30px;
        font-size: 18px;
        border: 1.5px solid rgb(90, 90, 90);
        border-radius: 5px;
        padding: 2px 8px;
    }
    .user-login form label{
        font-size: 18px;
    }
    .user-login h1{
        text-align: center;
        font-family: 'Cairo', sans-serif;
        font-weight: 600;
    }
    .user-login a{
        text-decoration: none;
        text-align: right;
        margin-top: 5px;
    }
</style>