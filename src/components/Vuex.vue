<template>
    <div>
        <h2>NO.18 Vuex数据共享</h2>
        <p>组合式api使用state的--{{ myCount }}</p>
        <button @click="myCount++">+</button>
        <br><hr>
        <p>state仓库方法调用--{{count}}</p>
        <button @click="incCount">+</button><br>
        <input placeholder="设置值" v-model="setValue" type="text" @keyup.enter="setCount(setValue)">
        <hr>
        <p>state getter</p>
        <p>{{reverseMsg}}</p>
    </div>
</template>

<script>
import { ref } from "vue";
import { useStore,mapState,mapGetters } from "vuex";
export default {
    name: "vuex",
    // data() {
    //     return {
    //         count: this.$store.state.count,
    //     };
    // },
    setup() {
        //setup使用store
        const store = useStore();

        let myCount = ref(store.state.count);
        let setValue = ref();

        return {
            myCount,setValue
        };
    },
    methods: {
        incCount() {
            this.$store.commit("incCount");
        },
        setCount(num) {
            this.$store.commit("setCount", num);
        },
        setMsg() {
            this.$store.commit("setMsg", "你好我是改变后的数据");
        },
        setActionMsg() {
            this.$store.dispatch("setMsg", "改变后的数据-action");
        },
    },
    computed: {
        ...mapState(["count", "list"]),
        ...mapGetters(["reverseMsg", "num"]),
        // ...mapGetters({
        //    revmsg:"reverseMsg"
        // })
    },
};
</script>

<style>
</style>