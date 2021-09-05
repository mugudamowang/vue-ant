let newsStore={
    state(){ //数据
        return{           
            list:["新闻1","新闻2"],  
            count:100          
        }
    } ,mutations:{
        incCount(state){
            state.count++
        }
    } 
}

export default newsStore