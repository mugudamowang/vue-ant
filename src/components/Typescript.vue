<template>
    <div>
        <h2>{{title}}</h2>
        <p>{{mugu.name}}--{{mugu.age}}</p>
        <p>{{mugu.sayHi("(｡･∀･)ﾉﾞ嗨")}}</p>
        <input type="text" v-model="mugu.name">
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

interface user{
    name:string,
    age:number|string,
    sayHi(hi:string):string,
    title?:string
}

export default defineComponent({
    name:"typescript usage",
    setup(){
        const title=ref<string>("NO.16 Typescript")
        let mugu=reactive<user>({
            name:"mugu",
            age:20,
            sayHi(hi:string){
                return hi; 
            }
        })
        return {
            mugu,
            title
        }

    }
})
</script>