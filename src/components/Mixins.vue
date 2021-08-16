<template>
    <div>
        <h2>NO.12 Mixins</h2>
        <p>{{mixMeg}}</p>
        <button @click="mixFn">mixFn</button>
    </div>
</template>
<script>
import baseMixin from '../mixins/baseMixin'//局部引用
export default {
    mixins:[baseMixin],
    data(){
        return {
            // mixMeg:"i'am Mixins"//相同名称会就近合并
        }
    } 
}
</script>