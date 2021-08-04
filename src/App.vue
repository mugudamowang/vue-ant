<template>
    <div class="header">
        <p>Catolog:</p>
        <a href="#base">baseskill</a>&nbsp;
        <a href="#todo">todolist</a>
    </div>

    <BaseSkill id="base"></BaseSkill>
    <hr />
    <TodoList id="todo"></TodoList>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseSkill from "./components/BaseSkill.vue";
import TodoList from "./components/TodoList.vue";


export default defineComponent({
    name: "App",
    components: {
        BaseSkill,
        TodoList,
    },
});
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
div,html,body,p{
  margin:0;
  padding:0;
}
.header{
  margin: 0;
  padding:0;
  position: sticky;
  z-index: 100;
  top: 0;
  background: #41b883;
}
</style>
