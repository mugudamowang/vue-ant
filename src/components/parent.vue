<template>
    <h2>NO.6 i am parent</h2>
    <button @click="getchildmsg">get child msg</button>
    <button @click="getchildfoo">run child foo</button>
    <hr>
    <child @send="foo" ref="child"></child>
    <hr>
</template>
<script>
import child from "./child.vue"
export default {
    data() {
        return {
            msg: "i am parent"
        }
    },
    components:{child},
    methods: {
        getchildmsg() {
            alert(this.$refs.child.msg);
        },
        getchildfoo() {
            this.$refs.child.foo();
        },
        foo(){
            alert("i run parent's foo")
        },
        
    },
};
</script>
