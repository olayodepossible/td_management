<template>
  <div>
    <AddTodo/>
    <FilterTodo/>

    <h2>List of Todos</h2>

    <div class="legend">
        <span>Double click to mark as complete</span>
        <span>
            <span class="incomplete-box"></span> = Incomplete
        </span>
        <span>
            <span class="complete-box"></span> = Complete
        </span>
    </div>
    <div class="todos"> 
      <div v-for="todo in allTodos" :key="todo.id"  @dblclick="onDoubleClick(todo)">
        <Todo :title= todo.title :id= todo.id v-bind:class="{'is-complete':todo.completed}"/>
      </div>
    </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Todo from './Todo'
import AddTodo from './AddTodo'
import FilterTodo from './FilterTodo'
export default {
 
  components:{
    AddTodo,
    Todo,
    FilterTodo
  },
  
    methods:{
        ...mapActions(['fetchTodos', 'updateTodo']),
        onDoubleClick(todo){
            const updatedTodo = {
                id: todo.id,
                title: todo.title,
                completed: !todo.completed
            }

            this.updateTodo(updatedTodo)
        }
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

    .legend{
        display: flex;
        justify-content: space-around;
        margin-bottom: 1rem;
    }

    .complete-box{
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #35495e;
    }
    .incomplete-box{
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #41b883;
    }

  @media screen and  (max-width: 500px){
    .todos{
      grid-template-columns: 1fr;
    }
  }
   

</style>
