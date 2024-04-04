<script>
import axios from 'axios';
    export default {
        name: 'MainApp',
        data(){
            return{
                arrayPosts:[]
            }
        },
        methods:{
            getPost(){
                axios.get( 'http://127.0.0.1:8000/api/test' ).then(res=>{
                    console.log(res.data.project)
                    this.arrayPosts = res.data.project
                })
            }
        },
        mounted(){
            this.getPost()
        }
    }


</script>

<template>

    <ul>
        <li v-for="(element,index) in arrayPosts">{{ element.title }}</li>
    </ul>

</template>

<style scoped>

</style>
