<template>
    <div>
        <h2>NO.10 Axios</h2>
        <input placeholder="express搜索框" v-model="keyword" @keyup.enter="getData" />
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
            data: ["输入商品如--苹果"],
            keyword: "",
        };
    },
    methods: {
        getData() {
            let api = "http://localhost:8000/api1",
                param = {
                    params: {
                        pattern: this.keyword, //传参
                    },
                };
            console.log(this.keyword);
            this.axios.get(api, param).then((response) => {
                this.data = response.data[0];
            });
        },
    },
};
</script>
<style lang="scss" scoped>
.result{
    width: 26vw;
    list-style: none;
    background: wheat;
    padding: 0.1rem;
    text-align: left;
    margin: 0 auto;
    padding: 20px;
    border-radius: 5px;
}
</style>