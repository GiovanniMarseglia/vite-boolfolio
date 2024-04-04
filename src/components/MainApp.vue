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

    <div class="divuno" v-for="(element,index) in arrayPosts">
        <span>{{ element.title }}</span>

        <div class="tag">
            <div v-for="(elements,index) in element.technologias"> 
                <span>{{ elements.name }}</span>
            </div>
        </div>
        
    </div>

    

</template>

<style scoped>
    .divuno{
        display: flex;
        gap: 40px;
        margin: 20px 0px;
    }
    .divuno span:last-child{
        background-color: red;
        border-radius: 999rem 999rem;
        padding: 5px;
    }

    .tag{
        display: flex;
        gap: 10px;
    }
</style>
