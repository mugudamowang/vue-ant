<template>
    <div>
        <h2>NO.6 父子通信</h2>
        <h3>{{msg}}</h3>
        <button @click="getchildmsg">get child msg</button>
        <button @click="getchildfoo">run child foo</button>
        <child @send="foo" ref="child"></child>
        <hr />
    </div>
</template>
<script>
import child from "./child.vue";
export default {
    data() {
        return {
            msg: "i am parent",
        };
    },
    components: { child },
    methods: {
        getchildmsg() {
            alert(this.$refs.child.msg);
        },
        getchildfoo() {
            this.$refs.child.foo();
        },
        foo() {
            alert("i run parent's foo");
        },
    },
};
</script>
