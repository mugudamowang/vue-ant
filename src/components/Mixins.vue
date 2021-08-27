<template>
    <div>
        <h2>NO.12 Mixins</h2>
        <p>{{mixMeg1}}</p>
        <p>{{mixMeg2}}</p>
        <button @click="mixFn">mixFn</button>
    </div>
</template>
<script>
// import baseMixin from '../mixins/baseMixin'//局部引用
export default {
    // mixins:[baseMixin],//局部引用
    data(){
        return {
            mixMeg1:"i'am Mixins,覆盖合并, 本组件优先"//相同名称会就近合并
        }
    } 
}
</script>