const baseMixin ={
    data() {
        return {
            mixMeg:"hello here is baseMixin in Mixins"
        }
    },
    methods: {
        mixFn(){
            alert("i'm baseMixin.js")
        }
    },
}
export default baseMixin