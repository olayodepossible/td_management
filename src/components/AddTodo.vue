<template>
  <div>
      <h2>Add Todo</h2>
      <form @submit="onSubmit">
          <input type="text" v-model="title" placeholder="Add Todo...">
          <input type="submit" value="Submit">
      </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return{
            title: ''
        }
    },

    methods:{
        ...mapActions(['addTodo']),
        onSubmit(e){
            e.preventDefault()
            this.addTodo(this.title)
        }
    }

}
</script>

<style scoped>
form{
    display: flex;
    margin-bottom: 20px;
}

input[type='text']{
    flex: 10;
    padding: 20px;
    border: 1px solid #41b883;
    outline: 0;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}

input[type="submit"]{
    flex: 2;
    background: #41b883;
    color: #fff;
    border: 1px solid #41b883;
    cursor: pointer;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}

</style>