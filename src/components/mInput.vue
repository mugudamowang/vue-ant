<template>
    <input
        type="text"
        :value="keyword"
        @input="$emit('update:keyword', $event.target.value)"
        placeholder="自定义组件双向数据绑定"
    />
</template>

<script>
export default {
    props: ["keyword"],
    // inheritAttrs:false 禁用默认继承
};
</script>

<style lang="scss">
input {
    width: 400px;
    height: 32px;
    margin: 1rem;
    line-height: 32px;
}
</style>
