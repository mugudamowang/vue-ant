<template>
    <div>
        <h2>NO.11 Fetch JSONP</h2>
        <input
            placeholder="百度搜索框"
            v-model="keyword"
            @input="getData"
        />
        <br />
        <ul class="result">
            <p>结果:</p>
            <li v-for="(item, index) in data" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: "",
            keyword: "",
        };
    },
    methods: {
        getData() {
            //https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=golang&cb=xxxxx
            //添加函数防抖定时器优化input搜索, 类似推荐
            clearTimeout(this.timer); //清楚定时
            this.timer = setTimeout(() => {
                if (this.keyword != "") {
                    var api =
                        "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" +
                        this.keyword;
                    this.fetchJsonp(api, {
                        jsonpCallback: "cb", //cb即callback名称, 根据api来
                    })
                        .then((response) => {
                            return response.json();
                        })
                        .then((data) => {
                            console.log(data.s);
                            this.data = data.s; //用到this一定要注意this指向
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                } else {
                    this.data = [];
                }
                F;
            }, 500);
        },
    },
};
</script>
<style lang="scss" scoped>
.result {
    width: 26vw;
    list-style: none;
    background: wheat;
    padding: 20px;
    border-radius: 5px;
    text-align: left;
    margin: 0 auto;
}
</style>