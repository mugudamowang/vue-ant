<template>
    <!-- 挂载到teleport可以让当前dom节点与外部节点平级, to就是挂载的目标dom节点, 在一些定位中使用较多 -->
    <div>
        <h2>
            NO.13 teleport modal
        </h2>
        <teleport to="body">
            <div class="modal-bg" v-if="visible">
                <div class="modal-content">
                    <button class="close" @click="$emit('modal-close')">
                        X
                    </button>
                    <div class="model-title">{{ title }}</div>
                    <div class="model-body">
                        <slot>
                            挂载到teleport可以让当前dom节点与外部节点平级,
                            to就是挂载的目标dom节点, 在一些定位中使用较多
                        </slot>
                    </div>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script>
export default {
    props: ["visible", "title"],
};
</script>

<style lang="scss" scoped>
.modal-bg {
    background: #000;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    position: fixed;
    top: 0px;
    left: 0px;
}

.modal-content {
    width: 600px;
    opacity: 0.9;
    min-height: 300px;
    border: 1px solid #eee;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;

    .close {
        position: absolute;
        right: 10px;
        top: 5px;
        display: inline-block;
        width: 40px;
        border: none;
        cursor: pointer;
    }

    .model-title {
        background: #eee;
        color: #000;
        height: 32px;
        line-height: 32px;
        text-align: center;
        
    }

    .model-body {
        padding: 40px;
    }
}
</style>
