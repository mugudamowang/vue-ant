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
    </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
export default {
    name: "compositionAPI",
    //使用setupAPI
    setup() {
        //1.设置
        //ref 定义响应式数据        定义字符串、Num、bool 、数组
        //reactive 定义响应式数据    定义对象
        let title = ref("this is composition title");
        let obj = reactive({
            name: "mugu",
            age: 22,
        });
        let user = reactive({
            username: "oliver",
            age: 22,
        });

        //修改数据
        const changeTitle = () => {
            title.value = "this is changeTitle";
        };

        //2.返回
        return {
            title,
            user,
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