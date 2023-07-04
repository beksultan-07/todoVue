<template>
    <div class="todo">
        <ul 
            v-if="todoList.length > 0"
            class="todo-list"
        >
            <li 
                v-for="(todo, i) in todoList" 
                :key="todo.id"
                class="todo-item"    
            >
                <p>{{`${ i + 1 }.  ${todo.text}` }}</p>
                <div class="todo-controll-btns">
                    <button class="btn todo-button" @click="$emit('editTodo', todo)">edit</button>
                    <button class="btn todo-button" @click="$emit('deleteTodo', todo)">del</button>
                </div>
            </li>
        </ul>
        <h3 v-else class="no-data-text">
            No data ...
        </h3>
    </div>
</template>
  
<script setup>
    import { defineProps } from 'vue';

    const {todoList} = defineProps({
        todoList: {
            type: Array,
            required: true
        }
    });

</script>

<style lang="css" scoped>
    .todo{
        max-width: 500px;
        margin: 50px auto;
    }
    .todo-list{
        padding: 0;
        list-style: none;
    }
    .todo-item{
        display: flex;
        width: 100%;
        margin: 15px 0 0;
    }

    .todo-controll-btns{
        margin: 0 0 0 auto;
    }

    .todo-button{
        margin: 0 10px;
    }

    .no-data-text{
        font-weight: 500;
        text-align: center;
    }
</style>
