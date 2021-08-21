// 没有composition之前vue的业务代码可重用性在大型项目表现不好.
<template>
    <div>
        <h2>NO.14 {{ Maintitle }}</h2>
        <button @click="foo">hello</button>
        <hr />
        <p>{{ title }}</p>
        <button @click="changeTitle">changeTitle</button>
        <input type="text" v-model="title" />
        <hr />
        <p>{{ user.username }}--{{ user.age }}</p>
        <input placeholder="change name" type="text" v-model="user.username" />
        <input placeholder="change age" type="text" v-model="user.age" />

        <hr />
        <p>{{ name }}--{{ age }}</p>
        <input placeholder="change name" type="text" v-model="name" />
        <input placeholder="change age" type="text" v-model="age" />
        <hr />
        <p>computedAPI:</p>
        <p>{{ userItem }}</p>
        <br />
        <p>readonlyAPI:</p>
        <input type="text" v-model="objReadOnly.username" />
        <p>{{ objReadOnly }}</p>
        <br />

        <p>watchEffectAPI&watch:</p>
        <p>{{ user.username }}--{{ user.age }}</p>
        <br />
        <button @click="setInter">set interval</button>
        <button @click="clearInter">clear interval</button>
    </div>
</template>

<script>
import {
    computed,
    reactive,
    ref,
    toRefs,
    readonly,
    watchEffect,
    watch,
    onMounted,
    onUpdated,
} from "vue";
export default {
    name: "compositionAPI",
    //使用setupAPI
    setup() {
        //1.设置
        //ref 定义响应式数据        定义字符串、Num、bool 、数组
        //reactive 定义响应式数据    定义对象
        let title = ref("this is composition title");
        let logtxt = ref("");
        let obj = reactive({
            name: "mugu",
            age: 22,
        });
        let user = reactive({
            username: "oliver",
            age: 22,
        });
        let objReadOnly = reactive({
            username: "oliver",
            age: 22,
        });

        //修改数据
        const changeTitle = () => {
            title.value = "this is changeTitle";
        };

        //computed API
        let userItem = computed(() => {
            return user.username + "--" + user.age;
        });

        // readonly传入一个对象（响应式或普通）或 ref，返回一个原始对象的只读代理。一个只读的代理是“深层的”，对象内部任何嵌套的属性也都是只读的。
        objReadOnly = readonly(objReadOnly);

        watchEffect(() => {
            console.log(`name=${user.username}`);
        });
        watch(user, (newData, oldData) => {
            console.log(user.username + "--" + user.age);
            console.log(newData, oldData);
        });
        onMounted(() => {
            console.log("onMounted");
        });
        onUpdated(() => {
            console.log("onUpdated");
        });

        var inter = ref("");

        const setInter = () => {
            inter = setInterval(function () {
                console.log(user.age++);
            }, 1000);
        };

        const clearInter = () => {
            clearInterval(inter);
        };

        //2.返回
        return {
            title,
            user,
            userItem,
            objReadOnly,
            setInter,
            clearInter,
            changeTitle,
            ...toRefs(obj),
        };
    },
    //option设置的方法不利于重用和共享
    data() {
        return {
            Maintitle: "composition API",
        };
    },
    methods: {
        foo() {
            alert("hello compositionAPI");
        },
    },
};
</script>

<style>
</style>