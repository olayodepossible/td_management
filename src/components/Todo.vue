<template>
    <div class="todo">{{title}}</div>

</template>

<script>


export default {
     props: {
    title: String
  },
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
    
</style> 