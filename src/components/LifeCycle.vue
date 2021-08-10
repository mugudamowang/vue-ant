<template>
    <div>
        <h2>NO.9 生命周期</h2>
        <br />
    </div>
</template>
<script>
export default {
    data() {
        return {
            log: "",
        };
    },
    beforeCreate() {
        console.log("beforeCreate实例刚刚被创建1");
    },
    created() {
        console.log("created实例已经创建完成2");
    },
    beforeMount() {
        console.log("beforeMount模板编译之前3");
    },
    mounted() {
        /*请求数据，操作dom , 放在这个里面  mounted*/
        console.log("mounted模板编译完成4");
    },
    beforeUpdate() {
        console.log("beforeUpdate数据更新之前");
    },
    updated() {
        console.log("updated数据更新完毕");
    },
    activated() {
        console.log("keep-alive 缓存的组件激活时调用");
    },
    deactivated() {
        console.log("keep-alive 缓存的组件停用时调用");
    },
    beforeUnmount() {
        //vue2.x中beforeDestroy
        /*页面销毁的时候要保存一些数据，就可以监听这个销毁的生命周期函数*/
        console.log("beforeUnmount实例销毁之前");
    },
    unmounted() {
        //vue2.x中destroyed
        console.log("unmounted实例销毁完成");
    },
};
</script>