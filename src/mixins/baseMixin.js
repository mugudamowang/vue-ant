const baseMixin ={
    data() {
        return {
            mixMeg1:"hello here is baseMixin in Mixins, 全局Mix",
            mixMeg2:"hello here is baseMixin in Mixins, 全局Mix"
        }
    },
    methods: {
        mixFn(){
            alert("i'm baseMixin.js")
        }
    },
}
export default baseMixin;