<template>
    <button>
        <slot></slot>
    </button>
</template>
<script>
export default {
    data() {
        return {
            msg: "i am child",
        };
    },
};
</script>
<style lang="scss" scoped>
.commit {
    background: red;
}
.cancel {
    background: grey;
}
</style>