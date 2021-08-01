<template>
    <div class="container">
        <div name="section1">
            <h2>NO1. 基础数据操作</h2>

            <hr />
            <h3>
                <span v-text="'1.v-text和文本插值{{}}:'"></span>
            </h3>
            <p>{{ msg }}</p>
            <hr />
            <h3>
                <span>2.v-html</span>
            </h3>
            <p v-html="vhtml"></p>
            <hr />
            <h3>
                <span>3.v-bind绑定属性</span>
            </h3>
            <p>
                <img
                    :src="vhref"
                    title="i have bind image src to vue icon"
                    alt="vueicon"
                />
            </p>
            <hr />
            <h3>
                <span>4.v-bind:[attribute]动态参数</span>
            </h3>
            <p>
                <img
                    :[vsrc]="vhref"
                    title="click me and change to
            src"
                    @click="changeVsrc"
                />
            </p>
            <hr />
            <h3>
                <span>5.v-for循环</span>
            </h3>

            <div>
                <p>Array List(index--item):</p>
                <ul v-for="(item, index) in ArrayList" :key="index">
                    <li>{{ item }}</li>
                </ul>
            </div>
            <div>
                <p>Array Object List(index--item.name):</p>
                <ul v-for="(item, index) in ArrayObjectList" :key="index">
                    <li>{{ index }}--{{ item.name }}</li>
                </ul>
            </div>
            <div>
                <p>Object List(index--keyName--value):</p>
                <ul v-for="(value, name, index) in ObjectList" :key="index">
                    <li>{{ index }}--{{ name }}--{{ value }}</li>
                </ul>
            </div>
            <div>
                <p>Compose List(index1--item1,index2--item2)</p>
                <ul v-for="(item1, index1) in ComposeList" :key="index1">
                    <li>{{ index1 }}--{{ item1.name }}</li>
                    <ul v-for="(item2, index2) in item1.hobbies" :key="index2">
                        <li>{{ index2 }}--{{ item2 }}</li>
                    </ul>
                </ul>
            </div>
        </div>
        <div name="section2">
            <div name="no2">
                <h2>No2. 基础方法操作</h2>
                <hr />
                <h3>
                    <span>1. v-on绑定Class</span>
                </h3>
                <button :class="vclass" @click="changeVclass">
                    isRed?:{{ isRed }}--click me to change color(attr)</button
                ><br />
                <button :class="{ redFont: isRed }" @click="changeVclass">
                    isRed?:{{ isRed }}--click me to change color(Object)
                </button>
                <button
                    :class="[{ redFont: isRed }, { boldFont: isBold }]"
                    @click="changeVclass"
                >
                    isBold&Red?:{{ isBold }}--click me to change color and
                    bold(Object)
                </button>
                <hr />

                <h3>2. 监听事件, 传递事件对象</h3>
                <button @click="getEvent($event)">
                    click me to get event info
                </button>

                <h3>3. 阻止默认行为</h3>
                <a
                    href="http://www.baidu.com"
                    @click="preventJump($event)"
                    target="_blank"
                    >click me to prevent</a
                >

                <h3>4. 多个参数</h3>
                <button @click="passParameters('hello there', $event)">
                    click me to pass parameters
                </button>
                <h3>5. 按键修饰符</h3>
                <button @keyup="passParameters('hello there', $event)">
                    enter me to pass parameters
                </button>
            </div>
            <hr />
            <div name="no3">
                <h2>No.3 表单</h2>
                <hr />
                <h3>1.$ref获取引用 <v-model></v-model></h3>
                <p>
                    <button @click="getRef">find me by ref</button>
                    <input v-model="logRef" ref="logRef" />
                    <br />
                    {{ logRef }}
                </p>
                <hr />
                <h3>2.form表单</h3>
                <form class="vform">
                    <hr />
                    <label for="name">1.输入框-name {{ userInfo.name }}</label>
                    <input
                        id="name"
                        v-model="userInfo.name"
                        type="text"
                    /><br />
                    <label for="age">2.输入框-age: {{ userInfo.age }}</label>
                    <input id="age" v-model="userInfo.age" type="text" /><br />
                    <label>3.单选-gender</label>
                    <input
                        name="gender"
                        id="male"
                        value="1"
                        v-model="userInfo.gender"
                        type="radio"
                    />
                    <label for="male">boy</label>
                    <input
                        name="gender"
                        id="female"
                        value="0"
                        v-model="userInfo.gender"
                        type="radio"
                    />
                    <label for="female">girl</label>
                    <br />
                    <label>4.下拉列表-city</label>
                    <select v-model="userInfo.cityselected">
                        <option
                            v-for="(item, index) in city"
                            :key="index"
                            :value="item"
                        >
                            {{ item }}
                        </option>
                    </select>
                    <br />
                    <label>5.多选-hobby</label>
                    <div v-for="(item, index) in hobby" :key="index">
                        <input
                            :id="index"
                            type="checkbox"
                            :value="item"
                            v-model="userInfo.hobby"
                        />
                        <label :for="index">{{ item }}</label>
                    </div>
                </form>
                <pre>输入userInfo源码: {{ userInfo }}</pre>
            </div>
            <hr />
        </div>
        <div name="section3">
            <div name="no4">
                <h2>No4.数据处理</h2>
                <hr />
                <h3>1.compute计算属性</h3>
                <div name="searcher">
                    <input
                        v-model="keyword"
                        type="text"
                        placeholder="search bar"
                    /><br />
                    <span>result:</span>
                    <p v-for="(item, index) in searchResult" :key="index">
                        &nbsp;&nbsp;&nbsp;&nbsp;{{ item }}
                    </p>
                </div>
                <hr />

                <h3>2.watch监听数据</h3>
                <input
                    type="text"
                    v-model="firstName"
                    placeholder="firstName"
                />
                <br />
                <input type="text" v-model="lastName" placeholder="lastName" />
                <p>
                    {{ fullName }}
                </p>
                <br />
            </div>
            <hr />
        </div>
    </div>
</template>
<script>
import vueIcon from "./../assets/logo.png";
export default {
    data() {
        return {
            //basic data
            msg: "this is a common message",
            vhtml: "'<span style='color:red'>red font</span>'",
            vhref: vueIcon,
            vsrc: "alt",
            logRef: "",
            keyword: "",
            firstName: "",
            lastName: "",
            fullName: "",
            ArrayList: ["mugu", "bukun", "oliver"],
            ArrayObjectList: [
                { name: "mugu" },
                { name: "bukun" },
                { name: "oliver" },
            ],
            ObjectList: { name: "mugu", age: "21", hobby: "skaeBoard" },
            ComposeList: [
                {
                    name: "mugu",
                    hobby: ["1", "1", "1"],
                },
                {
                    name: "bukun",
                    hobby: ["2", "2", "2"],
                },
                {
                    name: "oliver",
                    hobby: ["3", "3", "3"],
                },
            ],
            vclass: "",
            isBold: false,
            isRed: false,

            // form
            hobby: ["skating", "coding", "running"],
            city: ["beijing", "guangzhou", "shanghai"],
            userInfo: {
                name: "",
                age: "21",
                gender: "",
                cityselected: "",
                hobby: [],
                note: "",
            },
        };
    },
    computed: {
        searchResult() {
            let temArr = [];
            this.ArrayList.forEach((e) => {
                if (e.indexOf(this.keyword) != -1 && this.keyword != "") {
                    temArr.push(e);
                }
            });
            return temArr == "" ? ["unfound"] : temArr;
        },
    },
    watch: {
        firstName: function (value) {
            this.fullName = value + " " + this.lastName;
        },
        lastName: function (value) {
            this.fullName = this.firstName + " " + value;
        },
    },
    methods: {
        changeVsrc() {
            if (this.vsrc == "alt") {
                this.vsrc = "src";
            } else {
                this.vsrc = "alt";
            }
        },
        changeVclass() {
            this.isRed ? (this.vclass = "") : (this.vclass = "redFont");
            this.isRed = !this.isRed;
            this.isBold = !this.isBold;
        },
        getEvent(e) {
            alert(e.target.outerText);
            console.log(e);
        },
        preventJump(e) {
            e.preventDefault();
        },
        passParameters(pa1, e) {
            alert(pa1);
            console.log(e.target.outerText);
        },
        getRef() {
            this.logRef = this.$refs.logRef;
        },
        getCity() {
            console.log("dddd");
        },
    },
};
</script>
<style scoped >
h2 {
    font-style: italic;
    background: #41b883;
}
.container {
    text-align: left;
    margin: 2rem;
    display: flex;
    justify-content: space-around;
}
.container > div {
    width: 33%;
}
.redFont {
    color: red;
}
.boldFont {
    font-weight: bolder;
}
img {
    outline: green 1px solid;
}
.vform {
    margin: 0.3rem;
}
.vform > label {
    padding: 0.5rem;
}
</style>