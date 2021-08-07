<template>
    <h2>i am child</h2>
    <button @click="getparentmsg">get parent msg</button>
    <button @click="getparentfoo">run parent foo</button>
    <button @click="sendParent">run parent foo</button>
</template>
<script>
import event from "../models/event"
export default {
    data() {
        return {
            msg: "i am child",
        };
    },
    // emits做校验, 统一管理emit事件
    emits:{
        send:(msg)=>{
            console.log(msg);
        }
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
        sendParent() {
            //发起自定义事件send
            this.$emit("send", this.msg);
        },
    },
    mounted(){
        event.on('ApptoChild', (msg) => {
            alert(msg)
        })
    },
};
</script>