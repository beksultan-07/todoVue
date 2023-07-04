import { createStore } from 'vuex';

const store = createStore({
  state: {
    todos: [
      {id: 0, text: 'fsafsf'},
      {id: 1, text: 'fsafsf1'},
      {id: 2, text: 'fsafsf2'},
      {id: 3, text: 'fsafsf3'},
      {id: 4, text: 'fsafsf4'}
    ]
  },
  mutations: {
    updateTodos(state, todos){
      state.todos = todos
    },
    addNewTodo(state, todo){
      state.todos = [...state.todos, todo]
    },
  },
  actions: {
    setTodo(ctx, todos){
      ctx.commit('updateTodos', todos)
    },

    addTodo(ctx, todoText){
      const todo = {
        id: Date.now(),
        text: todoText
      }
      ctx.commit('addNewTodo', todo)
    },

    deleteTodoById(ctx, todoId){
      const newTodoList = state.todos.filter((todo) => todo.id !== todoId)
      ctx.commit('updateTodos', newTodoList)
    },
    
    editTodo(ctx, {todoId, todoText}){
      const newTodoList = [...ctx.state.todos] 
      
      const todoIndex = newTodoList.findIndex(todo => todo.id === todoId)
      newTodoList[todoIndex].text = todoText

      ctx.commit('updateTodos', newTodoList)
    }
  },
  getters: {
    allTodos(state){
      return state.todos
    }
  }
});

export default store;
