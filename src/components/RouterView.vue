<template>
    <div>
        <h2>{{title}}</h2>
        <p>{{msg}}</p>
    </div>
    
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
    name: "routerview",
    setup() {
        let title = ref("NO.17 RouterView");
        let msg = ref(
            "import componets directly with RouterView, set up in routes"
        );

        return {
            msg,
            title,
        };
    },
});
</script>