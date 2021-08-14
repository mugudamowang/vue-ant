<template>
    <div>
        <h2>NO.9 生命周期</h2>
        <br />
        <button @click="msg = '改变后的值'">改变msg</button>

        <div id="msg">
            {{ msg }}
        </div>

        <br />
        <div class="tab_info">
            <ul class="tab_header">
                <li
                    v-for="(item, index) in posts"
                    :key="index"
                    :class="{ active: currentIndex === index }"
                    @click="currentIndex = index"
                >
                    {{ item.title }}
                </li>
            </ul>
            <div class="tab_content">
                <span v-html="content"></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            log: "",
            msg:"改变前",
            currentIndex: 0,
            posts: [
                {
                    title: "mugu",
                    content:
                        "<p> skate</p>",
                },
                {
                    title: "oliver",
                    content:
                        "<p>photograph</p>",
                },
                {
                    title: "bukun",
                    content:
                        "<p>reading</p>",
                },
            ],
        };
    },
    computed: {
        content() {
            return this.posts[this.currentIndex].content;
        },
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
        var oDiv1 = document.querySelector("#msg");
        console.log("1-" + oDiv1.innerHTML);
        //这里不会改变dom节点
        this.msg = "$nextTick演示";
        var oDiv2 = document.querySelector("#msg");
        console.log("2-" + oDiv2.innerHTML);
        
        //使用nextTick, 类似setTimeout
        this.$nextTick(() => {
            // 仅在渲染整个视图之后运行的代码
            var oDiv3 = document.querySelector("#msg");
            console.log("3-" + oDiv3.innerHTML);
        });
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
<style lang="scss" scoped>
.tab_info {
    width: 600px;
    margin: 0 auto;
    border: 1px solid #eee;

    .tab_header {
        width: 100%;
        height: 40px;
        line-height: 40px;
        list-style: none;

        li {
            display: inline-block;
            margin: 0px 5px;
            background: #eee;
            text-align: center;
            padding: 0px 10px;
            cursor: pointer;

            &.active {
                background: red;
                color: #fff;
            }
        }
    }

    .tab_content {
        padding: 40px;
    }
}
</style>