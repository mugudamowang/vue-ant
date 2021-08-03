<template>
<p>Catolog:</p>
  <a href="#base">baseskill</a>&nbsp;
  <a href="#todo">todolist</a>

  <BaseSkill id="base"></BaseSkill>
  <hr>
  <TodoList id="todo"></TodoList>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseSkill from './components/BaseSkill.vue'
import TodoList from './components/TodoList.vue'

export default defineComponent({
  name: 'App',
  components: {
    BaseSkill,
    TodoList,
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
