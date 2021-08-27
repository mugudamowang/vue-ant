import { createStore } from 'vuex';

const store = createStore({
    state(){ //数据
        return{
            count:1,
            list:["马总","李总"]
        }
    },
    mutations:{ //方法
        incCount(state){
            state.count++
        },
        setCount(state,num){
            state.count=num
        }
    }
})

export default store