<template>
    <form class="todo-form" @submit.prevent="emit('submitHandler')">
        <input 
            type="text"
            placeholder="write your task"
            :value="modelValue" 
            @input="handleInput"
            class="todo-input"
        >
        <button class="btn">Add</button>
    </form>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits([
    'update:modelValue',
    'submitHandler'
]);

const handleInput = (event) => {
  emit('update:modelValue', event.target.value);
};

</script>

<style scoped>
    .todo-form{
        display: flex;
        align-items: center;
    }
    .todo-input{
      margin: 0 10px 0 0;
      background: #ebebeb;
      padding: 12px 20px;
      border-radius: 60px;
      border: none;
      outline: none;

      text-decoration: none;
    }
</style>