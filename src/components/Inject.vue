<template>
    <div>
        <h2>NO.15 Inject API</h2>
        <button @click="$emit('setTitle')">change title</button>
        <p>inject from app--{{ title }}</p>
    </div>
</template>

<script>
import { inject } from "@vue/runtime-core";
export default {
    setup() {
        let title = inject("title");//option选项使用过provide和inject没有响应式. 
        return { title };
    },
};
</script>

<style>
</style>