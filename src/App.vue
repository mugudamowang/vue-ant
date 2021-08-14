<template>
    <div class="header">
        <p>Catolog:</p>
        <a href="#base">baseskill</a>&nbsp; <a href="#todo">todolist</a>&nbsp;
        <a href="#com">communicate</a>&nbsp; <a href="#mitt">mitt</a>&nbsp;
        <a href="#life">LifeCycle</a>&nbsp;<a href="#axios">axios</a>&nbsp;
        <a href="#fetch">fetch</a>&nbsp;
    </div>

    <BaseSkill ref="base" id="base"></BaseSkill>
    <hr />
    <TodoList id="todo"></TodoList>
    <hr />
    <ParentAndChild id="com"></ParentAndChild>
    <h2 id="mitt">NO.7 mitt插件</h2>
    <button @click="sendtoChild">跨层传参到child组件</button>

    <h2 id="mitt">NO.8 自定义属性, 双向数据绑定</h2>
    <mButton class="commit">确认</mButton>
    <mButton class="cancel">取消</mButton><br />
    <mInput v-model:keyword="keyword"></mInput>
    {{ keyword }}
    <br />
    <hr />
    <LifeCycle id="life" v-if="isShow"> </LifeCycle>
    <button @click="isShow = !isShow">挂载/卸载组件</button>
    <Axios id="axios"></Axios>
    <br>
    <Fetch id="fetch"></Fetch>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseSkill from "./components/BaseSkill.vue";
import TodoList from "./components/TodoList.vue";
import ParentAndChild from "./components/parent.vue";
import event from "./models/event";
import mButton from "./components/mButton.vue";
import mInput from "./components/mInput.vue";
import LifeCycle from "./components/LifeCycle.vue";
import Axios from "./components/Axios.vue";
import Fetch from "./components/Fetch.vue";

export default defineComponent({
    name: "App",
    components: {
        BaseSkill,
        TodoList,
        ParentAndChild,
        mButton,
        mInput,
        LifeCycle,
        Axios,
        Fetch,
    },
    data() {
        return {
            keyword: "",
            isShow: true,
        };
    },
    methods: {
        sendtoChild() {
            event.emit("ApptoChild", "i am app");
        },
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
    margin-bottom: 100px;
}
div,
html,
body,
p {
    margin: 0;
    padding: 0;
}
.header {
    margin: 0;
    padding: 0;
    position: sticky;
    z-index: 100;
    top: 0;
    background: #41b883;
}
h2 {
    font-style: italic;
    background: #41b883;
}
</style>
