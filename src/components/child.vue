<template>
    <h2>i am child</h2>
    <button @click="getparentmsg">get parent msg</button>
    <button @click="getparentfoo">run parent foo</button>
</template>
<script>
export default {
    data() {
        return {
            msg: "i am child",
        };
    },
    methods: {
        getparentmsg() {
            alert(this.$parent.msg);
        },
        getparentfoo() {
            this.$parent.foo();
        },
        foo() {
            alert("i run child's foo");
        },
    },
};
</script>