<template>
    <div>
        <p>{{this.$route.query}}</p>
        <p>{{this.$route.params}}</p>

    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>