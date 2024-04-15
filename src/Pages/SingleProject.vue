<script>
import axios from 'axios';

    export default {
        name: 'SingleProject',
        data(){
            return{
               project:[] 
            }
        },
        methods:{
            getSinglePost() {
                
                axios.get(`http://127.0.0.1:8000/api/test/${this.$route.params.slug}`).then(res => {
                    
                    if (res.data.success) {
                        this.project = res.data.project
                    } else {
                        this.$router.push({ name: 'not-found' })
                    }
                    console.log(this.project)
                })

            }
        },

        mounted(){
            this.getSinglePost()
        }
    }


</script>

<template>
    <div class="container">
        <h1>Titolo:{{ project.title }}</h1>
        <span>Descrizione:{{ project.description }}</span>
            <div class="tag" >
                <span v-for="element in project.technologias">{{ element.name }}</span>
            </div>
        <img :src="`http://127.0.0.1:8000/storage/images/${project.thumb}`" alt="Title" />

    </div>
</template>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .tag{
        display: flex;
        gap: 10px;
    }

    .tag span{
        background-color: red;
        border-radius: 999rem;
        padding: 5px;
        margin-bottom: 10px;
    }

</style>