<template>
    <div>
        <p>{{ msg }}</p>
        <p>{{ this.$route.query }}</p>
        <p>{{ this.$route.params }}</p>
        <hr />
        <router-link to="rtv/child">child route</router-link><br />
        <router-link to="rtv/home">home redirect</router-link>
        <router-view></router-view>
        <hr />
        <br />
        <input
            type="text"
            v-model="param"
            @keyup.enter="this.$router.push({ path: '/rtParam/' + param })"
            placeholder="input router target, enter&jump with daynamic"
        />
        <br />
        <router-link :to="`/rtParam?query=${param}`"
            >jump to /rtParam/{{ param }} with get</router-link
        >
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
    name: "routerview",
    setup() {
        let msg = ref(
            "import componets directly with RouterView, set up in routes"
        );
        let param = ref<number>();

        return {
            msg,
            param,
        };
    },
});
</script>