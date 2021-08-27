<template>
    <div>
        <h2>NO.18 Vuex数据共享</h2>
        <p>组合式api使用store.js的--{{ count }}</p>
        <button @click="count++">+</button>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
export default {
    name: "vuex",
    // data() {
    //     return {
    //         count: this.$store.state.count,
    //     };
    // },
    setup(){
        //setup使用store
        const store = useStore();

        let count = ref(store.state.count)
        
        return{
            count
        }
    }
};
</script>

<style>
</style>