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
    
        <div class="container">
            <div class="containerdue">
                <div class="divuno" v-for="(element,index) in arrayPosts">
                    <router-link :to="{ name: 'single-Project', params: { slug: element.slug } }">
                    <span>{{ element.title }}</span>
                    </router-link>

                    <div class="tag">
                        <div v-for="(elements,index) in element.technologias"> 
                            <span>{{ elements.name }}</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    
    

</template>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .containerdue{
        display: flex;
        flex-direction: column;
        
    }
    .divuno{
        display: flex;
        gap: 20px;
        margin: 20px;
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
