<script setup>
import { ref } from 'vue';
import { useTodos } from './composables/useTodo';

const { newTodo, todos, addTodo, removeTodo } = useTodos();
</script>

<template>
  <div class="max-w-md md:max-w-2xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4 text-center">투두리스트</h1>
    <div class="flex">
      <input
        v-model="newTodo"
        placeholder="할 일을 입력하세요"
        class="w-full px-4 py-2 border rounded mb-4"
        @keyup.enter="addTodo"
      />
      <button
        class="w-full rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 mb-4"
        @click="addTodo"
      >
        추가
      </button>
    </div>
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
        class="flex items-center justify-between py-2 border-b"
      >
        <label class="flex items-center gap-2">
          <input
            v-model="todo.completed"
            type="checkbox"
          />
          <span
            :class="{
              'line-through text-gray-400': todo.completed,
            }"
          >
            {{ todo.text }}
          </span>
        </label>
        <button
          class="text-sm text-red-500 hover:text-red-700"
          @click="removeTodo(todo.id)"
        >
          삭제
        </button>
      </li>
    </ul>
  </div>
</template>
