<template>
    <div class="todoList">
        <div class="head">
            <h2>NO.5 TodoList</h2>
            <hr />
            <span>新代办: </span>
            <input type="text" v-model="todo" @keyup.enter="addItem" />
            <hr />
        </div>
        <div class="list">
            <div>
                <div
                    class="item"
                    v-for="(item, index) in list"
                    :key="index"
                    v-show="!item.checked"
                    @change="updateLocalStorage()"
                >
                    <input type="checkbox" v-model="item.checked" />
                    <span class="row">{{ index }}&nbsp;|</span>
                    <span>
                        {{ item.title }}
                    </span>
                    <span class="deletebtn" @click="deleteItem(index)">×</span>
                </div>
            </div>
            <hr />
            <div>
                <div
                    class="item checked"
                    v-for="(item, index) in list"
                    :key="index"
                    v-show="item.checked"
                >
                    <input
                        type="checkbox"
                        v-model="item.checked"
                        @change="updateLocalStorage()"
                    />
                    <span class="row">{{ index }}&nbsp;|</span>
                    <span>
                        {{ item.title }}
                    </span>
                    <span class="deletebtn" @click="deleteItem(index)">×</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import storage from '../models/storage'
export default {
    data() {
        return {
            todo: "",
            list: [],
        };
    },
    mounted() {
        let data = storage.get("todoList");
        console.log(data);
        if (data) {
            this.list = data;
        }
    },
    methods: {
        updateLocalStorage() {
            storage.set("todoList", this.list);
            console.log("list has updated");
        },
        addItem() {
            if (this.todo === "") {
                alert("请输入正确内容");
            } else {
                this.list.push({
                    title: this.todo,
                    checked: false,
                });
                this.todo = "";
                this.updateLocalStorage();
            }
        },
        deleteItem(index) {
            this.list.splice(index, 1);
            this.updateLocalStorage();
        },
    },
};
</script>

<style lang="scss">
*::-webkit-scrollbar {
    display: none;
}
h2 {
    font-style: italic;
    background: #41b883;
}
.todoList {
    padding: 0;
    margin: 0 auto;
    background: #41b883;
    width: 50%;
    height: 100vh;
    position: relative;
    .head {
        vertical-align: middle;
        position: static;
        top: 0;
        left: 0;
        color: white;
        background: inherit;
        padding: 1rem 0rem 0rem 0rem;
        input {
            border-radius: 0.1rem;
            border-color: white;
        }
        input:focus {
            outline: white solid 0.1rem;
        }
    }
    .list {
        text-align: left;
        width: 50%;
        height: 100%;
        margin: 0 auto;
        .item {
            padding: 0.1rem 0.5rem;
            background: white;
            color: #41b883;
            margin-top: 0.5rem;
            outline: #e1eec3 0.1rem solid;
            // overflow: scroll;
            max-height: 10%;
            position: relative;

            .deletebtn {
                position: absolute;
                cursor: pointer;
                background: transparent;
                top: 0;
                right: 0;
                margin: 0.1rem;
                padding-inline: 0.2rem;
                outline: #41b883 0.1rem solid;
            }
            .deletebtn:hover::after {
                content: "删除";
                font-size: 0.5rem;
                color: red;
            }
        }
        .checked {
            color: grey;
            text-decoration: line-through;
        }
    }
}
</style>