<template>
    <div>
        <h2>NO.10 Axios</h2>
        {{ data }}
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            list: [],
        };
    },
    methods: {
        getData() {
            let api =
                "v1.hitokoto.cn";
            axios.get(api).then((response) => {
                console.log(response);
                // this.list = response.data.result;
            });
        },
    },
};
</script>