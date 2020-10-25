<template>
  <div>
    <AddTodo/>
    <h2>List of Todos</h2>
    <div class="todos"> 
      <div v-for="todo in allTodos" :key="todo.id" >
        <Todo :title= todo.title />
      </div>
    </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Todo from './Todo'
import AddTodo from './AddTodo'
export default {
 
  components:{
    AddTodo,
    Todo
  },
  
    methods:{
        ...mapActions(['fetchTodos'])
    },
    computed: mapGetters(['allTodos']),

    created(){
        this.fetchTodos()
    }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .todos {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }

   

</style>
