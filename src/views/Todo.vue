<template>
    <div>
        <div class="head">
          <h1 class="head-title">Todo Page</h1>
          
          <AddTodo
            @submit-handler="addTask"
            v-model="inputValue"
          />
        </div>
  
      <TodoList 
        :todoList="store.getters.allTodos" 
        @delete-todo="deleteTodoHandler"
        @edit-todo="editTodoHandler"
        />
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue';
    import AddTodo from '../components/AddTodo.vue';
    import TodoList from '../components/TodoList.vue';
    import { useStore } from 'vuex'
    
    // value from input
    const inputValue = ref('')
  
    // if user clicked edit todo, todo will be here
    const todoToEdit = ref({})

    const store = useStore()

    // delete todo from store
    const deleteTodoHandler = (todo) => {
      store.dispatch('deleteTodoById', todo.id)
    };
  
    
    const editTodoHandler = (todo) => {
      todoToEdit.value = todo
      inputValue.value = todo.text
    }
  
    // submit handler
    const addTask = () => {
      if(inputValue.value.length > 0){
        // check todo to edit or create new 
        const checkTodo = store.getters.allTodos.some(todo => todo.id === todoToEdit.value.id)
    
        if(!checkTodo){
          // new todo
          store.dispatch('addTodo', inputValue.value)
        }else{
          // edit todo
          store.dispatch('editTodo', {
            todoId: todoToEdit.value.id, 
            todoText: inputValue.value
          })
        }
      }
  
      // clear states
      inputValue.value = ''
      todoToEdit.value = {}
  
    } 
  
  </script>
<style scoped>
  .head{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .head-title{
    font-size: 48px;
    font-weight: 600;
    margin: 0 0 20px;
  }
</style>