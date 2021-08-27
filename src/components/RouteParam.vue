<template>
    <div>
        <p>使用get{{this.$route.query}}</p>
        <p>使用params{{this.$route.params}}</p>

    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>