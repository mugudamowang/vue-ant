<template>
    <div class="header">
        <p>{{ title }}</p>
        <p>Catolog:</p>
        <a href="#base">baseskill</a>&nbsp; <a href="#todo">todolist</a>&nbsp;
        <a href="#com">communicate</a>&nbsp; <a href="#mitt">mitt</a>&nbsp;
        <a href="#life">LifeCycle</a>&nbsp;<a href="#axios">axios</a>&nbsp;
        <a href="#fetch">fetch</a>&nbsp;<a href="#mixin">mixin</a>&nbsp;
        <a href="#modal">modal</a>&nbsp;<a href="#compose">compose</a>&nbsp;
        <a href="#inject">inject</a>&nbsp;<a href="#ts">ts</a>&nbsp;
        <a href="#rtv">routes</a>&nbsp;<a href="#ant">antDesign</a>&nbsp;
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
    <br />
    <Fetch id="fetch"></Fetch>
    <br />
    <Mixins id="mixin"></Mixins>
    <Modal
        id="modal"
        :visible="isVisible"
        title="自定义标题"
        @modal-close="isVisible = false"
    ></Modal>
    <button @click="isVisible = true">modal show</button>
    <br />
    <Composition id="compose"></Composition>
    <br />
    <Inject @setTitle="setTitle" id="inject"></Inject>
    <br />
    <Typescript id="ts"></Typescript>
    <br />
    <hr />
    <h2>NO.17 RouterView</h2>
    <router-link to="/rtv?way='get'">get router view</router-link><br>
    <router-link :to="{name:'routeview',params:{way:'name'}}">get router view with name</router-link>
    <router-view id="rtv"></router-view>
    <br>
    <Vuex></Vuex>
    <br><hr>
    <AntD id="ant"></AntD>
    <br><hr>

</template>

<script lang="ts">
import { defineComponent, provide, ref } from "vue";
import BaseSkill from "./components/BaseSkill.vue";
import TodoList from "./components/TodoList.vue";
import ParentAndChild from "./components/parent.vue";
import event from "./models/event";
import mButton from "./components/mButton.vue";
import mInput from "./components/mInput.vue";
import LifeCycle from "./components/LifeCycle.vue";
import Axios from "./components/Axios.vue";
import Fetch from "./components/Fetch.vue";
import Mixins from "./components/Mixins.vue";
import Modal from "./components/Modal.vue";
import Composition from "./components/Composition.vue";
import Inject from "./components/Inject.vue";
import Typescript from "./components/Typescript.vue";
import Vuex from "./components/Vuex.vue";
import AntD from "./components/AntD.vue"


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
        Mixins,
        Modal,
        Composition,
        Inject,
        Typescript,
        Vuex,
        AntD
    },
    setup() {
        let title = ref("vue-vant app");
        provide("title", title);
        let setTitle = () => {
            title.value = "changed app title";
        };
        return {
            title,
            setTitle,
        };
    },
    data() {
        return {
            keyword: "",
            isShow: true,
            isVisible: false,
        };
    },
    methods: {
        sendtoChild() {
            event.emit("ApptoChild", "i am app");
        },
    },
});
</script>

<style lang="scss">
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
    color: white;
    margin: 0;
    padding: 10px 0;
    position: sticky;
    z-index: 100;
    top: 0;
    background: #41b883cc;
    a {
        color: inherit;
    }
}
h2 {
    font-style: italic;
    background: #41b883;
}
</style>
