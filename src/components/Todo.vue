<template>

    <div class="todo">
        {{title}}
        <i @click="deleteTodo(id)" class="mdi mdi-delete"></i>
    </div>
</template>

<script>

import { mapActions} from 'vuex'
export default {
     props: {
           id: Number ,
        title: String,
    },

    methods:{
        ...mapActions(['deleteTodo']),

    }
}
</script>

<style scoped>
 .todo{
        border: 1px solid #ccc;
        background: #41b883;
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
        cursor: pointer;
    }

    i{
        position: absolute;
        bottom: 10px;
        right: 10px;
        color: #fff;
        cursor: pointer;
    }

    .is-complete{
        background: #35495e;
        color: #fff;
    }



    
    
</style> 