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
    <h1>Titolo:{{ project.title }}</h1>
    <span>Descrizione:{{ project.description }}</span>
        <div v-for="element in project.technologias">
            <span>{{ element.name }}</span>
        </div>

    <img :src="`http://127.0.0.1:8000/storage/images/${project.thumb}`" alt="Title" />
</template>

<style scoped>
    
</style>