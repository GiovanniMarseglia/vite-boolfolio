<script>
import { RouterLink } from 'vue-router';


export default {
    name: 'HeaderApp',
    components: {

    },
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {
    }
}

</script>

<template>
    <nav>
        <div class="container">
            <a href="#">Boolpress</a>
            
                <ul>
                    <li>

                        <!-- Router-link -->
                        <router-link :to="{ name: 'home' }">
                            Home
                        </router-link>



                    </li>
                    <!-- <li>
                        <router-link :to="{ name: 'blog' }">
                            blog
                        </router-link>
                    </li> -->


                    <li>
                        <router-link :to="{ name: 'contact-us' }">
                            Contatti
                        </router-link>
                    </li> 

                </ul>

        
        </div>
    </nav>

</template>

<style scoped>
    .container{
        display: flex;
        gap: 20px;
    }

    nav{
        padding: 30px;
    }

    ul li{
        list-style-type: none;
    }

    ul{
        display: flex;
        gap: 5px;
    }

   

   
</style>