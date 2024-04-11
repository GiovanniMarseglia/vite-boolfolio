<script>
import axios from 'axios';

export default {
    name: 'ContactForm',
data(){
    return{
        name:'',
        email:'',
        message:'',
        errors:{},
        success:false
    }
},

methods: {
    sendForm(){
        
        const data={
            name:this.name,
            email:this.email,
            message:this.message
        }

        this.errors={};

        console.log(data);
        
        axios.post('http://127.0.0.1:8000/api/contacts',data).then(res=>{
            this.success=res.data.success;
            if(!this.success){
                this.errors=res.data.errors
            }else{
                this.name='',
                this.email='',
                this.message=''
            }
        })

    }
},
}

</script>

<template>

    <div>
        <h2>Contattaci</h2>

        <div v-if="success" role="alert">
            Messaggio inviato correttamente
        </div>

        <div>
            <form @submit.prevent="sendForm()">

                <div>

                    <input type="text" :class="{'is-invalid': errors.name}" name="name" placeholder="name" v-model="name">

                    <p v-for="(errors,index) in errors?.name" :key="`message-errors-${index}`">{{ errors }}</p>

                </div>


                <div>

                    <input type="email" :class="{'is-invalid': errors.email}" name="email" placeholder="email" v-model="email">
                    
                    <p v-for="(errors,index) in errors?.email" :key="`message-errors-${index}`">{{ errors }}</p>

                </div>



                <div>

                    <textarea name="message" :class="{'is-invalid': errors.message}" cols="30" rows="10" v-model="message"></textarea>
                    
                    <p v-for="(errors,index) in errors?.message" :key="`message-errors-${index}`">{{ errors }}</p>

                </div>

                <button type="submit">Invio</button>

            </form>
        </div>
    </div>
   
</template>

<style scoped>
    
   
</style>