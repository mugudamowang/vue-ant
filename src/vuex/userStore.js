

import { createStore } from 'vuex';

const userStore = createStore({
    state(){ //数据
        return{
            count:1,
            list:["马总","李总"],
            msg:"你好vue"
        }
    },
    mutations:{ //方法 
        incCount(state){
            state.count++           
        },
        setCount(state,num){
            state.count=num
        },
        setMsg(state,msg){
            state.msg=msg
        }
    }
    ,getters:{  //计算属性
        reverseMsg(state){
            return state.msg.split("").reverse().join("")
        },
        num(state){
            return state.count+10
        }
    },actions:{  //执行mutations里面的方法  异步操作放在actions
        incCount(context){
            context.commit("incCount") //执行mutations incCount
        },
        setMsg({commit},msg){
            setTimeout(()=>{
                commit("setMsg",msg) 
            },1000)
        }
    }
})

export default userStore