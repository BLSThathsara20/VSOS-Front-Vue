<template>
    <div id="about">
        <h1>about</h1>
        <input type="text" placeholder="https://watervilla.s3.eu-west-2.amazonaws.com/images/hotel/103207/hotelimages/" v-model="url" />
        <p>{{url}}001.jpg</p>
        <p>{{url}}002.jpg</p>
        <p>{{url}}003.jpg</p>
        <p>{{url}}004.jpg</p>
        <p>{{url}}005.jpg</p>
        <p>{{url}}006.jpg</p>
        <p>{{url}}007.jpg</p>
        <p>{{url}}008.jpg</p>
        <p>{{url}}009.jpg</p>
        <p>{{url}}010.jpg</p>
        <p>{{url}}011.jpg</p>
        <p>{{url}}012.jpg</p>
        <p>{{url}}013.jpg</p>
        <p>{{url}}014.jpg</p>
        <p>{{url}}015.jpg</p>
        <p>{{url}}016.jpg</p>
        <p>{{url}}017.jpg</p>
        <p>{{url}}018.jpg</p>
        <p>{{url}}019.jpg</p>
        <p>{{url}}020.jpg</p>
        <p>{{url}}021.jpg</p>
        <p>{{url}}022.jpg</p>
        <p>{{url}}023.jpg</p>
        <p>{{url}}024.jpg</p>
        <p>{{url}}025.jpg</p>
        <p>{{url}}026.jpg</p>
        <p>{{url}}027.jpg</p>
        <p>{{url}}028.jpg</p>
        <p>{{url}}029.jpg</p>
        <p>{{url}}030.jpg</p>
        <p>{{url}}031.jpg</p>
        <p>{{url}}032.jpg</p>
        <p>{{url}}033.jpg</p>
        <p>{{url}}034.jpg</p>
        <p>{{url}}035.jpg</p>
        <p>{{url}}036.jpg</p>
        <p>{{url}}037.jpg</p>
        <p>{{url}}038.jpg</p>
        <p>{{url}}039.jpg</p>
        <p>{{url}}040.jpg</p>
        <p>{{url}}041.jpg</p>
        <p>{{url}}042.jpg</p>
        <p>{{url}}043.jpg</p>
        <p>{{url}}044.jpg</p>
        <p>{{url}}045.jpg</p>
        <p>{{url}}046.jpg</p>
        <p>{{url}}047.jpg</p>
        <p>{{url}}048.jpg</p>
        <p>{{url}}049.jpg</p>
        <p>{{url}}050.jpg</p>
        <p>{{url}}051.jpg</p>
        <p>{{url}}052.jpg</p>
        <p>{{url}}053.jpg</p>
        <p>{{url}}054.jpg</p>
        <p>{{url}}055.jpg</p>
        <p>{{url}}056.jpg</p>
        <p>{{url}}057.jpg</p>
        <p>{{url}}058.jpg</p>
        <p>{{url}}059.jpg</p>
        <p>{{url}}060.jpg</p>
    </div>
</template>

<script>
export default {
    name: 'about',
    data(){
        return{
            items:['savindu', 'thathsara'],
            url : "",
            count : "",
            outputs :"",
        }
    },
    methods:{
        getData(){

            for (let i = 1; i< this.count; i++) {
            }

        }
    },
    
}
</script>

<style scoped>
    p{
        margin: 0 0 0 20px;

    }
    input{
        width: 40vw;
        border: 1px solid rgb(187, 187, 187);
        height: 25px;
        padding: 0 10px;
        border-radius: 10px;
        margin: 0 0 30px 0;
    }
</style>